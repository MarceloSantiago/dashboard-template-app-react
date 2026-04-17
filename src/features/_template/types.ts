export interface Example {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  updatedAt: string;
}

export type ExampleCreateInput = Pick<Example, 'name' | 'description'>;
export type ExampleUpdateInput = Partial<Pick<Example, 'name' | 'description' | 'status'>>;
