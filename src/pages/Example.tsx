import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../store/auth.store';
import { authService, LoginCredentials, AuthResponse } from '../api/auth.service';
import { ApiError } from '../api/client';
import { loginSchema, LoginFormData } from '../utils/schemas';
import Button from '../components/ui/button/Button';
import Label from '../components/form/Label';

export default function ExamplePage() {
  const { t } = useTranslation();
  const { user, isAuthenticated, login, logout } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response: AuthResponse = await authService.login(data as LoginCredentials);
      login(response.user, response.token);
      setSuccess(true);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError(t('messages.error'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    setSuccess(false);
  };

  if (isAuthenticated && user) {
    return (
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-boxdark dark:text-white">
            {t('home.welcome')}, {user.name}!
          </h1>
          <p className="text-gray-400 dark:text-gray-400">{user.email}</p>
        </div>

        <div className="rounded-sm border border-stroke bg-white p-6 shadow-sm dark:border-strokedark dark:bg-boxdark">
          <h2 className="mb-4 text-lg font-semibold text-boxdark dark:text-white">
            Auth Store Demo
          </h2>
          <pre className="mb-4 overflow-auto rounded bg-gray-100 p-4 text-sm dark:bg-meta-4">
            {JSON.stringify({ user, isAuthenticated }, null, 2)}
          </pre>
          <Button onClick={handleLogout}>
            {t('auth.logout')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-boxdark dark:text-white">
          {t('menu.example')} - Auth + i18n
        </h1>
        <p className="text-gray-400 dark:text-gray-400">{t('home.welcome')}</p>
      </div>

      <div className="rounded-sm border border-stroke bg-white p-6 shadow-sm dark:border-strokedark dark:bg-boxdark">
        <h2 className="mb-4 text-lg font-semibold text-boxdark dark:text-white">
          {t('auth.login')} Form
        </h2>

        {error && (
          <div className="mb-4 rounded border border-error-500 bg-error-50 p-4 text-sm text-error-500 dark:bg-error-500/15">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 rounded border border-success-500 bg-success-50 p-4 text-sm text-success-500 dark:bg-success-500/15">
            {t('messages.loginSuccess')}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label>
              {t('auth.email')} <span className="text-error-500">*</span>
            </Label>
            <input
              className="w-full rounded-lg border border-stroke bg-transparent px-4 py-2 text-boxdark outline-none transition focus:border-primary dark:border-strokedark dark:bg-boxdark dark:text-white"
              placeholder={t('auth.email')}
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label>
              {t('auth.password')} <span className="text-error-500">*</span>
            </Label>
            <input
              type="password"
              className="w-full rounded-lg border border-stroke bg-transparent px-4 py-2 text-boxdark outline-none transition focus:border-primary dark:border-strokedark dark:bg-boxdark dark:text-white"
              placeholder={t('auth.password')}
              {...register('password')}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-error-500">{errors.password.message}</p>
            )}
          </div>

          <Button disabled={isLoading}>
            {isLoading ? t('common.loading') : t('auth.login')}
          </Button>
        </form>

        <div className="mt-6 rounded bg-gray-100 p-4 text-sm dark:bg-meta-4">
          <p className="font-medium">{t('common.save')}:</p>
          <p className="text-gray-400 dark:text-gray-400">
            {t('home.gettingStarted')}
          </p>
        </div>
      </div>
    </div>
  );
}
