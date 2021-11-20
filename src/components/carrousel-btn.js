import React from 'react'

import styles from './carrousel-btn.module.css'

const CarrouselBtn = () => {
  return (
    <div className={styles['Video']}>
      <div className={styles['rotating-cog-clockwise']}>
        <div className={styles['inner-background']}></div>
      </div>
      <div className={styles['rotating-cog-counter-clockwise']}></div>
    </div>
  )
}

export default CarrouselBtn
