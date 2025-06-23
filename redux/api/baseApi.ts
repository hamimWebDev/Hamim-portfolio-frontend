import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { toast } from "sonner";



const baseQuery = fetchBaseQuery({
  baseUrl: `https://hamim-portfolio-backend.vercel.app/api`,
  credentials: "include",
});

// token expired hola new refresh token generate code
const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 404) {
    toast.error((result?.error?.data as any)?.message);
  }
  if (result?.error?.status === 403) {
    toast.error((result?.error?.data as any)?.message);
  }
  if (result?.error?.status === 401) {
    const res = await fetch(
      "https://e-commerce-backend-seven-beta.vercel.app/api/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );

    const data = await res.json();

   
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["admins", "users", "categories", "products", "cart", "orders", "blogs", "journey s"],
  endpoints: () => ({}),
});
