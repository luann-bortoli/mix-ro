'use client'

import { Toaster } from 'react-hot-toast'

export default function ToastProvider() {
    return (
        <Toaster
            position="top-center"
            toastOptions={{
                duration: 3500,
                style: {
                    background: 'var(--color-surface)',
                    color: 'var(--color-text)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    boxShadow: '0 8px 24px var(--color-overlayer)',
                    textAlign: 'center',
                    wordBreak: 'normal',
                    overflowWrap: 'normal',
                    hyphens: 'none',
                },
                success: {
                    iconTheme: {
                        primary: '#4F8A62',
                        secondary: 'var(--color-surface)',
                    },
                    style: {
                        border: '1px solid #D5E8D8',
                    },
                },
                error: {
                    iconTheme: {
                        primary: 'var(--color-primary)',
                        secondary: 'var(--color-surface)',
                    },
                    style: {
                        border: '1px solid var(--color-card-border)',
                    },
                },
                loading: {
                    iconTheme: {
                        primary: 'var(--color-primary)',
                        secondary: 'var(--color-background-secondary)',
                    },
                },
            }}
        />
    )
}