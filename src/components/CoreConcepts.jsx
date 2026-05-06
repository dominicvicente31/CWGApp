import './CoreConcepts.css'

const concepts = [
  {
    term: 'Repository',
    short: 'repo',
    color: 'blue',
    desc: 'The project folder tracked by Git — contains all files plus the hidden .git directory storing full history.',
  },
  {
    term: 'Commit',
    short: 'snapshot',
    color: 'green',
    desc: 'A saved snapshot of your project at a point in time. Each commit has a unique SHA hash and an author message.',
  },
  {
    term: 'Branch',
    short: 'pointer',
    color: 'purple',
    desc: 'A named pointer to a commit. Create branches to work on features in isolation without affecting main.',
  },
  {
    term: 'Merge',
    short: 'combine',
    color: 'orange',
    desc: 'Integrates changes from one branch into another. Git auto-merges non-conflicting changes.',
  },
  {
    term: 'Remote',
    short: 'origin',
    color: 'blue',
    desc: 'A version of the repo hosted elsewhere (GitHub, GitLab). Push to share work; pull to receive others\'.',
  },
  {
    term: 'Staging Area',
    short: 'index',
    color: 'green',
    desc: 'A holding zone between your working files and the next commit. Add specific changes before committing.',
  },
]

export default function CoreConcepts() {
  return (
    <section id="concepts" className="core-concepts">
      <div className="container">
        <p className="section-label">Git prerequisites</p>
        <h2 className="section-title">Git concepts you need for CWG</h2>
        <p className="section-subtitle">
          CWG is built on top of Git. Knowing these six concepts gives you everything you need to read and write CWG programs.
        </p>
        <div className="grid-3">
          {concepts.map(c => (
            <div key={c.term} className="card concept-card">
              <div className="concept-header">
                <h3 className="card-title">{c.term}</h3>
                <span className={`badge badge-${c.color}`}>{c.short}</span>
              </div>
              <p className="card-body">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
