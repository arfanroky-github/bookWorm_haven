/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import api from "../../api/apiSlice";
import { User } from "./userInterface";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<User, User>({
      query: (payload) => ({
        url: `/auth/login`,
        method: "POST",
        body: payload,
      }),
    }),
    signupUser: builder.mutation({
      query: ({data}) => ({
        url: "/auth/signup",
        method: "post",
        body: data
      }),
      transformResponse: (response: { data: User }, meta, arg) => response.data,
    }),
  }),
});

export const { useLoginUserMutation, useSignupUserMutation } = userApi;
