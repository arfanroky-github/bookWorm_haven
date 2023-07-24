import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookSearchFiltarableType } from "./bookInterface";

const initialState: BookSearchFiltarableType = {
  searchTerm: "",
  page: 1,
  limit: 10,
  sortBy: "title",
  sortOrder: "asc",
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
      action: PayloadAction<{ type: string; payload: string }>
    ) {
      switch (action.type) {
        case "searchTerm":
          return { ...state, searchTerm: action.payload };
        case "author":
          return { ...state, author: action.payload };
        case "genre":
          return { ...state, genre: action.payload };
        case "publication":
          return { ...state, publication: action.payload };
        default:
          return state;
      }
    },
    handlePageAndLimit(
      state,
      action: PayloadAction<{ type: string; payload: number }>
    ) {
      switch (action.type) {
        case "page":
          return { ...state, page: action.payload };
        case "limit":
          return { ...state, limit: action.payload };
        default:
          return state;
      }
    },
    handleSortByAndSortOrder(
      state,
      action: PayloadAction<{ type: string; payload: string }>
    ) {
      switch (action.type) {
        case "sortBy":
          return { ...state, sortBy: action.payload };
        case "sortOrder":
          return { ...state, sortOrder: action.payload };
        default:
          return state;
      }
    },
  },
});

export const { setSearchTerm, handlePageAndLimit, handleSortByAndSortOrder } =
  bookSlice.actions;

export const bookReducer = bookSlice.reducer;
