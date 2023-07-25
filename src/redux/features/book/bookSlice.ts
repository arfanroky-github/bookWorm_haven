import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookSearchFiltarableType } from "./bookInterface";

const initialState: BookSearchFiltarableType = {
  searchTerm: "",
  page: 1,
  limit: 4,
  sortBy: "",
  sortOrder: "",
  author: "",
  genre: "",
  publication: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    handleFilter(
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    },
    handlePageAndLimit(state, action: PayloadAction<number>) {
      const { type, payload } = action;
      switch (type) {
        case "page":
          return { ...state, page: payload };
        case "limit":
          return { ...state, limit: payload };
        default:
          return state;
      }
    },
    handleSortByAndSortOrder(state, action: PayloadAction<string>) {
      const { type, payload } = action;
      switch (type) {
        case "sortBy":
          return { ...state, sortBy: payload };
        case "sortOrder":
          return { ...state, sortOrder: payload };
        default:
          return state;
      }
    },
  },
});

export const { handleFilter, handlePageAndLimit, handleSortByAndSortOrder } =
  bookSlice.actions;

export const bookReducer = bookSlice.reducer;
