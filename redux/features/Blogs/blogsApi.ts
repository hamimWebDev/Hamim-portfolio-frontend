import { baseApi } from "../../api/baseApi";

const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllblogs: builder.query({
      query: () => {
        let url = "/blog";
        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["blogs"],
      transformResponse: (response: any) => {
        return response?.data;
      },
    }),
    getBlogById: builder.query({
      query: (id: string) => ({
        url: `/blog/${id}`,
        method: "GET",
      }),
      providesTags: ["blogs"],
      transformResponse: (response: any) => response?.data,
    }),
  }),
});

export const {
  useGetAllblogsQuery,
  useGetBlogByIdQuery
} = blogsApi;
