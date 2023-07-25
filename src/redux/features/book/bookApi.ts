/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import api from "../../api/apiSlice";
import { BookSearchFiltarableType, BookType } from "./bookInterface";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query<
      { data: BookType[]; total: number },
      BookSearchFiltarableType
    >({
      query: ({
        page,
        limit,
        sortBy,
        sortOrder,
        searchTerm,
        author,
        genre,
        publication,
      }: BookSearchFiltarableType) => ({
        url: `/book/get-all-books?
        page=${page}&limit=${limit}
        ${sortBy ? `&sortBy=${sortBy}` : ""}
        ${sortOrder ? `&sortBy=${sortOrder}` : ""}
        ${searchTerm ? `&searchTerm=${searchTerm}` : ""}
        ${author ? `&author=${author}` : ""}
        ${genre ? `&genre=${genre}` : ""}
        ${publication ? `&publication=${publication}` : ""}
       `,
        method: "get",
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("accessToken") as string) as string
          }`,
        },
      }),
    }),
  }),
});

export const { useGetAllBooksQuery } = bookApi;
