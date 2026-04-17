import type { FC } from 'react';
import { AlertIcon } from '@/icons';
import Button from '@/components/ui/button/Button';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'danger' | 'warning' | 'info';
  isLoading?: boolean;
}

export const ConfirmModal: FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  variant = 'info',
  isLoading = false,
}) => {
  if (!isOpen) return null;

  const iconBgClass = {
    danger: 'bg-red-100 dark:bg-red-900/30',
    warning: 'bg-yellow-100 dark:bg-yellow-900/30',
    info: 'bg-blue-100 dark:bg-blue-900/30',
  }[variant];

  const iconColorClass = {
    danger: 'text-red-600',
    warning: 'text-yellow-600',
    info: 'text-blue-600',
  }[variant];

  const buttonVariant = variant === 'danger' ? 'primary' : 'primary';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        <div className="p-6">
          <div className={`w-12 h-12 rounded-full ${iconBgClass} flex items-center justify-center mx-auto mb-4`}>
            <AlertIcon className={iconColorClass} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            {message}
          </p>
        </div>
        <div className="flex gap-3 p-4 bg-gray-50 dark:bg-gray-700/50">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isLoading}
            className="flex-1"
          >
            {cancelLabel}
          </Button>
          <Button
            variant={buttonVariant}
            onClick={onConfirm}
            disabled={isLoading}
            className="flex-1"
          >
            {isLoading ? 'Aguarde...' : confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
