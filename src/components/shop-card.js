import React from 'react'

import PropTypes from 'prop-types'

import BtnPrimary from './btn-primary'
import projectStyles from '../style.module.css'
import styles from './shop-card.module.css'

const ShopCard = (props) => {
  return (
    <div className={` ${styles['Card']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <span className={` ${styles['text']} ${projectStyles['h5']} `}>
        {props.card_title}
      </span>
      <BtnPrimary rootClassName="rootClassName7"></BtnPrimary>
    </div>
  )
}

ShopCard.defaultProps = {
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1526403223670-2aa44aaface2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
  card_title: 'quality equipment',
  image_alt: 'image',
}

ShopCard.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  card_title: PropTypes.string,
  image_alt: PropTypes.string,
}

export default ShopCard
