const Experience = () => {
    return <section id="experience">
        <div className="wrap">
            <div className="section-head">
                <div className="eyebrow">Experience</div>
                <h2>Where I've built</h2>
            </div>
            <div className="timeline">
                <div className="tl-item">
                    <div className="tl-date">Nov 2022 — Present</div>
                    <div className="tl-line"><div className="tl-dot"></div></div>
                    <div className="tl-content">
                        <h3>Senior Frontend Developer</h3>
                        <div className="tl-org">Contact Point 360 · Remote (Global, Tech-Enabled BPO & AI)</div>
                        <ul>
                            <li>Architected BeyondQA, an AI-powered quality-management SaaS platform, from zero to production using React.js, TypeScript, and Redux — reduced data-retrieval latency by 25% through memoization and API optimization.</li>
                            <li>Led integration of OpenAI streaming APIs into a real-time call-analytics dashboard, driving a 30% lift in user adoption within 60 days; shipped a RAG front-end for AI-assisted quality insights.</li>
                            <li>Engineered virtualized list rendering (react-window) across 500k+ record datasets, eliminating browser freezes and cutting analytics render time by 40%.</li>
                            <li>Designed and shipped Scheduly AI, a dynamic shift-calendar engine with WebSocket-based real-time notifications, cutting scheduling overhead by 20% (8 hrs/week saved per team).</li>
                            <li>Established a testing culture with React Testing Library, reaching 78% code coverage; mentored 2 junior developers, cutting their PR review cycles by 30%.</li>
                        </ul>
                    </div>
                </div>
                <div className="tl-item">
                    <div className="tl-date">Jun 2021 — May 2023</div>
                    <div className="tl-line"><div className="tl-dot"></div></div>
                    <div className="tl-content">
                        <h3>Frontend Developer (Freelance)</h3>
                        <div className="tl-org">Mochilero Travel Ventures Pvt. Ltd. · Remote</div>
                        <ul>
                            <li>Independently architected TravelWithPro, a high-traffic travel SPA serving 200+ active users — lifted Lighthouse score from 54 to 87 by shrinking bundle size.</li>
                            <li>Built an interactive itinerary builder with Google Maps API integration and dynamic route optimization.</li>
                            <li>Owned the full CI/CD pipeline on Vercel, establishing automated Lighthouse quality gates and WCAG 2.1 accessibility audits.</li>
                        </ul>
                    </div>
                </div>
                <div className="tl-item">
                    <div className="tl-date">Jan 2022 — Sep 2022</div>
                    <div className="tl-line"><div className="tl-dot"></div></div>
                    <div className="tl-content">
                        <h3>Frontend Developer (React.js / Next.js)</h3>
                        <div className="tl-org">Ddeveloper · Ludhiana, Punjab</div>
                        <ul>
                            <li>Engineered Shipcom, a mission-critical WebSocket-based communication UI for the U.S. Navy — achieved 99.8% uptime across simulated signal-loss scenarios via reconnection logic and message queuing.</li>
                            <li>Shipped a multi-step loan application for Faircent using Next.js SSR and progressive-disclosure UX, reducing form abandonment by 18%.</li>
                            <li>Delivered a secure e-signature workflow (Cribfox) and a student admissions portal (Leadsquared), cutting admin processing time by 25%.</li>
                        </ul>
                    </div>
                </div>
                <div className="tl-item">
                    <div className="tl-date">Nov 2021 — Jan 2022</div>
                    <div className="tl-line"><div className="tl-dot"></div></div>
                    <div className="tl-content">
                        <h3>Junior Web Developer</h3>
                        <div className="tl-org">Poly 9 · Ahmedabad, Gujarat</div>
                        <ul>
                            <li>Architected and shipped full-stack features (React.js, GraphQL, Context API, MongoDB), including a real-time data feed that reduced average page load by 40%.</li>
                            <li>Built subscription management and analytics dashboards.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Experience