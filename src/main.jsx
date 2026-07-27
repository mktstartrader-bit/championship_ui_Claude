import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext'
import './styles/tokens.css'
import './styles/global.css'

const rootEl = document.getElementById('root')
const app = (
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
)

// Prerendered static builds ship real content inside #root — hydrate it so the
// JS layer (ambient effects, interactivity) attaches without wiping the DOM.
// Plain dev/build starts with an empty #root, so fall back to createRoot.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
