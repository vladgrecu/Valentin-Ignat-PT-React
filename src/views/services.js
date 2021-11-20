import React from 'react'

import { Helmet } from 'react-helmet'

import SlideInDownNavbar1 from '../components/slide-in-down-navbar1'
import MobileMenu from '../components/mobile-menu'
import CtaBtnRounded from '../components/cta-btn-rounded'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './services.module.css'

const Services = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Services - Valentin Ignat PT</title>
        <meta property="og:title" content="Services - Valentin Ignat PT" />
        <meta
          property="og:description"
          content="Hello there, how are you?\nWe can put here whatever message we want!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/fd70f607-bc85-4d7b-bb1f-7847d3ed2e1c?org_if_sml=1"
        />
      </Helmet>
      <SlideInDownNavbar1 rootClassName="rootClassName2"></SlideInDownNavbar1>
      <MobileMenu rootClassName="rootClassName2"></MobileMenu>
      <main className={styles['Main']}>
        <section className={styles['Hero']}>
          <div
            className={` ${styles['max-content']} ${projectStyles['max-content']} `}
          >
            <div
              className={` ${styles['Container01']} ${projectStyles['fade-in-left']} `}
            >
              <div className={styles['horizontal-line']}></div>
              <div className={styles['container02']}>
                <span
                  className={` ${styles['text']} ${projectStyles['heading-1']} `}
                >
                  <span>cum te pot ajuta?</span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles['hero-overlay']}>
            <div className={styles['social-media-links']}>
              <div className={styles['container03']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                  <path d="M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z"></path>
                </svg>
              </div>
              <div className={styles['container04']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                  <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                  <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                  <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
                </svg>
              </div>
              <div className={styles['container05']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                  <path d="M873 148.8c-95.8-96-223.2-148.8-359-148.8-279.6 0-507.2 227.6-507.2 507.4 0 89.4 23.4 176.8 67.8 253.6l-72 263 269-70.6c74.2 40.4 157.6 61.8 242.4 61.8h0.2c0 0 0 0 0 0 279.6 0 507.4-227.6 507.4-507.4 0-135.6-52.8-263-148.6-359zM514.2 929.6v0c-75.8 0-150-20.4-214.8-58.8l-15.4-9.2-159.6 41.8 42.6-155.6-10-16c-42.4-67-64.6-144.6-64.6-224.4 0-232.6 189.2-421.8 422-421.8 112.6 0 218.6 44 298.2 123.6 79.6 79.8 123.4 185.6 123.4 298.4-0.2 232.8-189.4 422-421.8 422zM745.4 613.6c-12.6-6.4-75-37-86.6-41.2s-20-6.4-28.6 6.4c-8.4 12.6-32.8 41.2-40.2 49.8-7.4 8.4-14.8 9.6-27.4 3.2s-53.6-19.8-102-63c-37.6-33.6-63.2-75.2-70.6-87.8s-0.8-19.6 5.6-25.8c5.8-5.6 12.6-14.8 19-22.2s8.4-12.6 12.6-21.2c4.2-8.4 2.2-15.8-1-22.2s-28.6-68.8-39-94.2c-10.2-24.8-20.8-21.4-28.6-21.8-7.4-0.4-15.8-0.4-24.2-0.4s-22.2 3.2-33.8 15.8c-11.6 12.6-44.4 43.4-44.4 105.8s45.4 122.6 51.8 131.2c6.4 8.4 89.4 136.6 216.6 191.4 30.2 13 53.8 20.8 72.2 26.8 30.4 9.6 58 8.2 79.8 5 24.4-3.6 75-30.6 85.6-60.2s10.6-55 7.4-60.2c-3-5.6-11.4-8.8-24.2-15.2z"></path>
                </svg>
              </div>
              <div className={styles['container06']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
                  <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"></path>
                  <path d="M64 384h192v576h-192v-576z"></path>
                  <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className={styles['Cards']}>
          <div
            className={` ${styles['max-content1']} ${projectStyles['max-content']} `}
          >
            <h1
              className={` ${projectStyles['heading-1']} ${styles['text02']} `}
            >
              ce anume iti doresti
            </h1>
            <div className={styles['cards-container']}>
              <div className={styles['container07']}>
                <img
                  alt="image"
                  src="/playground_assets/cantar-1500w.png"
                  className={styles['image']}
                />
                <span
                  className={` ${styles['text03']} ${projectStyles['h2']} `}
                >
                  sa pierzi in greutate
                </span>
              </div>
              <div className={styles['container08']}>
                <img
                  alt="image"
                  src="/playground_assets/biceps-1500w.png"
                  className={styles['image1']}
                />
                <span
                  className={` ${styles['text04']} ${projectStyles['h2']} `}
                >
                  sa iti cresti masa musculara
                </span>
              </div>
              <div className={styles['container09']}>
                <img
                  alt="image"
                  src="/playground_assets/posture-1500w.png"
                  className={styles['image2']}
                />
                <span
                  className={` ${styles['text05']} ${projectStyles['h2']} `}
                >
                  sa iti imbunatatesti postura
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className={styles['Services']}>
          <div
            className={` ${styles['Service']} ${projectStyles['services-card']} `}
          >
            <div className={projectStyles['overlay-container']}>
              <div
                className={` ${styles['heading-container']} ${projectStyles['max-content']} `}
              >
                <h1
                  className={` ${styles['Heading']} ${projectStyles['heading-1']} `}
                >
                  <span className={styles['text06']}>
                    evaluare completa si complexa
                  </span>
                </h1>
              </div>
              <div className={projectStyles['services-cta-container']}>
                <CtaBtnRounded
                  cta_text="Contacteaza-ma"
                  rootClassName="rootClassName6"
                ></CtaBtnRounded>
              </div>
            </div>
          </div>
          <div
            className={` ${styles['Service1']} ${projectStyles['services-card']} `}
          >
            <div className={projectStyles['overlay-container']}>
              <div
                className={` ${styles['heading-container1']} ${projectStyles['max-content']} `}
              >
                <h1
                  className={` ${styles['text07']} ${projectStyles['heading-1']} `}
                >
                  <span className={styles['text08']}>
                    antrenamente personale
                  </span>
                </h1>
              </div>
              <div className={projectStyles['services-cta-container']}>
                <CtaBtnRounded
                  cta_text="Contacteaza-ma"
                  rootClassName="rootClassName20"
                ></CtaBtnRounded>
              </div>
            </div>
          </div>
          <div
            className={` ${styles['Service2']} ${projectStyles['services-card']} `}
          >
            <div className={projectStyles['overlay-container']}>
              <div
                className={` ${styles['heading-container2']} ${projectStyles['max-content']} `}
              >
                <h1
                  className={` ${styles['text09']} ${projectStyles['heading-1']} `}
                >
                  <span className={styles['text10']}>online coaching</span>
                </h1>
              </div>
              <div className={projectStyles['services-cta-container']}>
                <CtaBtnRounded
                  cta_text="Contacteaza-ma"
                  rootClassName="rootClassName21"
                ></CtaBtnRounded>
              </div>
            </div>
          </div>
          <div
            className={` ${styles['Service3']} ${projectStyles['services-card']} `}
          >
            <div className={projectStyles['overlay-container']}>
              <div
                className={` ${styles['heading-container3']} ${projectStyles['max-content']} `}
              >
                <h1
                  className={` ${styles['text11']} ${projectStyles['heading-1']} `}
                >
                  <span className={styles['text12']}>
                    antrenamente personalizate cu suport video
                  </span>
                </h1>
              </div>
              <div className={projectStyles['services-cta-container']}>
                <CtaBtnRounded
                  cta_text="Contacteaza-ma"
                  rootClassName="rootClassName22"
                ></CtaBtnRounded>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="rootClassName2"></Footer>
    </div>
  )
}

export default Services
