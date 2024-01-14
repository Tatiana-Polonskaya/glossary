import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Edge, Node } from "reactflow";

export const termApi = createApi({
    reducerPath: "termApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:80" }),
    endpoints: (builder) => ({
        getNodes: builder.query<Node[], void>({
            query: () => ({
                url: "/nodes",
            }),
        }),
        getEdges: builder.query<Edge[], void>({
            query: () => ({
                url: "/edges",
            }),
        }),
    }),
});

export const { useGetNodesQuery, useGetEdgesQuery } = termApi;
