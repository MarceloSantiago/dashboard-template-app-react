import { api } from '@/api/client';
import type { Example, ExampleCreateInput, ExampleUpdateInput } from '../types';

export const exampleService = {
  list: (params?: Record<string, unknown>) =>
    api.get<Example[]>('/examples', { params }),

  get: (id: string) =>
    api.get<Example>(`/examples/${id}`),

  create: (data: ExampleCreateInput) =>
    api.post<Example>('/examples', data),

  update: (id: string, data: ExampleUpdateInput) =>
    api.patch<Example>(`/examples/${id}`, data),

  delete: (id: string) =>
    api.delete(`/examples/${id}`),
};
