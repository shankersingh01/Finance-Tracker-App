'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { format } from 'date-fns';

export default function ExpenseChart({ transactions }: { transactions: any[] }) {
  const monthlyData = transactions.reduce((acc: any, transaction: any) => {
    const month = format(new Date(transaction.date), 'MMM yyyy');
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += transaction.amount;
    return acc;
  }, {});

  const data = Object.entries(monthlyData).map(([month, amount]) => ({
    month,
    amount,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="hsl(var(--primary))" />
      </BarChart>
    </ResponsiveContainer>
  );
}