import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import ContactFormModal from '../components/contact-form-modal'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'
import FadeInLeftHeroSection from '../components/fade-in-left-hero-section'
import BlogPostCard from '../components/blog-post-card'
import BtnSecondary from '../components/btn-secondary'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './blog-home.module.css'

const BlogHome = () => {
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
            <BlogPostCard
              titlu="Post 1"
              Image_src="/playground_assets/34249831-1500w.jpg"
              rootClassName="rootClassName"
            ></BlogPostCard>
            <BlogPostCard
              titlu="Post 2"
              Image_src="/playground_assets/121300894_398877651278033_1137013070053583593_n-1500w.jpg"
              rootClassName="rootClassName2"
            ></BlogPostCard>
            <BlogPostCard
              titlu="post 3"
              Image_src="/playground_assets/121331170_254931365935904_1111116640039076298_n-1500w.jpg"
              rootClassName="rootClassName1"
            ></BlogPostCard>
            <div id="despre-somn" className={styles['BlogPostCard']}>
              <div className={styles['container1']}>
                <img
                  alt="descriere imagine"
                  src="/playground_assets/image%205%20%5B1%5D-1500w.png"
                  className={styles['Image']}
                />
              </div>
              <div className={styles['container2']}>
                <div className={styles['container3']}>
                  <span className={styles['text']}>24 dec 2021</span>
                </div>
                <h1 className={` ${styles['text01']} ${projectStyles['h2']} `}>
                  Despre somn
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
                    Ambii influenteaza chiar in acest moment mintea si corpul...
                  </span>
                </span>
                <div className={styles['Btn']}>
                  <Link to="/blog-despre-somn" className={styles['navlink']}>
                    <BtnSecondary
                      cta_text="citeste mai mult"
                      rootClassName="rootClassName17"
                      className={styles['component09']}
                    ></BtnSecondary>
                  </Link>
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

export default BlogHome
