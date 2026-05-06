import './WhatIsGit.css'

const facts = [
  {
    icon: '📸',
    title: 'Snapshot, not delta',
    body: 'Every commit is a full snapshot of your project at that moment — not just the lines that changed.',
    badge: 'commits',
    color: 'blue',
  },
  {
    icon: '🌿',
    title: 'Branching is free',
    body: 'Branches are lightweight pointers. Create one in milliseconds, experiment freely, and merge when ready.',
    badge: 'branches',
    color: 'green',
  },
  {
    icon: '🔗',
    title: 'Distributed by design',
    body: 'Every developer has a full copy of the repo. No single point of failure, offline work is native.',
    badge: 'distributed',
    color: 'purple',
  },
]

export default function WhatIsGit() {
  return (
    <section id="what-is-git" className="what-is-git">
      <div className="container">
        <p className="section-label">The basics</p>
        <h2 className="section-title">What is Git?</h2>
        <p className="section-subtitle">
          Git is a free, open-source version control system created by Linus Torvalds in 2005.
          It lets you track every change to your code, collaborate with a team, and roll back
          anything — without ever losing work.
        </p>
        <div className="grid-3">
          {facts.map(f => (
            <div key={f.title} className="card">
              <div className="card-icon">{f.icon}</div>
              <span className={`badge badge-${f.color}`}>{f.badge}</span>
              <h3 className="card-title" style={{ marginTop: '0.75rem' }}>{f.title}</h3>
              <p className="card-body">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
