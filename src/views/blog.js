import React from 'react'

import { Helmet } from 'react-helmet'

import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import ContactFormModal from '../components/contact-form-modal'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'
import FadeInLeftHeroSection from '../components/fade-in-left-hero-section'
import BtnSecondary from '../components/btn-secondary'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './blog.module.css'

const Blog = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Blog - Coach Vali Ignat</title>
        <meta property="og:title" content="Blog - Coach Vali Ignat" />
        <meta
          property="og:description"
          content="Hello there, how are you?\nWe can put here whatever message we want!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/3a2f6895-526e-403a-884d-eca828114341?org_if_sml=1"
        />
      </Helmet>
      <LoginModal rootClassName="rootClassName3"></LoginModal>
      <RegisterModal rootClassName="rootClassName"></RegisterModal>
      <ContactFormModal rootClassName="rootClassName5"></ContactFormModal>
      <Navbar rootClassName="rootClassName6"></Navbar>
      <MobileMenu rootClassName="rootClassName5"></MobileMenu>
      <main className={styles['Main']}>
        <section
          className={` ${styles['Hero']} ${projectStyles['hero-container']} `}
        >
          <div
            className={` ${styles['max-content']} ${projectStyles['max-content-container']} `}
          >
            <FadeInLeftHeroSection
              text_content="ce mai scriu"
              rootClassName="rootClassName2"
            ></FadeInLeftHeroSection>
          </div>
        </section>
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-content1']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['BlogPostCard']}>
              <div className={styles['container1']}>
                <div className={styles['Image']}>
                  <div className={styles['Btn']}>
                    <BtnSecondary
                      cta_text="citeste mai mult"
                      rootClassName="rootClassName5"
                    ></BtnSecondary>
                  </div>
                </div>
              </div>
              <div className={styles['container2']}>
                <div className={styles['container3']}>
                  <span className={styles['text']}>24 dec 2021</span>
                </div>
                <h1 className={` ${styles['text01']} ${projectStyles['h2']} `}>
                  Titlu articol
                </h1>
                <span
                  className={` ${styles['text02']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>V-ati intrebat vreodata de ce dormim?ð´</span>
                  <br></br>
                  <span>
                    Daca l-as cita pe Mattew Walker, v-as spune ca somnul este
                    cel mai bun medicament natural pe care il puteti oferi
                    corpului vostru.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>
                    Nu v-ati intrebat niciodata de ce dormiti? Mai interesant
                    este ca, probabil niciodata nu v-ati gandit de ce dormim o
                    treime din intreaga noastra viata! Interesting.. huh?ð¤
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>Exista doi factori principali</span>
                  <br></br>
                  <span>
                    care stabilesc momentele de somn si momentele de veghe.
                  </span>
                  <br></br>
                  <span>
                    Ambii influenteaza chiar in acest moment mintea si corpul.
                  </span>
                </span>
                <div className={styles['Btn1']}>
                  <BtnSecondary
                    cta_text="citeste mai mult"
                    rootClassName="rootClassName9"
                  ></BtnSecondary>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="rootClassName5"></Footer>
    </div>
  )
}

export default Blog
