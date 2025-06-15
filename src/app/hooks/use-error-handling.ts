import { useCallback } from 'react'
import { toast } from 'react-hot-toast'
import { ChatError, ErrorCode } from '~utils/errors'

export interface ErrorHandlingOptions {
  showToast?: boolean
  position?: 'top-center' | 'top-right' | 'bottom-right' | 'bottom-center'
  duration?: number
}

export function useErrorHandling() {
  const handleError = useCallback((
    error: unknown, 
    fallbackMessage = 'An unexpected error occurred',
    options: ErrorHandlingOptions = {}
  ) => {
    const { showToast = true, position = 'top-center', duration = 4000 } = options
    
    let errorMessage = fallbackMessage
    
    if (error instanceof ChatError) {
      errorMessage = error.message
    } else if (error instanceof Error) {
      errorMessage = error.message
    } else if (typeof error === 'string') {
      errorMessage = error
    }
    
    console.error('Error handled:', error)
    
    if (showToast) {
      toast.error(errorMessage, {
        position,
        duration,
      })
    }
    
    return errorMessage
  }, [])

  const handleAsyncError = useCallback(async <T>(
    asyncFn: () => Promise<T>,
    fallbackMessage = 'Operation failed',
    options: ErrorHandlingOptions = {}
  ): Promise<T | null> => {
    try {
      return await asyncFn()
    } catch (error) {
      handleError(error, fallbackMessage, options)
      return null
    }
  }, [handleError])

  return { handleError, handleAsyncError }
}