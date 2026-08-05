const Hero = () => {
    return <>
        <header className="hero">
            <div className="wrap hero-grid">
                <div>
                    <div className="eyebrow">Senior Frontend Engineer · Available for hire</div>
                    <h1>Ashutosh<br />Maurya<span className="accent">.</span></h1>
                    <p className="hero-role">React · Next.js · TypeScript · AI Applications</p>
                    <p className="hero-summary">5+ years architecting production SaaS platforms, real-time communication systems, and AI-driven applications at scale — from zero-to-production AI quality-management tools to mission-critical WebSocket systems built for 99.8% uptime.</p>
                    <div className="hero-actions">
                        <a className="btn-filled" href="mailto:ashumaurya486@gmail.com">Get in touch</a>
                        <a className="btn-ghost" href="https://github.com/Ashutosh-Maurya-87" target="_blank" rel="noopener">View GitHub</a>
                    </div>
                    <div className="hero-meta">
                        <div className="hero-meta-item">Based in <span>Ayodhya, U.P., India</span></div>
                        <div className="hero-meta-item">Open to <span>Remote · Hybrid · Relocation</span></div>
                        <div className="hero-meta-item"><span>+91-6387527257</span></div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="orbit-ring r3"></div>
                    <div className="orbit-ring r1"><div className="orbit-dot"></div></div>
                    <div className="orbit-ring r2"></div>
                    <div className="hero-core">
                        <span className="big">500k+</span>
                        records virtualized<br />40% faster render
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Hero