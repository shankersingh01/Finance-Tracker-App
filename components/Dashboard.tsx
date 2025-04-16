"use client";

import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";
import ExpenseChart from "./ExpenseChart";
import CategoryChart from "./CategoryChart";
import BudgetComparison from "./BudgetComparison";
import { WalletCards } from "lucide-react";

interface Transaction {
  _id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
  createdAt: string;
}

export default function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch("/api/transactions");
      if (!response.ok) {
        throw new Error("Failed to fetch transactions");
      }
      const data = await response.json();
      setTransactions(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  };

  const totalExpenses = transactions.reduce(
    (sum, t) => sum + Number(t.amount),
    0
  );

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <WalletCards className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Personal Finance Tracker</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">Total Expenses</h3>
          <p className="text-3xl font-bold">${totalExpenses.toFixed(2)}</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">This Month</h3>
          <p className="text-3xl font-bold">
            $
            {transactions
              .filter(
                (t) => new Date(t.date).getMonth() === new Date().getMonth()
              )
              .reduce((sum, t) => sum + Number(t.amount), 0)
              .toFixed(2)}
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">Average Transaction</h3>
          <p className="text-3xl font-bold">
            $
            {transactions.length
              ? (totalExpenses / transactions.length).toFixed(2)
              : "0.00"}
          </p>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="charts">Charts</TabsTrigger>
          <TabsTrigger value="budgets">Budgets</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <TransactionForm onSuccess={fetchTransactions} />
          <TransactionList
            transactions={transactions}
            onTransactionChange={fetchTransactions}
          />
        </TabsContent>

        <TabsContent value="charts" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Monthly Expenses</h3>
              <ExpenseChart transactions={transactions} />
            </Card>
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Category Breakdown</h3>
              <CategoryChart transactions={transactions} />
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="budgets" className="space-y-4">
          <BudgetComparison transactions={transactions} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
