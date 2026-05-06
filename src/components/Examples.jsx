import { useState } from 'react'
import './Examples.css'

const examples = [
  {
    title: 'Hello World',
    desc: 'A single commit on main is a statement — the message is the code.',
    steps: [
      { type: 'commit', msg: 'print("Hello, World!")' },
    ],
    output: 'Hello, World!',
  },
  {
    title: 'If / Else',
    desc: 'Create an if/ branch. The first commit is the condition; commits after it are the body. Merge back to run the block.',
    steps: [
      { type: 'commit', msg: 'score = 85' },
      { type: 'branch', branch: 'if/grade' },
      { type: 'commit', msg: 'if score >= 90:' },
      { type: 'commit', msg: 'grade = "A"' },
      { type: 'branch', branch: 'else/grade' },
      { type: 'commit', msg: 'grade = "B"' },
      { type: 'merge',  branch: 'if/grade', msg: 'return grade' },
    ],
    output: 'grade = "B"',
  },
  {
    title: 'While Loop',
    desc: 'Create a loop/ branch. First commit is the condition; remaining commits form the body. Merge back to close.',
    steps: [
      { type: 'commit', msg: 'n = 1' },
      { type: 'branch', branch: 'loop/count' },
      { type: 'commit', msg: 'while n <= 5:' },
      { type: 'commit', msg: 'print(n)' },
      { type: 'commit', msg: 'n += 1' },
      { type: 'merge',  branch: 'loop/count', msg: 'return n' },
    ],
    output: '1\n2\n3\n4\n5',
  },
  {
    title: 'Function Definition & Call',
    desc: 'Define a function in an fn/ branch (tagged fn/<name> … end-fn/<name>). Call it by cherry-picking the tag commit.',
    steps: [
      { type: 'tag',    branch: 'fn/greet' },
      { type: 'commit', msg: 'name = "CWG"' },
      { type: 'commit', msg: 'print(f"Hello, {name}!")' },
      { type: 'tag',    branch: 'end-fn/greet' },
      { type: 'cherry', branch: 'fn/greet' },
    ],
    output: 'Hello, CWG!',
  },
  {
    title: 'Revert / Exception',
    desc: 'git revert undoes a commit (like undo). Add handler lines before "This reverts..." to catch errors — like try/except.',
    steps: [
      { type: 'commit', msg: 'x = int("oops")  # raises ValueError' },
      { type: 'revert', msg: 'print("caught error")' },
    ],
    output: 'caught error',
  },
]

function typeClass(type) {
  return {
    commit: 'step-commit',
    branch: 'step-branch',
    merge:  'step-merge',
    tag:    'step-tag',
    cherry: 'step-cherry',
    revert: 'step-revert',
  }[type] || 'step-commit'
}

function toCmd(s) {
  switch (s.type) {
    case 'commit': return `git commit -m "${s.msg}"`
    case 'branch': return `git checkout -b ${s.branch}`
    case 'merge':  return s.msg ? `git merge ${s.branch} -m "${s.msg}"` : `git merge ${s.branch}`
    case 'tag':    return `git tag -a ${s.branch}`
    case 'cherry': return `git cherry-pick ${s.branch}`
    case 'revert': return `git revert HEAD --edit`
    default:       return s.msg
  }
}

export default function Examples() {
  const [active, setActive] = useState(0)
  const ex = examples[active]

  return (
    <section id="examples" className="examples">
      <div className="container">
        <p className="section-label">CWG in action</p>
        <h2 className="section-title">Example Programs</h2>
        <p className="section-subtitle">
          Each example is a real CWG program. The "code" is the git history.
        </p>

        <div className="ex-tabs">
          {examples.map((e, i) => (
            <button
              key={i}
              className={`ex-tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {e.title}
            </button>
          ))}
        </div>

        <div className="ex-panel">
          <div className="ex-desc">{ex.desc}</div>
          <div className="ex-body">
            <div className="ex-history">
              <div className="ex-history-label mono">terminal — {ex.title}</div>
              <div className="ex-steps">
                {ex.steps.map((s, i) => (
                  <div key={i} className={`ex-step ${typeClass(s.type)}`}>
                    <span className="step-cmd">{toCmd(s)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ex-output">
              <div className="ex-history-label mono">output</div>
              <pre className="ex-out-block">{ex.output}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
