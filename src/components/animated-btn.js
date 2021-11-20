import React from 'react'

import PropTypes from 'prop-types'

import styles from './animated-btn.module.css'

const AnimatedBtn = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['animated-btn']}>
        <span className={styles['text']}>{props.cta_text}</span>
      </div>
    </div>
  )
}

AnimatedBtn.defaultProps = {
  cta_text: 'become a member',
}

AnimatedBtn.propTypes = {
  cta_text: PropTypes.string,
}

export default AnimatedBtn
