import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './testimonial-card.module.css'

const TestimonialCard = (props) => {
  return (
    <div
      className={` ${styles['TestimonialCardReverse']} ${
        styles[props.rootClassName]
      } `}
    >
      <div className={styles['Text-Container']}>
        <span
          className={` ${styles['text']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
        >
          {props.text}
        </span>
      </div>
      <div className={styles['Image']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image1']}
        />
      </div>
    </div>
  )
}

TestimonialCard.defaultProps = {
  rootClassName: '',
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lob- ortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolorad Lorem ipsum dolor sit amet',
  image_alt: 'slide-1',
  image_src: '/playground_assets/1-600w.jpg',
}

TestimonialCard.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default TestimonialCard
