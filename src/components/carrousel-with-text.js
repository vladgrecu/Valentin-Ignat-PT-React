import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './carrousel-with-text.module.css'

const CarrouselWithText = (props) => {
  return (
    <div
      data-role="carrousel"
      className={` ${styles['Carrousel']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['Slider']}>
        <div className={projectStyles['slides-container']}>
          <img
            alt="slide-1"
            src={props.slide_one_src}
            data-slide-index="0"
            className={` ${projectStyles['carrousel-slide']} ${projectStyles['slide-active']} ${projectStyles['animation-fade-in']} `}
          />
          <img
            alt="slide-1"
            src={props.slide_two_src}
            data-slide-index="1"
            className={` ${styles['Image1']} ${projectStyles['carrousel-slide']} ${projectStyles['animation-fade-in']} `}
          />
          <img
            alt="slide-1"
            src={props.slide_three_src}
            data-slide-index="2"
            className={` ${styles['Image2']} ${projectStyles['carrousel-slide']} ${projectStyles['animation-fade-in']} `}
          />
        </div>
        <div className={projectStyles['carrousel-controls-container']}>
          <div
            data-slide-index="0"
            className={projectStyles['carrousel-control-btn']}
          >
            <div
              className={` ${styles['BulletContent']} ${projectStyles['tl-bullet-active']} ${projectStyles['tl-bullet']} `}
            >
              <div
                className={` ${projectStyles['tl-inner-active']} ${projectStyles['inner-white']} `}
              ></div>
            </div>
            <div className={projectStyles['tl-bullet-inner']}></div>
          </div>
          <div
            className={` ${styles['Line']} ${projectStyles['tl-line']} `}
          ></div>
          <div
            data-slide-index="1"
            className={projectStyles['carrousel-control-btn']}
          >
            <div
              className={` ${styles['BulletContent1']} ${projectStyles['tl-bullet']} `}
            >
              <div className={projectStyles['inner-white']}></div>
            </div>
            <div className={projectStyles['tl-bullet-inner']}></div>
          </div>
          <div
            className={` ${styles['Line1']} ${projectStyles['tl-line']} `}
          ></div>
          <div
            data-slide-index="2"
            className={projectStyles['carrousel-control-btn']}
          >
            <div
              className={` ${styles['BulletContent2']} ${projectStyles['tl-bullet']} `}
            >
              <div className={projectStyles['inner-white']}></div>
            </div>
            <div className={projectStyles['tl-bullet-inner']}></div>
          </div>
        </div>
      </div>
      <div className={styles['Text-Container']}>
        <span
          className={` ${styles['text']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
        >
          {props.text}
        </span>
      </div>
    </div>
  )
}

CarrouselWithText.defaultProps = {
  text: 'Praesent nec lobortis dolor. Vestibulum scelerisque purus nisi, eu sollicitudin tellus fringilla at. In eget enim et lectus sollicitudin mattis. In vestibulum massa sit amet egestas facilisis. Integer porta augue sit amet diam dignissim suscipit. Ut sit amet pellentesque sapien. Praesent a molestie elit.',
  slide_two_src: '/playground_assets/2-1500h.jpg',
  slide_one_src: '/playground_assets/0-1500h.jpg',
  slide_three_src: '/playground_assets/1-1500h.jpg',
  rootClassName: '',
}

CarrouselWithText.propTypes = {
  text: PropTypes.string,
  slide_two_src: PropTypes.string,
  slide_one_src: PropTypes.string,
  slide_three_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CarrouselWithText
