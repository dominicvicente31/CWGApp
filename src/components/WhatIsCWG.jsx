import './WhatIsCWG.css'

const pillars = [
  {
    icon: '📝',
    title: 'Commits are Statements',
    body: 'Every commit message on main is a line of Python. The interpreter executes them in order.',
    badge: 'exec(msg)',
    color: 'blue',
  },
  {
    icon: '🌿',
    title: 'Branches are Control Flow',
    body: 'Name a branch if/, else/, or loop/ and its commits become an if-block, else-block, or while-loop.',
    badge: 'if/ loop/ else/',
    color: 'purple',
  },
  {
    icon: '🔀',
    title: 'Merges Close Blocks',
    body: 'Merging a control-flow branch back to main ends the block. The merge message can return variables.',
    badge: 'return x, y',
    color: 'green',
  },
  {
    icon: '🍒',
    title: 'Cherry-picks Call Functions',
    body: 'Define a function in an fn/ branch, tag it fn/<name>…end-fn/<name>. Cherry-pick the tag commit to call it.',
    badge: 'fn/ cherry-pick',
    color: 'orange',
  },
  {
    icon: '↩️',
    title: 'Reverts Handle Errors',
    body: 'git revert undoes a statement. Add handler lines before "This reverts…" for try/except-style error handling.',
    badge: 'try / except',
    color: 'blue',
  },
  {
    icon: '📦',
    title: 'Stash is the Stack',
    body: 'git stash push and pop act as a memory stack — store intermediate state across blocks.',
    badge: 'stash push/pop',
    color: 'purple',
  },
]

export default function WhatIsCWG() {
  return (
    <section id="what-is-git" className="what-is-cwg">
      <div className="container">
        <p className="section-label">The language</p>
        <h2 className="section-title">How CWG works</h2>
        <p className="section-subtitle">
          CWG maps every git operation to a programming construct. Your repository structure
          determines the logic; the interpreter reads the history and runs it.
        </p>
        <div className="grid-3">
          {pillars.map(p => (
            <div key={p.title} className="card">
              <div className="card-icon">{p.icon}</div>
              <span className={`badge badge-${p.color}`}>{p.badge}</span>
              <h3 className="card-title" style={{ marginTop: '0.75rem' }}>{p.title}</h3>
              <p className="card-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
