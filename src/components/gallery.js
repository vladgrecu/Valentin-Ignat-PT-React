import React from 'react'

import PropTypes from 'prop-types'

import PlayBtn from './play-btn'
import styles from './gallery.module.css'

const Gallery = (props) => {
  return (
    <div
      className={` ${styles['Container-fluid']} ${
        styles[props.rootClassName]
      } `}
    >
      <div className={styles['left-side']}>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1583454155184-870a1f63aebc?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
          className={styles['image']}
        />
        <div className={styles['left-overlay']}>
          <PlayBtn></PlayBtn>
        </div>
      </div>
      <div className={styles['right-side']}>
        <div className={styles['tl']}>
          <div className={styles['tl-overlay']}>
            <PlayBtn></PlayBtn>
          </div>
        </div>
        <div className={styles['tr']}>
          <div className={styles['tr-overlay']}>
            <PlayBtn></PlayBtn>
          </div>
        </div>
        <div className={styles['bl']}>
          <div className={styles['bl-overlay']}>
            <PlayBtn></PlayBtn>
          </div>
        </div>
        <div className={styles['br']}>
          <div className={styles['br-overlay']}>
            <PlayBtn></PlayBtn>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery.defaultProps = {
  rootClassName: '',
}

Gallery.propTypes = {
  rootClassName: PropTypes.string,
}

export default Gallery
