import React from 'react'

import PropTypes from 'prop-types'

import AnimatedBtn from './animated-btn'
import projectStyles from '../style.module.css'
import styles from './fade-in-left-component.module.css'

const FadeInLeftComponent = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['fadeInLeft']}>
        <div className={styles['container1']}>
          <div className={styles['horizontal-line']}></div>
          <span className={` ${styles['text']} ${projectStyles['before-H2']} `}>
            with vali ignat
          </span>
        </div>
        <h1 className={` ${styles['heading-hero']} ${projectStyles['h1']} `}>
          {props.text_content}
        </h1>
        <div className={styles['Container2']}>
          <AnimatedBtn cta_text="Become a member"></AnimatedBtn>
        </div>
      </div>
    </div>
  )
}

FadeInLeftComponent.defaultProps = {
  text_content: 'Some awesome title that would be fit as a h1 here.',
  rootClassName: '',
}

FadeInLeftComponent.propTypes = {
  text_content: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FadeInLeftComponent
