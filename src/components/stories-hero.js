import React from 'react'

import projectStyles from '../style.module.css'
import styles from './stories-hero.module.css'

const StoriesHero = () => {
  return (
    <section className={styles['StoriesHero']}>
      <div className={styles['Photo']}></div>
      <div className={styles['WhiteBG']}>
        <span className={` ${styles['text']} ${projectStyles['heading-1']} `}>
          nu esti inca convins?
        </span>
        <span className={styles['text1']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
          viverra lectus. Vivamus euismod eget enim vel varius. Donec congue
          ipsum ac hendrerit pulvinar.
        </span>
      </div>
      <div className={styles['BlackBG']}>
        <span className={` ${styles['text2']} ${projectStyles['heading-1']} `}>
          nu esti inca convins?
        </span>
        <span className={styles['text3']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
          viverra lectus. Vivamus euismod eget enim vel varius. Donec congue
          ipsum ac hendrerit pulvinar.
        </span>
      </div>
      <div className={styles['Photo1']}></div>
      <div className={styles['HeadingContainer']}>
        <h1 className={` ${styles['text4']} ${projectStyles['heading-1']} `}>
          success
        </h1>
        <h1 className={` ${styles['text5']} ${projectStyles['heading-1']} `}>
          stories
        </h1>
      </div>
    </section>
  )
}

export default StoriesHero
