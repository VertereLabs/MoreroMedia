"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

export default function Header() {
    const { theme } = useTheme();
    const pathname = usePathname();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/work', label: 'Work' },
        { path: '/lifestyle', label: 'Lifestyle' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    const isActive = (path) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: 'var(--header-height)',
                backgroundColor: theme === 'lifestyle'
                    ? 'rgba(250, 247, 242, 0.95)'
                    : 'rgba(10, 10, 10, 0.95)',
                backdropFilter: 'blur(10px)',
                zIndex: 1000,
                borderBottom: '1px solid var(--color-border)',
            }}
        >
            <div className="container" style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                {/* Logo */}
                <Link href="/" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    lineHeight: 1,
                }}>
                    <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                    }}>
                        Morero Media
                    </span>
                    <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.6rem',
                        fontWeight: 300,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-muted)',
                        marginTop: '0.25rem',
                    }}>
                        powered by{' '}
                        <span style={{
                            fontFamily: 'var(--font-signature)',
                            fontSize: '1rem',
                            letterSpacing: '0.01em',
                            textTransform: 'none',
                            color: 'var(--color-accent)',
                        }}>
                            Juvane Moonsami
                        </span>
                    </span>
                </Link>

                {/* Navigation */}
                <nav style={{ display: 'flex', gap: '2rem' }}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            style={{
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                color: isActive(item.path) ? 'var(--color-accent)' : 'var(--color-text)',
                                position: 'relative',
                            }}
                        >
                            {item.label}
                            {isActive(item.path) && (
                                <motion.span
                                    layoutId="underline"
                                    style={{
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        backgroundColor: 'var(--color-accent)',
                                    }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>
            </div>
        </motion.header>
    );
}
