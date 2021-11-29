import React from 'react'

import { Helmet } from 'react-helmet'

import ContactFormModal from '../components/contact-form-modal'
import SlideInDownNavbar1 from '../components/slide-in-down-navbar1'
import MobileMenu from '../components/mobile-menu'
import FadeInLeftComponent1 from '../components/fade-in-left-component1'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Contact - Coach Vali Ignat</title>
        <meta property="og:title" content="Contact - Coach Vali Ignat" />
        <meta
          property="og:description"
          content="Hello there, how are you?\nWe can put here whatever message we want!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/3a2f6895-526e-403a-884d-eca828114341?org_if_sml=1"
        />
      </Helmet>
      <ContactFormModal rootClassName="rootClassName4"></ContactFormModal>
      <SlideInDownNavbar1 rootClassName="rootClassName5"></SlideInDownNavbar1>
      <MobileMenu rootClassName="rootClassName4"></MobileMenu>
      <main className={styles['Main']}>
        <section className={styles['Hero']}>
          <div
            className={` ${styles['max-content']} ${projectStyles['max-content']} `}
          >
            <FadeInLeftComponent1
              text_content="unde ma gasesti?"
              rootClassName="rootClassName1"
            ></FadeInLeftComponent1>
          </div>
        </section>
        <div className={styles['Map']}>
          <div
            className={` ${styles['max-content1']} ${projectStyles['max-content']} `}
          >
            <div className={styles['Container1']}>
              <a href="tel:+40756831946" className={styles['link']}>
                <div className={styles['container2']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                    <path d="M682 768v-598h-384v598h384zM490 938q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM662 42q44 0 75 32t31 76v724q0 44-31 76t-75 32h-342q-44 0-75-32t-31-76v-724q0-44 31-76t75-32h342z"></path>
                  </svg>
                  <span
                    className={` ${styles['text']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    Telefon
                  </span>
                  <span
                    className={` ${styles['text1']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    +40 756 831 946
                  </span>
                </div>
              </a>
              <div className={styles['separator']}></div>
              <div className={styles['Container3']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                  <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                </svg>
                <span
                  className={` ${styles['text2']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  Locatie
                </span>
                <span
                  className={` ${styles['text3']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  Cartierul Zorilor, Cluj-Napoca
                </span>
              </div>
              <div className={styles['separator1']}></div>
              <div className={styles['container4']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon4']}>
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span
                  className={` ${styles['text4']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  E-mail
                </span>
                <span
                  className={` ${styles['text5']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  valy.ignat@gmail.com
                </span>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21868.310271504783!2d23.566939721757155!3d46.75427551477646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490dd6ac0e6abd%3A0x4aa71262e69ddfbc!2sZorilor%2C%20Cluj-Napoca!5e0!3m2!1sen!2sro!4v1637622575226!5m2!1sen!2sro"
              className={styles['iframe']}
            ></iframe>
          </div>
        </div>
      </main>
      <Footer rootClassName="rootClassName4"></Footer>
    </div>
  )
}

export default Contact
