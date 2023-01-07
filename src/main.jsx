import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { NavigationProvider } from './context/navigation'
import { AuthContextProvider } from './store/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
