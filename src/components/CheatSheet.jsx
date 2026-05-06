import './CheatSheet.css'

const groups = [
  {
    title: 'Setup',
    color: 'blue',
    cmds: [
      { cmd: 'git init',                  desc: 'Initialize a new repo' },
      { cmd: 'git clone <url>',           desc: 'Clone a remote repo' },
      { cmd: 'git config --global user.name "You"', desc: 'Set your name' },
    ],
  },
  {
    title: 'Staging & Committing',
    color: 'green',
    cmds: [
      { cmd: 'git status',                desc: 'Show working tree status' },
      { cmd: 'git add <file>',            desc: 'Stage a file' },
      { cmd: 'git add .',                 desc: 'Stage all changes' },
      { cmd: 'git commit -m "msg"',       desc: 'Commit staged changes' },
    ],
  },
  {
    title: 'Branching',
    color: 'purple',
    cmds: [
      { cmd: 'git branch',                desc: 'List branches' },
      { cmd: 'git checkout -b <name>',    desc: 'Create & switch to branch' },
      { cmd: 'git switch <name>',         desc: 'Switch to a branch' },
      { cmd: 'git merge <branch>',        desc: 'Merge branch into current' },
    ],
  },
  {
    title: 'Remote',
    color: 'orange',
    cmds: [
      { cmd: 'git remote -v',             desc: 'List remotes' },
      { cmd: 'git push origin <branch>',  desc: 'Push to remote' },
      { cmd: 'git pull',                  desc: 'Fetch & merge from remote' },
      { cmd: 'git fetch',                 desc: 'Download remote changes' },
    ],
  },
  {
    title: 'History',
    color: 'blue',
    cmds: [
      { cmd: 'git log --oneline',         desc: 'Compact commit history' },
      { cmd: 'git diff',                  desc: 'Show unstaged changes' },
      { cmd: 'git show <hash>',           desc: 'Show a specific commit' },
    ],
  },
  {
    title: 'Undo',
    color: 'green',
    cmds: [
      { cmd: 'git restore <file>',        desc: 'Discard working dir changes' },
      { cmd: 'git reset HEAD <file>',     desc: 'Unstage a file' },
      { cmd: 'git revert <hash>',         desc: 'Undo a commit safely' },
    ],
  },
]

export default function CheatSheet() {
  return (
    <section id="cheatsheet" className="cheatsheet">
      <div className="container">
        <p className="section-label">Quick reference</p>
        <h2 className="section-title">Git Cheat Sheet</h2>
        <p className="section-subtitle">
          The commands you will reach for every single day.
        </p>
        <div className="cheat-grid">
          {groups.map(g => (
            <div key={g.title} className="cheat-group">
              <div className="cheat-group-header">
                <span className={`badge badge-${g.color}`}>{g.title}</span>
              </div>
              <ul className="cheat-list">
                {g.cmds.map(c => (
                  <li key={c.cmd} className="cheat-row">
                    <code className="cheat-cmd">{c.cmd}</code>
                    <span className="cheat-desc">{c.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
