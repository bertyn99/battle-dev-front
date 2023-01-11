import { setCredentials } from "../slice/authSlice";
import { apiSlice } from "./index";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyInfo: builder.query({
      query: () => ({
        url: `/user/me`,
        method: "GET",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { user, accessToken },
          } = await queryFulfilled;
          dispatch(setCredentials({ user, accessToken }));
        } catch (error) {}
      },
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
