'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const pushConsent = (granted: boolean) => {
    if (typeof window !== 'undefined') {
      ;(window as any).dataLayer = (window as any).dataLayer || []
      ;(window as any).dataLayer.push({
        event: 'consent_update',
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: granted ? 'granted' : 'denied',
      })
    }
  }

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    pushConsent(true)
    setVisible(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem('cookie_consent', 'minimal')
    pushConsent(false)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: '#2C3E50',
      color: '#ffffff',
      padding: '1.25rem 2rem',
      boxShadow: '0 -4px 24px rgba(0,0,0,0.25)',
    }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ margin: '0 0 0.4rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Wir verwenden Cookies und Google Tag Manager um die Nutzung unserer Website zu analysieren
              und zu verbessern. Sie können Ihre Einwilligung jederzeit widerrufen. Weitere Informationen
              in unserer{' '}
              <a href="/datenschutz" style={{ color: '#E8A87C', textDecoration: 'underline' }}>
                Datenschutzerklärung
              </a>.
            </p>
            <button
              onClick={() => setShowDetails(!showDetails)}
              style={{
                background: 'none',
                border: 'none',
                color: '#E8A87C',
                cursor: 'pointer',
                fontSize: '0.8rem',
                padding: 0,
                textDecoration: 'underline',
              }}
            >
              {showDetails ? 'Details ausblenden' : 'Details anzeigen'}
            </button>
          </div>

          <div style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexShrink: 0,
          }}>
            <button
              onClick={acceptNecessary}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#ffffff',
                padding: '0.6rem 1.25rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                minHeight: 44,
                whiteSpace: 'nowrap',
              }}
            >
              Nur notwendige
            </button>
            <button
              onClick={accept}
              style={{
                background: '#E8A87C',
                border: '1px solid #E8A87C',
                color: '#000000',
                padding: '0.6rem 1.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 600,
                minHeight: 44,
                whiteSpace: 'nowrap',
              }}
            >
              Alle akzeptieren
            </button>
          </div>
        </div>

        {showDetails && (
          <div style={{
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.75)',
          }}>
            <div>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: 4 }}>
                ✓ Notwendige Cookies
              </strong>
              Session-Verwaltung und grundlegende Funktionen. Immer aktiv.
            </div>
            <div>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: 4 }}>
                Google Tag Manager
              </strong>
              Steuerung von Tracking-Tags. Nur bei Zustimmung aktiv.
            </div>
            <div>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: 4 }}>
                Google Analytics
              </strong>
              Analyse des Nutzerverhaltens, anonymisiert. Nur bei Zustimmung.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
