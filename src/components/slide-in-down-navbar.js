import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import AnimatedBtn from './animated-btn'
import projectStyles from '../style.module.css'
import styles from './slide-in-down-navbar.module.css'

const SlideInDownNavbar = (props) => {
  return (
    <header className={styles['slideInDown-navbar']}>
      <nav className={styles['Navbar']}>
        <div className={styles['Logo']}>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className={styles['image']}
          />
          <div className={styles['container']}>
            <span className={styles['text']}>{props.text4}</span>
            <span className={styles['text1']}>{props.text5}</span>
          </div>
        </div>
        <div className={styles['Links']}>
          <div className={styles['Container1']}>
            <span
              className={` ${styles['text2']} ${projectStyles['navbar-Link']} `}
            >
              Home
            </span>
          </div>
          <div className={styles['container2']}>
            <span
              className={` ${styles['text3']} ${projectStyles['navbar-Link']} `}
            >
              {props.text}
            </span>
          </div>
          <div className={styles['container3']}>
            <span
              className={` ${styles['text4']} ${projectStyles['navbar-Link']} `}
            >
              services
            </span>
          </div>
          <Link to="/my-mission" className={styles['navlink']}>
            <div className={styles['container4']}>
              <span
                className={` ${styles['text5']} ${projectStyles['navbar-Link']} `}
              >
                {props.text1}
              </span>
            </div>
          </Link>
          <div className={styles['container5']}>
            <span
              className={` ${styles['Text6']} ${projectStyles['navbar-Link']} `}
            >
              {props.text2}
            </span>
          </div>
          <Link to="/hiit" className={styles['navlink1']}>
            <div className={styles['container6']}>
              <span
                className={` ${styles['text7']} ${projectStyles['navbar-Link']} `}
              >
                {props.text3}
              </span>
            </div>
          </Link>
          <div className={styles['container7']}>
            <AnimatedBtn></AnimatedBtn>
          </div>
        </div>
        <div className={styles['menu']}>
          <svg viewBox="0 0 1024 1024" className={styles['menu-icon']}>
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div>
      </nav>
    </header>
  )
}

SlideInDownNavbar.defaultProps = {
  text4: 'coach',
  image_src: '/playground_assets/logo%20final.svg',
  text3: 'hiit',
  text2: 'Results',
  text1: 'my mission',
  image_alt: 'image',
  text: 'About',
  text5: 'vali Ignat',
}

SlideInDownNavbar.propTypes = {
  text4: PropTypes.string,
  image_src: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
}

export default SlideInDownNavbar
