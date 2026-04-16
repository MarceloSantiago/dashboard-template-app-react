import { api, handleApiError } from './client';
import { useAuthStore } from '../store/auth.store';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  token: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>('/auth/login', credentials);
      const { user, token } = response.data;
      useAuthStore.getState().login(user, token);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout');
    } finally {
      useAuthStore.getState().logout();
    }
  },

  async register(data: { name: string; email: string; password: string }): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>('/auth/register', data);
      const { user, token } = response.data;
      useAuthStore.getState().login(user, token);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  async getCurrentUser(): Promise<AuthResponse['user']> {
    try {
      const response = await api.get<AuthResponse['user']>('/auth/me');
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};
