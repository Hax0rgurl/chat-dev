import { RouterProvider } from '@tanstack/react-router'
import { createRoot } from 'react-dom/client'
import '../services/sentry'
import './base.scss'
import './i18n'
import { plausible } from './plausible'
import { router } from './router'
import {initForWinStore} from "~services/storage/window-store";

const container = document.getElementById('app')!
const root = createRoot(container)

// Add error boundary and fallback
const renderApp = () => {
  try {
    initForWinStore().then(() => {
      root.render(<RouterProvider router={router} />)
    }).catch((error) => {
      console.error('Failed to initialize:', error)
      // Fallback render
      root.render(
        <div style={{ 
          padding: '20px', 
          fontFamily: 'system-ui', 
          backgroundColor: '#ffffff',
          color: '#000000',
          minHeight: '100vh'
        }}>
          <h1>ChatDev IDE</h1>
          <p>Loading application...</p>
          <p style={{ color: '#666', fontSize: '14px' }}>
            If this message persists, please refresh the page.
          </p>
        </div>
      )
    })
  } catch (error) {
    console.error('Critical error:', error)
    root.render(
      <div style={{ 
        padding: '20px', 
        fontFamily: 'system-ui',
        backgroundColor: '#ffffff',
        color: '#000000',
        minHeight: '100vh'
      }}>
        <h1>ChatDev IDE</h1>
        <p>Application failed to load. Please refresh the page.</p>
      </div>
    )
  }
}

renderApp()

plausible.enableAutoPageviews()