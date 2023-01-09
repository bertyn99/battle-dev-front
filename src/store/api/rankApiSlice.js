import { apiSlice } from "./index";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyBoard: builder.query({
      query: () => ({
        url: `/user/me`,
        method: "GET",
      }),
    }),
    getUserInfo: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
    }),
    updateUserInfo: builder.mutation({
      query: (id, updateData) => ({
        url: `/user/${id}`,
        method: "POST",
        body: { ...updateData },
      }),
    }),
  }),
});

export const {
  useGetMyInfoQuery,
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} = userApiSlice;
