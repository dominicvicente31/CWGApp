import './Workflow.css'

const steps = [
  {
    num: '01',
    title: 'Clone or Init',
    cmd: 'git clone <url>',
    desc: 'Start by cloning an existing repository or running git init to create a new one locally.',
    color: '#58a6ff',
  },
  {
    num: '02',
    title: 'Create a Branch',
    cmd: 'git checkout -b feature/my-feature',
    desc: 'Never work directly on main. Branch off to keep your work isolated and easy to review.',
    color: '#3fb950',
  },
  {
    num: '03',
    title: 'Make Changes & Stage',
    cmd: 'git add .',
    desc: 'Edit files, then add the changes you want to include in the next snapshot to the staging area.',
    color: '#bc8cff',
  },
  {
    num: '04',
    title: 'Commit',
    cmd: 'git commit -m "feat: add login form"',
    desc: 'Seal the staged changes into a permanent snapshot with a clear, descriptive message.',
    color: '#f0883e',
  },
  {
    num: '05',
    title: 'Push',
    cmd: 'git push origin feature/my-feature',
    desc: 'Upload your branch to the remote so teammates can see it and you can open a Pull Request.',
    color: '#58a6ff',
  },
  {
    num: '06',
    title: 'Merge',
    cmd: 'git merge feature/my-feature',
    desc: 'After review, integrate the branch into main. Delete the branch and repeat for the next task.',
    color: '#3fb950',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="workflow">
      <div className="container">
        <p className="section-label">The loop</p>
        <h2 className="section-title">A typical Git workflow</h2>
        <p className="section-subtitle">
          Six steps form the heartbeat of daily Git usage. Follow this loop and version control becomes second nature.
        </p>
        <div className="workflow-steps">
          {steps.map((s, i) => (
            <div key={s.num} className="workflow-step">
              <div className="step-num" style={{ color: s.color }}>{s.num}</div>
              <div className="step-content">
                <h3 className="step-title">{s.title}</h3>
                <code className="step-cmd">{s.cmd}</code>
                <p className="step-desc">{s.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
