import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './navbar.module.css'

const Navbar = (props) => {
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
                <div data-url="/" className={projectStyles['tl-bullet']}>
                  <div className={projectStyles['inner-white']}></div>
                  <span
                    className={` ${projectStyles['button-Text']} ${projectStyles['tl-bullet-label']} `}
                  >
                    Acasa
                  </span>
                </div>
                <div className={projectStyles['tl-bullet-inner']}></div>
              </div>
            </Link>
            <div className={projectStyles['tl-line']}></div>
            <Link to="/despre" className={styles['navlink2']}>
              <div className={styles['Bullet1']}>
                <div
                  data-url="/despre"
                  className={` ${styles['BulletContent1']} ${projectStyles['tl-bullet']} `}
                >
                  <div className={projectStyles['inner-white']}></div>
                  <span
                    className={` ${styles['text1']} ${projectStyles['button-Text']} ${projectStyles['tl-bullet-label']} `}
                  >
                    Despre
                  </span>
                </div>
                <div className={projectStyles['tl-bullet-inner']}></div>
              </div>
            </Link>
            <div className={projectStyles['tl-line']}></div>
            <Link to="/servicii" className={styles['navlink3']}>
              <div className={styles['Bullet2']}>
                <div
                  data-url="/servicii"
                  className={projectStyles['tl-bullet']}
                >
                  <div className={projectStyles['inner-white']}></div>
                  <span
                    className={` ${styles['text2']} ${projectStyles['button-Text']} ${projectStyles['tl-bullet-label']} `}
                  >
                    Servicii
                  </span>
                </div>
                <div className={projectStyles['tl-bullet-inner']}></div>
              </div>
            </Link>
            <div className={projectStyles['tl-line']}></div>
            <Link to="/povesti-de-succes" className={styles['navlink4']}>
              <div className={styles['Bullet3']}>
                <div
                  data-url="/povesti-de-succes"
                  className={` ${styles['BulletContent3']} ${projectStyles['tl-bullet']} `}
                >
                  <div className={projectStyles['inner-white']}></div>
                  <span
                    className={` ${styles['text3']} ${projectStyles['button-Text']} ${projectStyles['tl-bullet-label']} `}
                  >
                    povesti
                  </span>
                </div>
                <div className={projectStyles['tl-bullet-inner']}></div>
              </div>
            </Link>
            <div className={projectStyles['tl-line']}></div>
            <Link to="/hiit" className={styles['navlink5']}>
              <div className={styles['Bullet4']}>
                <div
                  data-url="/hiit"
                  className={` ${styles['BulletContent4']} ${projectStyles['tl-bullet']} `}
                >
                  <div className={projectStyles['inner-white']}></div>
                  <span
                    className={` ${styles['text4']} ${projectStyles['button-Text']} ${projectStyles['tl-bullet-label']} `}
                  >
                    hIIT
                  </span>
                </div>
                <div className={projectStyles['tl-bullet-inner']}></div>
              </div>
            </Link>
            <div className={projectStyles['tl-line']}></div>
            <Link to="/blog-home" className={styles['navlink6']}>
              <div className={styles['Bullet5']}>
                <div
                  data-url="/blog"
                  className={` ${styles['BulletContent5']} ${projectStyles['tl-bullet']} `}
                >
                  <div className={projectStyles['inner-white']}></div>
                  <span
                    className={` ${styles['text5']} ${projectStyles['button-Text']} ${projectStyles['tl-bullet-label']} `}
                  >
                    Blog
                  </span>
                </div>
                <div className={projectStyles['tl-bullet-inner']}></div>
              </div>
            </Link>
            <div className={projectStyles['tl-line']}></div>
            <Link to="/contact" className={styles['navlink7']}>
              <div className={styles['Bullet6']}>
                <div
                  data-url="/contact"
                  className={` ${styles['BulletContent6']} ${projectStyles['tl-bullet']} `}
                >
                  <div className={projectStyles['inner-white']}></div>
                  <span
                    className={` ${styles['text6']} ${projectStyles['button-Text']} ${projectStyles['tl-bullet-label']} `}
                  >
                    Contact
                  </span>
                </div>
                <div className={projectStyles['tl-bullet-inner']}></div>
              </div>
            </Link>
          </div>
          <div className={styles['Profile']}>
            <button
              data-role="loginBtn"
              data-action="showLoginModal"
              className={` ${styles['LoginBtn']} ${projectStyles['button-Text']} ${projectStyles['animated-btn']} ${projectStyles['button-Text']} ${projectStyles['btn-secondary']} `}
            >
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
              </svg>
              <span className={styles['text7']}>Contul meu</span>
            </button>
            <Link
              to="/account"
              data-role="linkToProfile"
              className={` ${styles['AccountLink']} ${projectStyles['button-Text']} ${projectStyles['animated-btn']} ${projectStyles['button-Text']} ${projectStyles['btn-secondary']} `}
            >
              <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
              </svg>
              <span>Contul meu</span>
            </Link>
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

Navbar.defaultProps = {
  rootClassName: '',
}

Navbar.propTypes = {
  rootClassName: PropTypes.string,
}

export default Navbar
