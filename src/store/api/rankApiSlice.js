import { apiSlice } from "./index";

export const rankApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyBoard: builder.query({
      query: () => ({
        url: `/leaderboard/me`,
        method: "GET",
      }),
    }),
    getTopBoard: builder.query({
      query: () => ({
        url: `/leaderboard`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMyBoardQuery, useGetTopBoardQuery } = rankApiSlice;
