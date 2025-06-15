import { FC } from 'react'
import cx from 'classnames'

interface Props {
  size?: 'small' | 'medium' | 'large'
  className?: string
  text?: string
}

const LoadingSpinner: FC<Props> = ({ size = 'medium', className, text }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  }

  return (
    <div className={cx('flex flex-col items-center justify-center', className)}>
      <div
        className={cx(
          'animate-spin rounded-full border-2 border-gray-300 border-t-primary-blue',
          sizeClasses[size]
        )}
      />
      {text && (
        <p className="mt-2 text-sm text-secondary-text">{text}</p>
      )}
    </div>
  )
}

export default LoadingSpinner