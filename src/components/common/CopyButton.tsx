import { useState, type FC } from 'react';
import { CopyIcon, CheckLineIcon } from '@/icons';
import clsx from 'clsx';

interface CopyButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CopyButton: FC<CopyButtonProps> = ({
  text,
  className,
  size = 'md',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }[size];

  return (
    <button
      onClick={handleCopy}
      className={clsx(
        sizeClasses,
        'flex items-center justify-center rounded-lg',
        'bg-gray-100 dark:bg-gray-700',
        'hover:bg-gray-200 dark:hover:bg-gray-600',
        'transition-colors duration-200',
        className
      )}
      title={copied ? 'Copiado!' : 'Copiar'}
    >
      {copied ? (
        <CheckLineIcon className={`${iconSizeClasses} text-green-600`} />
      ) : (
        <CopyIcon className={`${iconSizeClasses} text-gray-500 dark:text-gray-400`} />
      )}
    </button>
  );
};
