export interface CredentialField {
  key: string;
  label: string;
  type: 'text' | 'password' | 'url' | 'select';
  placeholder: string;
  required: boolean;
  options?: Array<{ value: string; label: string }>;
}

export interface ConnectionResult {
  success: boolean;
  message?: string;
  meta?: Record<string, unknown>;
}

export interface ExternalServiceAdapter<TCredentials = Record<string, string>> {
  readonly name: string;
  readonly slug: string;
  readonly logoUrl: string;
  readonly category: 'cms' | 'crm' | 'analytics' | 'ecommerce' | 'other';
  readonly requiredCredentials: CredentialField[];
  readonly isAvailable: boolean;

  testConnection(credentials: TCredentials): Promise<ConnectionResult>;
}

export type AdapterRegistry = Record<string, ExternalServiceAdapter>;
