import { RouterProvider } from '@tanstack/react-router'
import { createRoot } from 'react-dom/client'
import '../services/sentry'
import './base.scss'
import './i18n'
import { plausible } from './plausible'
import { router } from './router'
import {initForWinStore} from "~services/storage/window-store";

// Apply theme immediately
import './theme'

const container = document.getElementById('app')!
const root = createRoot(container)

// Ensure the app container has proper styling
container.style.height = '100vh'
container.style.width = '100vw'
container.style.backgroundColor = '#ffffff'

initForWinStore().then(() => root.render(<RouterProvider router={router} />))

plausible.enableAutoPageviews()