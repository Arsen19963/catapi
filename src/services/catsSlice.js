import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const catsSlice = createApi({
    reducerPath: 'cats',
    baseQuery: fetchBaseQuery({baseURL: `https://api.thecatapi.com/v1/`}),
    endpoints: (builder)=> ({
        getCats: builder.query({
            query:()=>  `categories`
        })
    })
})

export const {useGetCatsQuery} = catsSlice;