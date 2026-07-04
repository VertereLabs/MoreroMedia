import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            backgroundColor: 'var(--color-bg-secondary)',
            borderTop: '1px solid var(--color-border)',
            padding: '4rem 0 2rem',
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem',
                }}>
                    {/* Brand */}
                    <div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            marginBottom: '0.35rem',
                        }}>
                            Morero Media
                        </h3>
                        <p style={{
                            fontSize: '0.7rem',
                            fontWeight: 300,
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            color: 'var(--color-text-muted)',
                            marginBottom: '1rem',
                        }}>
                            powered by{' '}
                            <span style={{
                                fontFamily: 'var(--font-signature)',
                                fontSize: '1.15rem',
                                letterSpacing: '0.01em',
                                textTransform: 'none',
                                color: 'var(--color-accent)',
                            }}>
                                Juvane Moonsami
                            </span>
                        </p>
                        <p className="text-muted" style={{ fontSize: '0.875rem', maxWidth: '280px' }}>
                            Professional photography for brands and lifestyle moments that matter.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--color-text-muted)',
                            marginBottom: '1rem',
                        }}>
                            Quick Links
                        </h4>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <Link href="/work" style={{ fontSize: '0.875rem' }}>Selected Work</Link>
                            <Link href="/lifestyle" style={{ fontSize: '0.875rem' }}>Lifestyle</Link>
                            <Link href="/about" style={{ fontSize: '0.875rem' }}>About</Link>
                            <Link href="/contact" style={{ fontSize: '0.875rem' }}>Contact</Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--color-text-muted)',
                            marginBottom: '1rem',
                        }}>
                            Get in Touch
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                            <a href="mailto:jm@moreromedia.co.za">jm@moreromedia.co.za</a>
                            <Link href="/contact" className="btn btn-outline" style={{
                                marginTop: '0.5rem',
                                padding: '0.5rem 1rem',
                                fontSize: '0.75rem',
                            }}>
                                Request Rate Card
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--color-border)',
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    color: 'var(--color-text-muted)',
                }}>
                    © {currentYear} Morero Media. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
