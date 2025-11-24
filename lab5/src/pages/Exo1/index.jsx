import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Exo1.module.css'
import ToggleButton from '../../components/ToggleButton/ToggleButton'

export default function Exo1() {
  const [lastClicked, setLastClicked] = useState(null)
  const [counter, setCounter] = useState(0)

  return (
    <div className={styles.page}>
      <nav className={styles.subNav}>
        <Link to="/">Home</Link>
      </nav>

      <h1>Exercise 1</h1>

      <section className={styles.section}>
        <h2>Toggle button</h2>
        <ToggleButton />
      </section>

      <section className={styles.section}>
        <h2>Which button?</h2>
        <div className={styles.buttons}>
          <button className={styles.button1} onClick={() => setLastClicked(1)}>Button1</button>
          <button className={styles.button1} onClick={() => setLastClicked(2)}>Button2</button>
          <button className={styles.button1} onClick={() => setLastClicked(3)}>Button3</button>
        </div>
        <p className={styles.result}>
          {lastClicked ? `Button #${lastClicked} was clicked` : 'No button clicked yet'}
        </p>
      </section>

      <section className={styles.section}>
        <h2>Counter</h2>
        <h1 className={styles.counter}>{counter}</h1>
        <div className={styles.buttons}>
          <button className={styles.button2} onClick={() => setCounter(v => v + 1)}>Inc</button>
          <button className={styles.button3} onClick={() => setCounter(v => v - 1)}>Dec</button>
        </div>
      </section>
    </div>
  )
}