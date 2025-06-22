import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllProducts: builder.query({
      query: () => {
        let url = "/work";
        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["products"],
      transformResponse: (response: any) => {
        return response?.data;
      },
    }),

  }),
});

export const {
  useGetAllProductsQuery,
} = productsApi;
