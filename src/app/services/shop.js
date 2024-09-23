import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
        postRegister: builder.mutation({
            query: (newUser) => ({
                url: '/sessions/register', // Especifica la URL correcta
                method: 'POST',
                body: newUser, // Aquí se espera que newUser sea un objeto con los datos del nuevo usuario
                headers: {
                    'Content-Type': 'application/json', // Asegúrate de que el tipo de contenido esté configurado
                },
            }),
        }),
    }),
});

export const { useGetProductsQuery, useGetProductQuery, usePostRegisterMutation } = shopApi;
