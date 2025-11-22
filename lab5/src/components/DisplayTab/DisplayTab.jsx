import React, { useState } from 'react'
import styles from './DisplayTab.module.css'

export default function DisplayTab({ items, table, numbered = false }) {
  const initial = Array.isArray(items) ? items.slice() : (Array.isArray(table) ? table.slice() : [])
  const [tab, setTab] = useState(initial)

  const removeItem = (index) => {
    const newTab = [...tab]
    newTab.splice(index, 1)
    setTab(newTab)
  }

  return (
    <ul className={styles.list} role="list">
      {tab.map((m, i) => (
        <li
          key={i}
          className={styles.item}
          role="button"
          tabIndex={0}
          onClick={() => removeItem(i)}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') removeItem(i) }}
        >
          {numbered ? `Element ${i + 1} is: ${m}` : m}
        </li>
      ))}
    </ul>
  )
}