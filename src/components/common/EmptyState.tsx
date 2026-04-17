import type { FC } from 'react';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  action?: { label: string; onClick: () => void };
  className?: string;
}

export const EmptyState: FC<EmptyStateProps> = ({
  icon,
  title,
  subtitle,
  action,
  className,
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-16 text-center ${className ?? ''}`}>
      <div className="text-gray-300 dark:text-gray-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mb-6">{subtitle}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};
