const About = () => {
    return <section id="about">
        <div className="wrap about-grid">
            <div>
                <div className="eyebrow">About</div>
                <p className="about-text">
                    I'm a <strong>Senior Frontend Engineer</strong> who leads frontend architecture end to end — from system design and performance budgeting to shipping features that survive production traffic. Most recently I took <strong>BeyondQA</strong>, an AI-powered quality-management platform, from zero to production, integrating OpenAI streaming APIs and a RAG front-end that drove a <strong>30% lift in user adoption</strong>.
                    <br /><br />
                    I specialize in taming scale: virtualizing 500k+ record datasets, building offline-resilient WebSocket systems for mission-critical use cases, and cutting render times without sacrificing UX. Alongside building, I mentor junior engineers and establish testing culture — reaching 78% code coverage on recent teams.
                </p>
            </div>
            <div className="stat-stack">
                <div className="stat-card accent"><span className="num">5+</span><span className="label">Years of frontend engineering experience</span></div>
                <div className="stat-card"><span className="num">40%</span><span className="label">Faster render across 500k+ record datasets</span></div>
                <div className="stat-card"><span className="num">99.8%</span><span className="label">Uptime on a U.S. Navy communication system</span></div>
                <div className="stat-card"><span className="num">54→87</span><span className="label">Lighthouse score lift on a travel SPA</span></div>
            </div>
        </div>
    </section>
}
export default About