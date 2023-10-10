import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const financeApi = createApi({
  reducerPath: "financeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://h.mmsdev.site/api/v1`,
  }),
  tagTypes: ["finance"],

  endpoints: (builder) => ({
    getDaily: builder.query({
      query: (token) => ({
        url: `/daily_sale_records?date=2023-10-9`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["finance"],
    }),
    getMonthly: builder.query({
        query: (token) => ({
          url: `/daily_sale_records?date=2023-10-9`,
          headers: { authorization: `Bearer ${token}` },
        }),
        providesTags: ["finance"],
      }),
      getYearly: builder.query({
        query: (token) => ({
          url: `/daily_sale_records?date=2023-10-9`,
          headers: { authorization: `Bearer ${token}` },
        }),
        providesTags: ["finance"],
      }),
      getCustom: builder.query({
        query: (token) => ({
          url: `/daily_sale_records?date=2023-10-9`,
          headers: { authorization: `Bearer ${token}` },
        }),
        providesTags: ["finance"],
      }),
  }),
});

export const {useGetDailyQuery,useGetMonthlyQuery,useGetYearlyQuery,useGetCustomQuery
} = financeApi;
