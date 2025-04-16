import { NextResponse } from "next/server";
import dbConnect from "./../../../../lib/db";
import { Transaction } from "./../../../../lib/models/transaction";

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const data = await request.json();
    const transaction = await Transaction.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(transaction);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update transaction" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    await Transaction.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Transaction deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete transaction" },
      { status: 500 }
    );
  }
}
