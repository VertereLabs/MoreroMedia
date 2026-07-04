"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FocusWorkCards } from '@/components/ui/focus-work-cards';

// Sample work data - will be replaced with real portfolio
const featuredWork = [
  {
    id: 'edgars-winter-2025',
    client: 'Edgars',
    title: 'Winter 2025 Collection',
    image: '', // Placeholder removed
    category: 'Fashion',
  },
  {
    id: 'woolworths-home',
    client: 'Woolworths',
    title: 'Home Collection',
    image: '', // Placeholder removed
    category: 'Lifestyle',
  },
];

const trustedClients = ['Edgars', 'Woolworths', 'Brand 3', 'Brand 4', 'Brand 5'];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg)',
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/juvane/JM_Camera.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }} />

        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.8) 100%)',
        }} />

        {/* Content */}
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 11vw, 7rem)',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              lineHeight: 0.95,
              marginBottom: '1rem',
            }}
          >
            Morero Media
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9rem',
              fontWeight: 300,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              marginBottom: '2rem',
            }}
          >
            powered by{' '}
            <span style={{
              fontFamily: 'var(--font-signature)',
              fontSize: '2rem',
              letterSpacing: '0.01em',
              textTransform: 'none',
              color: 'var(--color-accent)',
              verticalAlign: 'middle',
            }}>
              Juvane Moonsami
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-muted"
            style={{
              fontSize: '1.125rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '3rem',
            }}
          >
            Commercial, Fashion & Lifestyle Photography
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/work" className="btn btn-primary">View Work</Link>
            <Link href="/contact" className="btn btn-outline">Request Rate Card</Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: '24px',
              height: '40px',
              border: '2px solid var(--color-text-muted)',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '8px',
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                width: '4px',
                height: '8px',
                backgroundColor: 'var(--color-text-muted)',
                borderRadius: '2px',
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Trusted By */}
      <section style={{
        padding: '3rem 0',
        backgroundColor: 'var(--color-bg-secondary)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div className="container">
          <p className="text-muted" style={{
            textAlign: 'center',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Trusted By
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
          }}>
            {trustedClients.map((client, index) => (
              <motion.span
                key={client}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ opacity: 1 }}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                  cursor: 'default',
                }}
              >
                {client}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Preview */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
          }}>
            <div>
              <h2 style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                marginBottom: '0.5rem',
              }}>
                Portfolio
              </h2>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 300 }}>
                Selected Work
              </h3>
            </div>
            <Link
              href="/work"
              className="text-accent"
              style={{
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              View All →
            </Link>
          </div>

          <FocusWorkCards works={featuredWork} />
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '6rem 0',
        backgroundColor: 'var(--color-bg-secondary)',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 300,
            marginBottom: '1.5rem',
          }}>
            Let's Create Together
          </h2>
          <p className="text-muted" style={{
            fontSize: '1.125rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
          }}>
            Ready to elevate your brand with compelling visual storytelling?
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Discuss a Project</Link>
            {/* <a
              href="/downloads/juvane-portfolio-2026.pdf"
              download
              className="btn btn-outline"
            >
              Download Portfolio (PDF)
            </a> */}
          </div>
        </div>
      </section>
    </>
  );
}
