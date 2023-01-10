import { apiSlice } from "./index";

export const rankApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyBoard: builder.query({
      query: (id) => ({
        url: `/user/${id}/battle`,
        method: "GET",
      }),
    }),
    getTopBoard: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMyBoardQuery, useGetTopBoardQuery } = rankApiSlice;
