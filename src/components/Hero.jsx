import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <div className="hero-tag mono">$ cwg run ./my-repo</div>
          <h1 className="hero-title">
            <span className="hero-lang">CWG</span>
          </h1>
          <p className="hero-one-liner">
            A programming language where your git history <em>is</em> the code.
          </p>
          <p className="hero-subtitle">
            Write programs using commits, branches, and merges. CWG reads your
            repository and executes it — statements live in commit messages,
            control flow lives in branch structure.
          </p>
          <div className="hero-ctas">
            <a href="#what-is-git" className="btn btn-primary">Learn Git First</a>
            <a href="#examples" className="btn btn-ghost">See Examples</a>
          </div>
        </div>
        <div className="hero-terminal">
          <div className="terminal-bar">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="terminal-title">cwg program — terminal</span>
          </div>
          <div className="terminal-body">
            <p className="t-comment"># Commits on main = statements</p>
            <p><span className="t-msg">git commit -m "x = 10"</span></p>
            <p><span className="t-msg">git commit -m "y = 20"</span></p>
            <p className="t-spacer" />
            <p className="t-comment"># Branch if/ = conditional block</p>
            <p><span className="t-msg">git checkout -b <span className="t-branch">if/check-x</span></span></p>
            <p><span className="t-msg">git commit -m "if x &gt; 5:"</span></p>
            <p><span className="t-msg">git commit -m "result = 'big'"</span></p>
            <p><span className="t-msg">git merge if/check-x -m "return result"</span></p>
            <p className="t-spacer" />
            <p className="t-comment"># Cherry-pick = function call</p>
            <p><span className="t-msg">git cherry-pick <span className="t-tag">fn/greet</span></span></p>
            <p><span className="t-prompt">~</span> <span className="t-cursor">▌</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}
