/**
 * Validation utilities
 */

export interface ValidationRule<T = any> {
  validate: (value: T) => boolean
  message: string
}

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export class Validator {
  private rules: ValidationRule[] = []

  addRule(rule: ValidationRule): this {
    this.rules.push(rule)
    return this
  }

  validate(value: any): ValidationResult {
    const errors: string[] = []

    for (const rule of this.rules) {
      if (!rule.validate(value)) {
        errors.push(rule.message)
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  static required(message = 'This field is required'): ValidationRule {
    return {
      validate: (value) => value !== null && value !== undefined && value !== '',
      message
    }
  }

  static minLength(min: number, message?: string): ValidationRule {
    return {
      validate: (value) => typeof value === 'string' && value.length >= min,
      message: message || `Must be at least ${min} characters long`
    }
  }

  static maxLength(max: number, message?: string): ValidationRule {
    return {
      validate: (value) => typeof value === 'string' && value.length <= max,
      message: message || `Must be no more than ${max} characters long`
    }
  }

  static email(message = 'Must be a valid email address'): ValidationRule {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return {
      validate: (value) => typeof value === 'string' && emailRegex.test(value),
      message
    }
  }

  static url(message = 'Must be a valid URL'): ValidationRule {
    return {
      validate: (value) => {
        try {
          new URL(value)
          return true
        } catch {
          return false
        }
      },
      message
    }
  }

  static pattern(regex: RegExp, message = 'Invalid format'): ValidationRule {
    return {
      validate: (value) => typeof value === 'string' && regex.test(value),
      message
    }
  }

  static custom<T>(
    validateFn: (value: T) => boolean,
    message: string
  ): ValidationRule<T> {
    return {
      validate: validateFn,
      message
    }
  }
}

/**
 * Validate YAML content
 */
export function validateYAML(yamlContent: string): ValidationResult {
  const validator = new Validator()
    .addRule(Validator.required('YAML content is required'))
    .addRule(Validator.custom(
      (value: string) => {
        try {
          // Basic YAML structure validation
          const lines = value.split('\n')
          let hasValidStructure = false
          
          for (const line of lines) {
            const trimmed = line.trim()
            if (trimmed && !trimmed.startsWith('#')) {
              // Check for basic YAML key-value structure
              if (trimmed.includes(':') || trimmed.startsWith('-')) {
                hasValidStructure = true
                break
              }
            }
          }
          
          return hasValidStructure
        } catch {
          return false
        }
      },
      'Invalid YAML structure'
    ))

  return validator.validate(yamlContent)
}

/**
 * Validate agent configuration
 */
export function validateAgentConfig(config: any): ValidationResult {
  const errors: string[] = []

  if (!config.name || typeof config.name !== 'string') {
    errors.push('Agent name is required and must be a string')
  }

  if (config.name && config.name.length < 3) {
    errors.push('Agent name must be at least 3 characters long')
  }

  if (config.description && typeof config.description !== 'string') {
    errors.push('Agent description must be a string')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}