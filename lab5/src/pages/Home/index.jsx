import './styles.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="section">
      <h1>Home</h1>
      <p>Choose an exercise:</p>
      <ul>
        <li><Link to="/exo1">Exo1</Link></li>
        <li><Link to="/exo2">Exo2</Link></li>
        <li><Link to="/exo3">Exo3</Link></li>
        <li><Link to="/exo4">Exo4</Link></li>
      </ul>
    </div>
  )
}