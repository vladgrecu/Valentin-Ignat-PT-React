import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './play-btn.module.css'

const PlayBtn = (props) => {
  return (
    <div
      data-action="playVideo"
      className={` ${styles['Video']} ${styles[props.rootClassName]} `}
    >
      <div
        className={` ${projectStyles['animation-rotate-counter-clockwise']} ${projectStyles['cog-counter-clockwise']} `}
      ></div>
      <div
        className={` ${projectStyles['animation-rotate-clockwise']} ${projectStyles['cog-clockwise']} `}
      ></div>
      <div className={styles['inner-background']}>
        <svg viewBox="0 0 808.5942857142857 1024" className={styles['icon']}>
          <path d="M790.857 529.714l-758.857 421.714c-17.714 9.714-32 1.143-32-18.857v-841.143c0-20 14.286-28.571 32-18.857l758.857 421.714c17.714 9.714 17.714 25.714 0 35.429z"></path>
        </svg>
      </div>
    </div>
  )
}

PlayBtn.defaultProps = {
  rootClassName: '',
}

PlayBtn.propTypes = {
  rootClassName: PropTypes.string,
}

export default PlayBtn
