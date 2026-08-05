const Achievements = () => {
    return <section id="achievements">
        <div className="wrap">
            <div className="section-head">
                <div className="eyebrow">Selected Achievements</div>
                <h2>By the numbers</h2>
            </div>
            <div className="achieve-list">
                <div className="achieve-row"><div className="achieve-dot"></div><p>Scaled virtualized rendering to <b>500k+ record datasets</b>, cutting render time by 40%</p></div>
                <div className="achieve-row"><div className="achieve-dot"></div><p>Drove a <b>30% user-adoption lift</b> via OpenAI streaming integration in a production analytics dashboard</p></div>
                <div className="achieve-row"><div className="achieve-dot"></div><p>Lifted Lighthouse performance score from <b>54 to 87</b> on a high-traffic travel SPA</p></div>
                <div className="achieve-row"><div className="achieve-dot"></div><p>Achieved <b>99.8% uptime</b> on a mission-critical WebSocket system for the U.S. Navy</p></div>
                <div className="achieve-row"><div className="achieve-dot"></div><p>Reduced scheduling overhead by <b>20% (8 hrs/week saved per team)</b> through WebSocket automation</p></div>
                <div className="achieve-row"><div className="achieve-dot"></div><p>Established testing practices reaching <b>78% code coverage</b>; mentored 2 junior engineers</p></div>
            </div>
        </div>
    </section>
}
export default Achievements