import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './btn-primary.module.css'

const BtnPrimary = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button
        className={` ${styles['cta-btn']} ${projectStyles['animated-btn']} ${projectStyles['button-Text']} `}
      >
        {props.cta_text}
      </button>
    </div>
  )
}

BtnPrimary.defaultProps = {
  rootClassName: '',
  cta_text: 'Primary',
}

BtnPrimary.propTypes = {
  rootClassName: PropTypes.string,
  cta_text: PropTypes.string,
}

export default BtnPrimary
