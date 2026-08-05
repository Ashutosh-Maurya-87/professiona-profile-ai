const Projects = () => {
    return <section id="projects">
        <div className="wrap">
            <div className="section-head">
                <div className="eyebrow">Key Projects</div>
                <h2>Case studies</h2>
            </div>
            <div className="project-grid">
                <div className="project-card featured">
                    <div className="project-top">
                        <h3>BeyondQA</h3>
                        <span className="project-role">Frontend Developer</span>
                    </div>
                    <div className="project-stack"><span>React.js</span><span>TypeScript</span><span>Redux</span><span>OpenAI Streaming</span><span>RAG</span></div>
                    <div className="project-row"><span className="label">Problem</span>Manual QA review limited the scale of AI-driven quality management.</div>
                    <div className="project-row"><span className="label">Solution</span>Architected the platform zero to production; integrated OpenAI streaming and a RAG front-end.</div>
                    <div className="impact-badge">+30% adoption · −25% latency · 40% faster render</div>
                </div>
                <div className="project-card">
                    <div className="project-top">
                        <h3>Scheduly AI</h3>
                        <span className="project-role">Frontend Developer</span>
                    </div>
                    <div className="project-stack"><span>React.js</span><span>WebSocket</span></div>
                    <div className="project-row"><span className="label">Problem</span>Manual shift scheduling created heavy manager overhead.</div>
                    <div className="project-row"><span className="label">Solution</span>Designed a dynamic shift-calendar engine with real-time WebSocket notifications.</div>
                    <div className="impact-badge">−20% overhead · 8 hrs/week saved</div>
                </div>
                <div className="project-card">
                    <div className="project-top">
                        <h3>TravelWithPro</h3>
                        <span className="project-role">Freelance Architect</span>
                    </div>
                    <div className="project-stack"><span>React.js</span><span>TypeScript</span><span>Redux Toolkit</span></div>
                    <div className="project-row"><span className="label">Problem</span>A high-traffic travel SPA needed stronger performance and accessibility.</div>
                    <div className="project-row"><span className="label">Solution</span>Rebuilt with an optimized bundle strategy, CI/CD Lighthouse gates, and WCAG 2.1 audits.</div>
                    <div className="impact-badge">Lighthouse 54 → 87 · 200+ users</div>
                </div>
                <div className="project-card">
                    <div className="project-top">
                        <h3>Shipcom</h3>
                        <span className="project-role">Frontend Web Developer · U.S. Navy</span>
                    </div>
                    <div className="project-stack"><span>React.js</span><span>WebSocket</span></div>
                    <div className="project-row"><span className="label">Problem</span>Mission-critical communications had to remain reliable under signal loss.</div>
                    <div className="project-row"><span className="label">Solution</span>Built offline-resilient state management, reconnection logic, and message queuing.</div>
                    <div className="impact-badge">99.8% uptime under signal loss</div>
                </div>
                <div className="project-card">
                    <div className="project-top">
                        <h3>Faircent / Cribfox / Leadsquared</h3>
                        <span className="project-role">Frontend Web Developer</span>
                    </div>
                    <div className="project-stack"><span>Next.js SSR</span><span>API Routes</span></div>
                    <div className="project-row"><span className="label">Problem</span>Multi-step loan, e-signature, and admissions flows suffered high drop-off.</div>
                    <div className="project-row"><span className="label">Solution</span>Built progressive-disclosure UX, third-party signing integrations, and SSR-driven flows.</div>
                    <div className="impact-badge">−18% abandonment · −25% admin time</div>
                </div>
                <div className="project-card">
                    <div className="project-top">
                        <h3>GSV Systems</h3>
                        <span className="project-role">Frontend Engineer</span>
                    </div>
                    <div className="project-stack"><span>React.js</span><span>WebSocket</span></div>
                    <div className="project-row"><span className="label">Solution</span>Built a real-time network management dashboard with live infrastructure analytics.</div>
                    <div className="impact-badge">Continuous live monitoring</div>
                </div>
            </div>
        </div>
    </section>
}
export default Projects