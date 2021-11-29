import React from 'react'

import PropTypes from 'prop-types'

import BtnPrimary from './btn-primary'
import projectStyles from '../style.module.css'
import styles from './testimonial-card-reverse.module.css'

const TestimonialCardReverse = (props) => {
  return (
    <div
      className={` ${styles['TestimonialCardReverse']} ${
        styles[props.rootClassName]
      } `}
    >
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
          rootClassName="rootClassName18"
        ></BtnPrimary>
      </div>
    </div>
  )
}

TestimonialCardReverse.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lob- ortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolorad Lorem ipsum dolor sit amet',
}

TestimonialCardReverse.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default TestimonialCardReverse
