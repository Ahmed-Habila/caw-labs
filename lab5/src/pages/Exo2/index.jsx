import { Link } from 'react-router-dom'
import DisplayTab from '../../components/DisplayTab/DisplayTab'
import styles from './Exo2.module.css'

export default function Exo2() {
  const tableA = ['hello', 'world', 'from', 'react']
  const tableB = ['apple', 'banana', 'orange']

  return (
    <div className={styles.page}>
      <nav className={styles.subNav}>
        <Link to="/">Home</Link>
      </nav>

      <h1>Exercise 2</h1>

      <section className={styles.section}>
        <h2>DisplayTab plain list</h2>
        <DisplayTab table={tableA} numbered={false} />
        <p className={styles.small}>Click an item to remove it.</p>
      </section>

      <section className={styles.section}>
        <h2>DisplayTab numbered</h2>
        <DisplayTab table={tableB} numbered={true} />
        <p className={styles.small}>Click an item to remove it.</p>
      </section>
    </div>
  )
}