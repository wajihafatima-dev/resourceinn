import { createSlice } from "@reduxjs/toolkit";
import { fetchCards, addCard, deleteCard } from "./cardsThunks";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.items = state.items.filter((c) => c._id !== action.payload);
      });
  },
});

export default cardsSlice.reducer;
