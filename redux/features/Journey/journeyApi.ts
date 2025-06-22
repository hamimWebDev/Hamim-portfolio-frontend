import { baseApi } from "../../api/baseApi";

const journeyApi = baseApi.injectEndpoints({
    endpoints: (builder: any) => ({
        getAllJourneys: builder.query({
            query: () => {
                let url = "/journey";
                return {
                    url,
                    method: "GET",
                };
            },
            providesTags: ["journey"],
            transformResponse: (response: any) => {
                return response?.data;
            },
        }),

    }),
    overrideExisting: true,
});

export const {
    useGetAllJourneysQuery,
} = journeyApi;
