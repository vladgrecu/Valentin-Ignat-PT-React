import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './btn-secondary.module.css'

const BtnSecondary = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button
        className={` ${projectStyles['animated-btn']} ${projectStyles['button-Text']} ${projectStyles['btn-secondary']} `}
      >
        {props.cta_text}
      </button>
    </div>
  )
}

BtnSecondary.defaultProps = {
  rootClassName: '',
  cta_text: 'Secondary',
}

BtnSecondary.propTypes = {
  rootClassName: PropTypes.string,
  cta_text: PropTypes.string,
}

export default BtnSecondary
