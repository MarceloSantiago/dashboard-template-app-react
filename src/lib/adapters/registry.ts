import type { AdapterRegistry, ExternalServiceAdapter } from './types';

export const ADAPTERS: AdapterRegistry = {};

export function registerAdapter(adapter: ExternalServiceAdapter): void {
  ADAPTERS[adapter.slug] = adapter;
}

export function getAdapter(slug: string): ExternalServiceAdapter {
  const adapter = ADAPTERS[slug];
  if (!adapter) throw new Error(`Adapter not found: ${slug}`);
  return adapter;
}

export function getAdaptersByCategory(category: string) {
  return Object.values(ADAPTERS).filter((a) => a.category === category);
}

export function getAvailableAdapters() {
  return Object.values(ADAPTERS).filter((a) => a.isAvailable);
}
