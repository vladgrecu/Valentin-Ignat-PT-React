import React from 'react'

import PropTypes from 'prop-types'

import CtaBtnRounded from './cta-btn-rounded'
import projectStyles from '../style.module.css'
import styles from './testimonial-card.module.css'

const TestimonialCard = (props) => {
  return (
    <div className={` ${styles['Carrousel']} ${styles[props.rootClassName]} `}>
      <div className={styles['Slider']}>
        <div className={styles['Slides']}>
          <img
            alt="slide-1"
            src="/playground_assets/2-1500h.jpg"
            className={styles['image']}
          />
        </div>
      </div>
      <div className={styles['Text-Container']}>
        <span
          className={` ${styles['text']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
        >
          <span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lob- ortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolorad Lorem ipsum dolor sit
            amet
          </span>
        </span>
        <CtaBtnRounded
          cta_text="Afla mai mult"
          rootClassName="rootClassName17"
        ></CtaBtnRounded>
      </div>
    </div>
  )
}

TestimonialCard.defaultProps = {
  rootClassName: '',
}

TestimonialCard.propTypes = {
  rootClassName: PropTypes.string,
}

export default TestimonialCard
