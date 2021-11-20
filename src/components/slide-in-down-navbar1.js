import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './slide-in-down-navbar1.module.css'

const SlideInDownNavbar1 = (props) => {
  return (
    <header
      className={` ${styles['slideInDown-navbar']} ${
        styles[props.rootClassName]
      } `}
    >
      <nav className={styles['full-width']}>
        <div className={styles['Navbar']}>
          <Link to="/" className={styles['navlink']}>
            <div className={styles['Logo']}>
              <img
                alt="image"
                src="/playground_assets/logo%20secundar-05.svg"
                className={styles['image']}
              />
            </div>
          </Link>
          <div className={styles['Timeline']}>
            <Link to="/" className={styles['navlink1']}>
              <div className={styles['Bullet']}>
                <div data-url="/" className={projectStyles['timeline-bullet']}>
                  <div className={projectStyles['inner-white']}></div>
                  <span
                    className={` ${projectStyles['button-Text']} ${projectStyles['timeline-bullet-label']} `}
                  >
                    Acasa
                  </span>
                </div>
                <div className={projectStyles['timeline-bullet-inner']}></div>
              </div>
            </Link>
            <div className={projectStyles['timeline-line']}></div>
            <Link to="/about" className={styles['navlink2']}>
              <div className={styles['Bullet1']}>
                <div
                  data-url="/about"
                  className={` ${styles['BulletContent1']} ${projectStyles['timeline-bullet']} `}
                >
                  <div className={projectStyles['inner-white']}></div>
                  <span
                    className={` ${styles['text1']} ${projectStyles['button-Text']} ${projectStyles['timeline-bullet-label']} `}
                  >
                    Despre mine
                  </span>
                </div>
                <div className={projectStyles['timeline-bullet-inner']}></div>
              </div>
            </Link>
            <div className={projectStyles['timeline-line']}></div>
            <Link to="/services" className={styles['navlink3']}>
              <div className={styles['Bullet2']}>
                <div
                  data-url="/services"
                  className={projectStyles['timeline-bullet']}
                >
                  <div className={projectStyles['inner-white']}></div>
                  <span
                    className={` ${styles['text2']} ${projectStyles['button-Text']} ${projectStyles['timeline-bullet-label']} `}
                  >
                    Servicii
                  </span>
                </div>
                <div className={projectStyles['timeline-bullet-inner']}></div>
              </div>
            </Link>
            <div className={projectStyles['timeline-line']}></div>
            <Link to="/stories" className={styles['navlink4']}>
              <div className={styles['Bullet3']}>
                <div
                  data-url="/stories"
                  className={` ${styles['BulletContent3']} ${projectStyles['timeline-bullet']} `}
                >
                  <div className={projectStyles['inner-white']}></div>
                  <span
                    className={` ${styles['text3']} ${projectStyles['button-Text']} ${projectStyles['timeline-bullet-label']} `}
                  >
                    povesti
                  </span>
                </div>
                <div className={projectStyles['timeline-bullet-inner']}></div>
              </div>
            </Link>
            <div className={projectStyles['timeline-line']}></div>
            <Link to="/hiit" className={styles['navlink5']}>
              <div className={styles['Bullet4']}>
                <div
                  data-url="/hiit"
                  className={` ${styles['BulletContent4']} ${projectStyles['timeline-bullet']} `}
                >
                  <div className={projectStyles['inner-white']}></div>
                  <span
                    className={` ${styles['text4']} ${projectStyles['button-Text']} ${projectStyles['timeline-bullet-label']} `}
                  >
                    hIIT
                  </span>
                </div>
                <div className={projectStyles['timeline-bullet-inner']}></div>
              </div>
            </Link>
            <div className={projectStyles['timeline-line']}></div>
            <div className={styles['Bullet5']}>
              <div
                className={` ${styles['BulletContent5']} ${projectStyles['timeline-bullet']} `}
              >
                <div className={projectStyles['inner-white']}></div>
                <span
                  className={` ${styles['text5']} ${projectStyles['button-Text']} ${projectStyles['timeline-bullet-label']} `}
                >
                  Blog
                </span>
              </div>
              <div className={projectStyles['timeline-bullet-inner']}></div>
            </div>
            <div className={projectStyles['timeline-line']}></div>
            <div className={styles['Bullet6']}>
              <div
                className={` ${styles['BulletContent6']} ${projectStyles['timeline-bullet']} `}
              >
                <div className={projectStyles['inner-white']}></div>
                <span
                  className={` ${styles['text6']} ${projectStyles['button-Text']} ${projectStyles['timeline-bullet-label']} `}
                >
                  Contact
                </span>
              </div>
              <div className={projectStyles['timeline-bullet-inner']}></div>
            </div>
          </div>
          <div className={styles['menu']}>
            <svg viewBox="0 0 1024 1024" className={styles['menu-icon']}>
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </nav>
    </header>
  )
}

SlideInDownNavbar1.defaultProps = {
  rootClassName: '',
}

SlideInDownNavbar1.propTypes = {
  rootClassName: PropTypes.string,
}

export default SlideInDownNavbar1
