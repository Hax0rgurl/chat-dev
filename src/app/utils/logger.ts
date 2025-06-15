/**
 * Enhanced logging utility with different log levels and structured logging
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

export interface LogEntry {
  timestamp: string
  level: LogLevel
  message: string
  data?: any
  source?: string
}

class Logger {
  private static instance: Logger
  private logLevel: LogLevel = LogLevel.INFO
  private logs: LogEntry[] = []
  private maxLogs = 1000

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  setLogLevel(level: LogLevel): void {
    this.logLevel = level
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.logLevel
  }

  private createLogEntry(level: LogLevel, message: string, data?: any, source?: string): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      source
    }
  }

  private addLog(entry: LogEntry): void {
    this.logs.push(entry)
    
    // Keep only the most recent logs
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs)
    }
  }

  debug(message: string, data?: any, source?: string): void {
    if (!this.shouldLog(LogLevel.DEBUG)) return
    
    const entry = this.createLogEntry(LogLevel.DEBUG, message, data, source)
    this.addLog(entry)
    console.debug(`[DEBUG] ${message}`, data)
  }

  info(message: string, data?: any, source?: string): void {
    if (!this.shouldLog(LogLevel.INFO)) return
    
    const entry = this.createLogEntry(LogLevel.INFO, message, data, source)
    this.addLog(entry)
    console.info(`[INFO] ${message}`, data)
  }

  warn(message: string, data?: any, source?: string): void {
    if (!this.shouldLog(LogLevel.WARN)) return
    
    const entry = this.createLogEntry(LogLevel.WARN, message, data, source)
    this.addLog(entry)
    console.warn(`[WARN] ${message}`, data)
  }

  error(message: string, data?: any, source?: string): void {
    if (!this.shouldLog(LogLevel.ERROR)) return
    
    const entry = this.createLogEntry(LogLevel.ERROR, message, data, source)
    this.addLog(entry)
    console.error(`[ERROR] ${message}`, data)
  }

  getLogs(level?: LogLevel): LogEntry[] {
    if (level !== undefined) {
      return this.logs.filter(log => log.level >= level)
    }
    return [...this.logs]
  }

  clearLogs(): void {
    this.logs = []
  }

  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2)
  }
}

export const logger = Logger.getInstance()

// Set log level based on environment
if (import.meta.env.DEV) {
  logger.setLogLevel(LogLevel.DEBUG)
} else {
  logger.setLogLevel(LogLevel.WARN)
}