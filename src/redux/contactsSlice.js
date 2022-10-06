import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
    }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: data => ({
                url: '/contacts',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
});

export const {
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation } = contactsApi;