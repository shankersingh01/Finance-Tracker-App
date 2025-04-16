"use client";

import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const categories = [
  "Food",
  "Transportation",
  "Housing",
  "Utilities",
  "Entertainment",
  "Shopping",
  "Healthcare",
  "Other",
];

interface Transaction {
  _id: string;
  category: string;
  amount: number;
}

interface Budget {
  _id: string;
  category: string;
  amount: number;
}

export default function BudgetComparison({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [loading, setLoading] = useState(false);
  const [newBudget, setNewBudget] = useState({ category: "", amount: "" });

  useEffect(() => {
    fetchBudgets();
  }, []);

  const fetchBudgets = async () => {
    try {
      const response = await fetch("/api/budgets");
      const data = await response.json();
      setBudgets(data);
    } catch (error) {
      console.error("Failed to fetch budgets:", error);
    }
  };

  const handleAddBudget = async () => {
    if (!newBudget.category || !newBudget.amount) return;

    setLoading(true);
    try {
      const response = await fetch("/api/budgets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newBudget,
          amount: parseFloat(newBudget.amount),
          month: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error("Failed to create budget");

      setNewBudget({ category: "", amount: "" });
      fetchBudgets();
    } catch (error) {
      console.error("Error creating budget:", error);
    } finally {
      setLoading(false);
    }
  };

  const getCategorySpending = (category: string) => {
    return transactions
      .filter((t) => t.category === category)
      .reduce((sum, t) => sum + t.amount, 0);
  };

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Select
            value={newBudget.category}
            onValueChange={(value) =>
              setNewBudget({ ...newBudget, category: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="number"
            placeholder="Budget amount"
            value={newBudget.amount}
            onChange={(e) =>
              setNewBudget({ ...newBudget, amount: e.target.value })
            }
          />

          <Button onClick={handleAddBudget} disabled={loading}>
            {loading ? "Adding..." : "Add Budget"}
          </Button>
        </div>
      </Card>

      <div className="space-y-4">
        {budgets.map((budget) => {
          // if (!transactions) return null;
          const spent = getCategorySpending(budget.category);
          const percentage = (spent / budget.amount) * 100;

          return (
            <Card key={budget._id} className="p-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">{budget.category}</h3>
                <p>
                  ${spent.toFixed(2)} / ${budget.amount.toFixed(2)}
                </p>
              </div>
              <Progress value={percentage} className="h-2" />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
