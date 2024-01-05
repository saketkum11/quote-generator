import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  randomQuotes: {},
  quote: [],
  bookmark: [],
  tags: [],
};
export const randomQuote = createAsyncThunk(
  "Quote/randomQuote",
  async (tag) => {
    try {
      console.log(tag);
      const res = await axios({
        method: "get",
        url: "https://api.quotable.io/random",
        params: {
          tags: tag,
        },
      });

      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getTags = createAsyncThunk("Quote/quoteTags", async () => {
  try {
    const { data } = await axios({
      method: "get",
      url: "https://api.quotable.io/tags",
    });
    return data;
  } catch (error) {
    console.error(error);
  }
});
const quoteSlice = createSlice({
  name: "Quote",
  initialState,
  reducers: {
    addToBookmark(state, action) {
      console.log(action);
      state.bookmark = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(randomQuote.fulfilled, (state, action) => {
        state.randomQuotes = action.payload;
      })
      .addCase(getTags.fulfilled, (state, action) => {
        state.tags = action.payload;
      });
  },
});
export const { addToBookmark } = quoteSlice.actions;
export default quoteSlice.reducer;
