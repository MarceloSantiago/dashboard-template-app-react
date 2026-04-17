import type { FC } from 'react';
import { LockIcon } from '@/icons';

interface PaywallOverlayProps {
  children: React.ReactNode;
  featureName: string;
  onUpgrade: () => void;
  className?: string;
}

export const PaywallOverlay: FC<PaywallOverlayProps> = ({
  children,
  featureName,
  onUpgrade,
  className,
}) => {
  return (
    <div className={`relative ${className ?? ''}`}>
      <div className="blur-sm pointer-events-none opacity-40 select-none">
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl text-center max-w-sm border border-violet-100 dark:border-violet-900">
          <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mx-auto mb-4">
            <LockIcon className="text-violet-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Funcionalidade Pro
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Faça upgrade para desbloquear <strong>{featureName}</strong>
          </p>
          <button
            onClick={onUpgrade}
            className="w-full px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors"
          >
            Fazer Upgrade →
          </button>
        </div>
      </div>
    </div>
  );
};
