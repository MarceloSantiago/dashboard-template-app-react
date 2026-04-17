import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { exampleService } from '../services/example.service';
import type { ExampleCreateInput, ExampleUpdateInput } from '../types';

export function useExamples() {
  return useQuery({
    queryKey: ['examples'],
    queryFn: async () => {
      const { data } = await exampleService.list();
      return data;
    },
  });
}

export function useExample(id: string) {
  return useQuery({
    queryKey: ['examples', id],
    queryFn: async () => {
      const { data } = await exampleService.get(id);
      return data;
    },
    enabled: !!id,
  });
}

export function useCreateExample() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: ExampleCreateInput) => {
      const { data } = await exampleService.create(input);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['examples'] });
    },
  });
}

export function useUpdateExample() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...input }: ExampleUpdateInput & { id: string }) => {
      const { data } = await exampleService.update(id, input);
      return data;
    },
    onSuccess: (_data: unknown, variables: { id: string }) => {
      queryClient.invalidateQueries({ queryKey: ['examples'] });
      queryClient.invalidateQueries({ queryKey: ['examples', variables.id] });
    },
  });
}

export function useDeleteExample() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await exampleService.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['examples'] });
    },
  });
}
