/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import api from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ({
        url: `/book/get-all-books`,
        method: "get",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken") as string) as string}`,
        },
      }),
    }),
  }),
});

export const { useGetAllBooksQuery } = bookApi;
