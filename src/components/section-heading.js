import React from 'react'

import PropTypes from 'prop-types'

import BtnPrimary from './btn-primary'
import projectStyles from '../style.module.css'
import styles from './section-heading.module.css'

const SectionHeading = (props) => {
  return (
    <div
      className={` ${projectStyles['section-heading-container']} ${
        styles[props.rootClassName]
      } `}
    >
      <div className={styles['TitleContainer']}>
        <div className={styles['Container']}>
          <div className={styles['horizontal-line']}></div>
          <span className={styles['text']}>{props.description}</span>
        </div>
        <h1 className={projectStyles['heading-1']}>{props.title}</h1>
      </div>
      <a href={props.link_component}>
        <BtnPrimary
          cta_text="Afla mai mult"
          rootClassName="rootClassName5"
          className={styles['component']}
        ></BtnPrimary>
      </a>
    </div>
  )
}

SectionHeading.defaultProps = {
  link_component: '',
  description: 'feedback',
  rootClassName: '',
  title: 'Povesti de succes',
}

SectionHeading.propTypes = {
  link_component: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default SectionHeading
