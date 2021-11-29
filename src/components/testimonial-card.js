import React from 'react'

import PropTypes from 'prop-types'

import BtnPrimary from './btn-primary'
import projectStyles from '../style.module.css'
import styles from './testimonial-card.module.css'

const TestimonialCard = (props) => {
  return (
    <div className={` ${styles['Carrousel']} ${styles[props.rootClassName]} `}>
      <div className={styles['Slider']}>
        <div className={styles['Slides']}>
          <img
            alt="slide-1"
            src={props.image_src}
            className={styles['image']}
          />
        </div>
      </div>
      <div className={styles['Text-Container']}>
        <span
          className={` ${styles['text']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
        >
          {props.text}
        </span>
        <BtnPrimary
          cta_text="Afla mai mult"
          rootClassName="rootClassName17"
        ></BtnPrimary>
      </div>
    </div>
  )
}

TestimonialCard.defaultProps = {
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lob- ortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolorad Lorem ipsum dolor sit amet',
}

TestimonialCard.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
}

export default TestimonialCard
