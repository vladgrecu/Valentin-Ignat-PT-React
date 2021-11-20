import React from 'react'

import PropTypes from 'prop-types'

import CtaBtnRounded from './cta-btn-rounded'
import projectStyles from '../style.module.css'
import styles from './fade-in-left-component1.module.css'

const FadeInLeftComponent1 = (props) => {
  return (
    <div
      className={` ${styles['container']} ${projectStyles['fade-in-left']} ${
        styles[props.rootClassName]
      } `}
    >
      <div className={styles['horizontal-line']}></div>
      <div className={styles['Container1']}>
        <h1
          className={` ${styles['heading-hero']} ${projectStyles['heading-1']} `}
        >
          {props.text_content}
        </h1>
        <div className={styles['Container2']}>
          <CtaBtnRounded
            cta_text="Contacteaza-ma"
            rootClassName="rootClassName1"
          ></CtaBtnRounded>
        </div>
      </div>
    </div>
  )
}

FadeInLeftComponent1.defaultProps = {
  text_content: 'Some awesome title that would be fit as a h1 here.',
  rootClassName: '',
}

FadeInLeftComponent1.propTypes = {
  text_content: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FadeInLeftComponent1
