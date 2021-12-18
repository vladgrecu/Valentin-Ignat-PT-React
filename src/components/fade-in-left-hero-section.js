import React from 'react'

import PropTypes from 'prop-types'

import BtnPrimary from './btn-primary'
import projectStyles from '../style.module.css'
import styles from './fade-in-left-hero-section.module.css'

const FadeInLeftHeroSection = (props) => {
  return (
    <div
      className={` ${styles['container']} ${
        projectStyles['animation-fade-in-left']
      } ${styles[props.rootClassName]} `}
    >
      <div className={styles['horizontal-line']}></div>
      <div className={styles['Container1']}>
        <div className={styles['Container2']}>
          <span className={` ${styles['text']} ${projectStyles['heading-1']} `}>
            {props.text_content}
          </span>
          <div
            data-action="showContactFormModal"
            className={styles['ContactBtn']}
          >
            <BtnPrimary
              cta_text="Contacteaza-ma"
              rootClassName="rootClassName1"
            ></BtnPrimary>
          </div>
        </div>
      </div>
    </div>
  )
}

FadeInLeftHeroSection.defaultProps = {
  text_content: 'Some awesome title that would be fit as a h1 here.',
  rootClassName: '',
}

FadeInLeftHeroSection.propTypes = {
  text_content: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FadeInLeftHeroSection
