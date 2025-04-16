import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['Food', 'Transportation', 'Housing', 'Utilities', 'Entertainment', 'Shopping', 'Healthcare', 'Other'],
  },
  amount: {
    type: Number,
    required: true,
  },
  month: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true,
});

export const Budget = mongoose.models.Budget || mongoose.model('Budget', budgetSchema);