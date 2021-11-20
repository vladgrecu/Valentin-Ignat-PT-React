import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './cta-btn-rounded.module.css'

const CtaBtnRounded = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={projectStyles['animated-btn']}>
        <span className={` ${projectStyles['button-Text']} ${styles['text']} `}>
          {props.cta_text}
        </span>
      </div>
    </div>
  )
}

CtaBtnRounded.defaultProps = {
  rootClassName: '',
  cta_text: 'become a member',
}

CtaBtnRounded.propTypes = {
  rootClassName: PropTypes.string,
  cta_text: PropTypes.string,
}

export default CtaBtnRounded
