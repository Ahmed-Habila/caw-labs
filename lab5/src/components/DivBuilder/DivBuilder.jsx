import React, { useState } from 'react'
import styles from './DivBuilder.module.css'

export default function DivBuilder() {
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)
  const [color, setColor] = useState('#7ba7af')
  const [box, setBox] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const newBox = {
      width: Number(width),
      height: Number(height),
      color: color
    }
    setBox(newBox)
  }

  return (
    <div className={styles.builder}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Width (px)
          <input
            type="number"
            min="0"
            value={width}
            onChange={e => setWidth(e.target.value)}
            className={styles.input}
          />
        </label>

        <label>
          Height (px)
          <input
            type="number"
            min="0"
            value={height}
            onChange={e => setHeight(e.target.value)}
            className={styles.input}
          />
        </label>

        <label>
          Background
          <input
            type="color"
            value={color}
            onChange={e => setColor(e.target.value)}
            className={styles.inputColor}
            aria-label="background color"
          />
        </label>

        <button type="submit" className={styles.submit}>Submit</button>
      </form>

      <div className={styles.preview}>
        {box && (
          <div
            className={styles.box}
            style={{ width: `${box.width}px`, height: `${box.height}px`, backgroundColor: box.color }}
          />
        )}
      </div>
    </div>
  )
}