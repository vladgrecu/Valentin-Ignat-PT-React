import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './mobile-menu.module.css'

const MobileMenu = (props) => {
  return (
    <div className={projectStyles['mobile-menu']}>
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
            <div className={styles['Container01']}>
              <span
                data-url="/"
                className={` ${styles['Text']} ${projectStyles['button-Text']} ${projectStyles['mobile-link-title']} `}
              >
                <span>acasa</span>
              </span>
            </div>
          </Link>
          <Link to="/despre" className={styles['navlink1']}>
            <div className={styles['container02']}>
              <span
                data-url="/despre"
                className={` ${styles['text02']} ${projectStyles['button-Text']} ${projectStyles['mobile-link-title']} `}
              >
                despre mine
              </span>
            </div>
          </Link>
          <Link to="/servicii" className={styles['navlink2']}>
            <div className={styles['container03']}>
              <span
                data-url="/servicii"
                className={` ${styles['Text03']} ${projectStyles['button-Text']} ${projectStyles['mobile-link-title']} `}
              >
                servicii
              </span>
            </div>
          </Link>
          <Link to="/povesti-de-succes" className={styles['navlink3']}>
            <div className={styles['container04']}>
              <span
                data-url="/povesti-de-succes"
                className={` ${styles['text04']} ${projectStyles['button-Text']} ${projectStyles['mobile-link-title']} `}
              >
                povesti
              </span>
            </div>
          </Link>
          <Link to="/hiit" className={styles['navlink4']}>
            <div className={styles['container05']}>
              <span
                data-url="/hiit"
                className={` ${styles['Text05']} ${projectStyles['button-Text']} ${projectStyles['mobile-link-title']} `}
              >
                hiit
              </span>
            </div>
          </Link>
          <Link to="/blog-home" className={styles['navlink5']}>
            <div className={styles['container06']}>
              <span
                data-url="/blog"
                className={` ${styles['text06']} ${projectStyles['button-Text']} ${projectStyles['mobile-link-title']} `}
              >
                blog
              </span>
            </div>
          </Link>
          <Link to="/contact" className={styles['navlink6']}>
            <div className={styles['container07']}>
              <span
                data-url="/contact"
                className={` ${styles['text07']} ${projectStyles['button-Text']} ${projectStyles['mobile-link-title']} `}
              >
                contact
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles['Bottom']}>
        <div className={styles['Profile']}>
          <button
            data-role="loginBtn"
            data-action="showLoginModal"
            className={` ${styles['LoginBtn']} ${projectStyles['button-Text']} ${projectStyles['animated-btn']} ${projectStyles['button-Text']} ${projectStyles['btn-secondary']} `}
          >
            <svg viewBox="0 0 1024 1024" className={styles['icon03']}>
              <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <span>Contul meu</span>
          </button>
          <Link
            to="/account"
            data-role="linkToProfile"
            className={` ${styles['AccountLink']} ${projectStyles['button-Text']} ${projectStyles['animated-btn']} ${projectStyles['button-Text']} ${projectStyles['btn-secondary']} `}
          >
            <svg viewBox="0 0 1024 1024" className={styles['icon05']}>
              <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <span>Contul meu</span>
          </Link>
        </div>
        <div className={styles['social-media-links']}>
          <div className={styles['container08']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon07']}>
              <path d="M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z"></path>
            </svg>
          </div>
          <div className={styles['container09']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon09']}>
              <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
              <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
              <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
            </svg>
          </div>
          <div className={styles['container10']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon13']}>
              <path d="M873 148.8c-95.8-96-223.2-148.8-359-148.8-279.6 0-507.2 227.6-507.2 507.4 0 89.4 23.4 176.8 67.8 253.6l-72 263 269-70.6c74.2 40.4 157.6 61.8 242.4 61.8h0.2c0 0 0 0 0 0 279.6 0 507.4-227.6 507.4-507.4 0-135.6-52.8-263-148.6-359zM514.2 929.6v0c-75.8 0-150-20.4-214.8-58.8l-15.4-9.2-159.6 41.8 42.6-155.6-10-16c-42.4-67-64.6-144.6-64.6-224.4 0-232.6 189.2-421.8 422-421.8 112.6 0 218.6 44 298.2 123.6 79.6 79.8 123.4 185.6 123.4 298.4-0.2 232.8-189.4 422-421.8 422zM745.4 613.6c-12.6-6.4-75-37-86.6-41.2s-20-6.4-28.6 6.4c-8.4 12.6-32.8 41.2-40.2 49.8-7.4 8.4-14.8 9.6-27.4 3.2s-53.6-19.8-102-63c-37.6-33.6-63.2-75.2-70.6-87.8s-0.8-19.6 5.6-25.8c5.8-5.6 12.6-14.8 19-22.2s8.4-12.6 12.6-21.2c4.2-8.4 2.2-15.8-1-22.2s-28.6-68.8-39-94.2c-10.2-24.8-20.8-21.4-28.6-21.8-7.4-0.4-15.8-0.4-24.2-0.4s-22.2 3.2-33.8 15.8c-11.6 12.6-44.4 43.4-44.4 105.8s45.4 122.6 51.8 131.2c6.4 8.4 89.4 136.6 216.6 191.4 30.2 13 53.8 20.8 72.2 26.8 30.4 9.6 58 8.2 79.8 5 24.4-3.6 75-30.6 85.6-60.2s10.6-55 7.4-60.2c-3-5.6-11.4-8.8-24.2-15.2z"></path>
            </svg>
          </div>
          <div className={styles['container11']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon15']}>
              <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"></path>
              <path d="M64 384h192v576h-192v-576z"></path>
              <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles['Filter']}></div>
      <div className={styles['Logo']}></div>
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
