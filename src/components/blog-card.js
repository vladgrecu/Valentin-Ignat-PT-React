import React from 'react'

import PropTypes from 'prop-types'

import BtnSecondary from './btn-secondary'
import projectStyles from '../style.module.css'
import styles from './blog-card.module.css'

const BlogCard = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={projectStyles['blog-card-fullbg-container']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
        <div className={projectStyles['blog-card-caption']}>
          <div className={styles['container1']}>
            <div className={styles['horizontal-line']}></div>
            <span
              className={` ${styles['text']} ${projectStyles['content-Light']} `}
            >
              {props.data}
            </span>
          </div>
          <h3 className={styles['text1']}>{props.autor}</h3>
          <div
            className={` ${styles['articol-link']} ${projectStyles['blog-card-bottom-container']} `}
          >
            <BtnSecondary
              cta_text="Citeste articol"
              rootClassName="rootClassName11"
            ></BtnSecondary>
          </div>
        </div>
      </div>
    </div>
  )
}

BlogCard.defaultProps = {
  autor: 'Maria Nutrean',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  data: 'Masaj profesionist',
  image_alt: 'image',
}

BlogCard.propTypes = {
  autor: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  data: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BlogCard
