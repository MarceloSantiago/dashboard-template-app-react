import type { FC } from 'react';
import clsx from 'clsx';

interface ExampleComponentProps {
  title: string;
  description: string;
  variant?: 'default' | 'card' | 'inline';
  className?: string;
}

export const ExampleComponent: FC<ExampleComponentProps> = ({
  title,
  description,
  variant = 'default',
  className,
}) => {
  return (
    <div
      className={clsx(
        'rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800',
        variant === 'card' && 'p-6 shadow-sm',
        variant === 'inline' && 'p-4',
        className
      )}
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};
