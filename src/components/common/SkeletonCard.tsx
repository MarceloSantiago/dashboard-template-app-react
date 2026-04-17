import type { FC } from 'react';
import clsx from 'clsx';

interface SkeletonCardProps {
  lines?: number;
  height?: string;
  className?: string;
}

export const SkeletonCard: FC<SkeletonCardProps> = ({
  lines = 3,
  height = 'h-32',
  className,
}) => {
  return (
    <div
      className={clsx(
        height,
        'rounded-xl bg-white dark:bg-gray-800 p-4 animate-pulse border border-gray-100 dark:border-gray-700',
        className
      )}
    >
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4" />
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={clsx(
            'h-3 bg-gray-100 dark:bg-gray-700 rounded mb-2',
            i === lines - 1 ? 'w-2/3' : 'w-full'
          )}
        />
      ))}
    </div>
  );
};
