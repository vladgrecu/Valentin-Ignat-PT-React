import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './about-gallery.module.css'

const AboutGallery = (props) => {
  return (
    <div
      className={` ${styles['Container-fluid']} ${
        styles[props.rootClassName]
      } `}
    >
      <div className={styles['left-side']}>
        <img
          alt="image"
          src="/playground_assets/img_9937-1500w.jpg"
          className={styles['image']}
        />
        <div className={styles['left-overlay']}>
          <span className={` ${styles['text']} ${projectStyles['h2']} `}>
            disciplinat
          </span>
        </div>
      </div>
      <div className={styles['right-side']}>
        <div className={styles['tl']}>
          <div className={styles['tl-overlay']}>
            <span className={` ${styles['text1']} ${projectStyles['h2']} `}>
              energic
            </span>
          </div>
        </div>
        <div className={styles['tr']}>
          <div className={styles['tr-overlay']}>
            <span className={` ${styles['text2']} ${projectStyles['h2']} `}>
              determinat
            </span>
          </div>
        </div>
        <div className={styles['bl']}>
          <div className={styles['bl-overlay']}>
            <span className={` ${styles['text3']} ${projectStyles['h2']} `}>
              fericit
            </span>
          </div>
        </div>
        <div className={styles['br']}>
          <div className={styles['br-overlay']}>
            <span className={` ${styles['text4']} ${projectStyles['h2']} `}>
              puternic
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

AboutGallery.defaultProps = {
  rootClassName: '',
}

AboutGallery.propTypes = {
  rootClassName: PropTypes.string,
}

export default AboutGallery
