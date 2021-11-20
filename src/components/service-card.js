import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './service-card.module.css'

const ServiceCard = (props) => {
  return (
    <div className={styles['Card']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <span className={` ${styles['text']} ${projectStyles['h5']} `}>
        {props.card_title}
      </span>
      <span className={styles['text1']}>{props.card_text}</span>
      <div className={styles['Card-Button']}>
        <span
          className={` ${styles['text2']} ${projectStyles['button-Text']} `}
        >
          contacteaza-ma
        </span>
        <svg viewBox="0 0 877.7142857142857 1024" className={styles['icon']}>
          <path d="M734.286 512c0-9.714-3.429-18.857-10.286-25.714l-258.857-258.857c-6.857-6.857-16-10.286-25.714-10.286s-18.857 3.429-25.714 10.286l-52 52c-6.857 6.857-10.286 16-10.286 25.714s3.429 18.857 10.286 25.714l108 108h-286.857c-20 0-36.571 16.571-36.571 36.571v73.143c0 20 16.571 36.571 36.571 36.571h286.857l-108 108c-6.857 6.857-10.857 16-10.857 25.714s4 18.857 10.857 25.714l52 52c6.857 6.857 16 10.286 25.714 10.286s18.857-3.429 25.714-10.286l258.857-258.857c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
        </svg>
      </div>
    </div>
  )
}

ServiceCard.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1526403223670-2aa44aaface2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
  card_title: 'quality equipment',
  image_alt: 'image',
  card_text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel viverra lectus. Vivamus euismod eget enim vel varius. Donec congue ipsum ac hendrerit pulvinar.',
}

ServiceCard.propTypes = {
  image_src: PropTypes.string,
  card_title: PropTypes.string,
  image_alt: PropTypes.string,
  card_text: PropTypes.string,
}

export default ServiceCard
