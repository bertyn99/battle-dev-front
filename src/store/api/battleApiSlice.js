import { apiSlice } from "./index";

export const battleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyBattle: builder.query({
      query: (id) => ({
        url: `/user/${id}/battle/`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMyBattleQuery } = battleApiSlice;
