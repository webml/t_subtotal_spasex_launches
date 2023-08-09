import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const launchesApi = createApi({
  reducerPath: "launchesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/",
  }),
  endpoints: (build) => ({
    getLaunches: build.query({
      query: () => `v5/launches/`,
    }),

    getRocketImg: build.query({
      query: (id) => `v4/rockets/${id}`,
    }),
  }),
});

export const { useGetLaunchesQuery, useGetRocketImgQuery } = launchesApi;
