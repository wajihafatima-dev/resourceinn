// import { NextResponse } from "next/server";
// import { connectDb } from "@/lib/db";
// import { Card } from "..//..//";

// // GET
// export async function GET() {
//   await connectDb();
//   const cards = await Card.find();
//   return NextResponse.json(cards);
// }

// // POST
// export async function POST(req) {
//   try {
//     await connectDb();
//     const body = await req.json();
//     const { title, description } = body;

//     if (!title || description ) {
//       return NextResponse.json({ message: "Missing fields" }, { status: 400 });
//     }

//     const newCard = await Card.create({ title, description });
//     return NextResponse.json(newCard, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ message: "Server error" }, { status: 500 });
//   }
// }
// app/api/cards/route.js (dummy API for testing only)

import connectDB from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
let cards= [
    { id: 1, title: "Shifts", description: 1235 },
    { id: 2, title: "Expected Minutes", description: 1235 },
    { id: 3, title: "Worked Minutes", description: 1235 },
    { id: 4, title: "Short Minutes", description: 1235 },
    { id: 5, title: "Leaves", description: 1235 },
    { id: 6, title: "Approved Overtime Minutes", description: 1235 },
    { id: 6, title: "Overtime Minutes", description: 1235 },
    { id: 6, title: "Early Arrival Minutes", description: 1235 },
  ]

export async function GET() {
  return NextResponse.json(cards, { status: 200 });
}
export async function POST(req) {
  const body = await req.json();
  const newCard = {
    id: String(Date.now()),
    title: body.title,
    description: body.description,
  };
  cards.push(newCard);
  return NextResponse.json(newCard, { status: 201 });
}
export async function DELETE(req) {
  const { id } = await req.json();
  cards = cards.filter((card) => card.id !== id);
  return NextResponse.json({ message: "Deleted" }, { status: 200 });
}