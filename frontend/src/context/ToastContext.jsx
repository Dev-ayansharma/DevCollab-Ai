"use client"

import { createContext, useState, useContext } from "react"

const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const addToast = (message, type = "info") => {
    const id = Date.now()
    const toast = { id, message, type }
    setToasts((prev) => [...prev, toast])

    // Auto remove after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            {toast.message}
          </div>
        ))}
      </div>
      <style jsx="true">{`
        .toast-container {
          position: fixed;
          top: 1rem;
          right: 1rem;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .toast {
          padding: 1rem 1.5rem;
          border-radius: 8px;
          color: white;
          font-weight: 500;
          animation: slideIn 0.3s ease-out;
        }

        .toast-success {
          background: #10b981;
        }

        .toast-error {
          background: #ef4444;
        }

        .toast-info {
          background: #3b82f6;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  return useContext(ToastContext)
}

export default ToastProvider