import { apiSlice } from "./index";

export const battleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyBattle: builder.query({
      query: (id) => ({
        url: `/user/${id}/battle/`,
        method: "GET",
      }),
    }),
    getCategoryBattle: builder.query({
      query: () => ({
        url: `/quizz/category`,
        method: "GET",
      }),
    }),

    getQuestionBattle: builder.query({
      query: (category = "") => ({
        url: `/quizz${category}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMyBattleQuery, useGetCategoryBattleQuery } =
  battleApiSlice;
