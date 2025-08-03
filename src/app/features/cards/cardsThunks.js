import { baseUrl } from "@/apiEndPoints";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const res = await fetch(`${baseUrl}/api/cards`);
  return await res.json();
});

export const addCard = createAsyncThunk("cards/addCard", async (card) => {
  const res = await fetch(`${baseUrl}/api/cards`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  });
  return await res.json();
});

export const deleteCard = createAsyncThunk("cards/deleteCard", async (id) => {
  const res = await fetch(`${baseUrl}/api/cards`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  return id;
});
