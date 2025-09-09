import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  CategoriesResponse,
  QuestionsResponse,
} from '../../types/api.types';
import { DUMMY_API_URL } from '../../utils/constants.utils';

export const plantsApi = createApi({
  reducerPath: 'plantsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: DUMMY_API_URL,
    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Categories', 'Questions'],
  endpoints: builder => ({
    getCategories: builder.query<CategoriesResponse, void>({
      query: () => 'getCategories',
      providesTags: ['Categories'],
      transformResponse: (response: CategoriesResponse) => {
        return {
          ...response,
          data: response.data.sort((a, b) => a.rank - b.rank),
        };
      },
    }),
    getQuestions: builder.query<QuestionsResponse, void>({
      query: () => 'getQuestions',
      providesTags: ['Questions'],
      transformResponse: (response: QuestionsResponse) => {
        return response.sort((a, b) => a.order - b.order);
      },
    }),
  }),
});

export const { useGetCategoriesQuery, useGetQuestionsQuery } = plantsApi;
