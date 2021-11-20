import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './mobile-menu.module.css'

const MobileMenu = (props) => {
  return (
    <div
      className={` ${styles['Mobile-Menu']} ${projectStyles['mobile-menu']} ${
        styles[props.rootClassName]
      } `}
    >
      <div className={styles['Top-Bar']}>
        <div className={styles['container']}>
          <img
            alt="image"
            src="/playground_assets/logo%20secundar-05.svg"
            className={styles['image']}
          />
        </div>
        <div className={styles['close-menu']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
            <path d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"></path>
          </svg>
        </div>
      </div>
      <div className={styles['Middle']}>
        <div className={styles['Mobile-Links']}>
          <Link to="/" className={styles['navlink']}>
            <div className={styles['Container1']}>
              <span
                data-url="/"
                className={` ${styles['Text']} ${projectStyles['before-H2']} ${projectStyles['mobile-link-title']} ${projectStyles['button-Text']} `}
              >
                <span>acasa</span>
              </span>
            </div>
          </Link>
          <Link to="/about" className={styles['navlink1']}>
            <div className={styles['container2']}>
              <span
                data-url="/about"
                className={` ${styles['text2']} ${projectStyles['button-Text']} ${projectStyles['before-H2']} ${projectStyles['mobile-link-title']} `}
              >
                despre mine
              </span>
            </div>
          </Link>
          <Link to="/services" className={styles['navlink2']}>
            <div className={styles['container3']}>
              <span
                data-url="/services"
                className={` ${styles['Text3']} ${projectStyles['button-Text']} ${projectStyles['before-H2']} ${projectStyles['mobile-link-title']} `}
              >
                servicii
              </span>
            </div>
          </Link>
          <Link to="/stories" className={styles['navlink3']}>
            <div className={styles['container4']}>
              <span
                data-url="/stories"
                className={` ${styles['text4']} ${projectStyles['before-H2']} ${projectStyles['mobile-link-title']} ${projectStyles['button-Text']} `}
              >
                povesti
              </span>
            </div>
          </Link>
          <Link to="/hiit" className={styles['navlink4']}>
            <div className={styles['container5']}>
              <span
                data-url="/hiit"
                className={` ${styles['Text5']} ${projectStyles['before-H2']} ${projectStyles['mobile-link-title']} ${projectStyles['button-Text']} `}
              >
                hiit
              </span>
            </div>
          </Link>
          <div className={styles['container6']}>
            <span
              className={` ${styles['text6']} ${projectStyles['button-Text']} ${projectStyles['before-H2']} ${projectStyles['mobile-link-title']} `}
            >
              blog
            </span>
          </div>
          <div className={styles['container7']}>
            <span
              className={` ${styles['text7']} ${projectStyles['button-Text']} ${projectStyles['before-H2']} ${projectStyles['mobile-link-title']} `}
            >
              contact
            </span>
          </div>
        </div>
      </div>
      <div className={styles['social-media-links']}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link']}
        >
          <svg viewBox="0 0 602.2582857142856 1024" className={styles['icon3']}>
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link1']}
        >
          <svg viewBox="0 0 877.7142857142857 1024" className={styles['icon5']}>
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
        </a>
        <a href="https://www.linkedln.com" className={styles['link2']}>
          <svg viewBox="0 0 877.7142857142857 1024" className={styles['icon7']}>
            <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

MobileMenu.defaultProps = {
  rootClassName: '',
}

MobileMenu.propTypes = {
  rootClassName: PropTypes.string,
}

export default MobileMenu
