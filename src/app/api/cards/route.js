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

import { NextResponse } from "next/server";

// Fake in-memory store
let cards = [
  { id: "1", title: "Task A", description: 50 },
  { id: "2", title: "Task B", description: 70 },
];

// GET
export async function GET() {
  return NextResponse.json(cards, { status: 200 });
}

// POST
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

// DELETE
export async function DELETE(req) {
  const { id } = await req.json();
  cards = cards.filter((card) => card.id !== id);
  return NextResponse.json({ message: "Deleted" }, { status: 200 });
}
