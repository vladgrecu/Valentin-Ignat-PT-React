import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ContactFormModal from '../components/contact-form-modal'
import SlideInDownNavbar1 from '../components/slide-in-down-navbar1'
import MobileMenu from '../components/mobile-menu'
import FadeInLeftComponent1 from '../components/fade-in-left-component1'
import BtnPrimary from '../components/btn-primary'
import ServiceCard from '../components/service-card'
import CarrouselWithText from '../components/carrousel-with-text'
import PlayBtn from '../components/play-btn'
import BlogCard from '../components/blog-card'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Coach Vali Ignat</title>
        <meta property="og:title" content="Coach Vali Ignat" />
        <meta
          property="og:description"
          content="Hello there, how are you?\nWe can put here whatever message we want!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/3a2f6895-526e-403a-884d-eca828114341?org_if_sml=1"
        />
      </Helmet>
      <ContactFormModal rootClassName="rootClassName3"></ContactFormModal>
      <SlideInDownNavbar1 rootClassName="rootClassName"></SlideInDownNavbar1>
      <MobileMenu rootClassName="rootClassName"></MobileMenu>
      <main className={styles['Main']}>
        <section className={styles['Hero']}>
          <div
            className={` ${styles['max-content']} ${projectStyles['max-content']} `}
          >
            <FadeInLeftComponent1
              text_content="Listening is power"
              rootClassName="rootClassName"
            ></FadeInLeftComponent1>
          </div>
        </section>
        <section className={styles['About']}>
          <div
            className={` ${styles['max-content1']} ${projectStyles['max-content']} `}
          >
            <div className={styles['Text-Container']}>
              <div className={styles['Container1']}>
                <div className={styles['horizontal-line']}></div>
                <span
                  className={` ${styles['text']} ${projectStyles['before-H2']} `}
                >
                  despre mine
                </span>
              </div>
              <h2
                className={` ${styles['Heading']} ${projectStyles['heading-1']} `}
              >
                <span>obiectivul meu</span>
              </h2>
              <span
                className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} ${styles['text02']} `}
              >
                <span>
                  Misiunea mea este sa ajut oamenii din jurul meu sa
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  devina mai sanatosi, sa isi prelungeasca viata, sa
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  inspir prin toate mijloacele de comunicare existente
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  si sa amplific toate cunostintele pe care le detin la o
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  noua dimensiune, in care adaug empatia ca si condiment
                  principal.
                </span>
              </span>
              <Link to="/despre" className={styles['navlink']}>
                <BtnPrimary
                  cta_text="afla mai mult"
                  rootClassName="rootClassName2"
                  className={styles['component03']}
                ></BtnPrimary>
              </Link>
            </div>
            <img
              alt="image"
              src="/playground_assets/img_9913-1500h.jpg"
              className={styles['image']}
            />
          </div>
        </section>
        <section className={styles['Services']}>
          <div
            className={` ${styles['max-content-picture']} ${projectStyles['max-content']} `}
          >
            <h1 className={projectStyles['heading-1']}>
              evaluare. conexiune. experienta.
            </h1>
            <div className={styles['container2']}></div>
          </div>
          <div className={styles['container3']}>
            <div
              className={` ${styles['max-content2']} ${projectStyles['max-content']} `}
            >
              <div className={projectStyles['section-heading-container']}>
                <div className={styles['TitleContainer']}>
                  <div className={styles['Container4']}>
                    <div className={styles['horizontal-line1']}></div>
                    <span
                      className={` ${styles['text09']} ${projectStyles['before-H2']} `}
                    >
                      Shop
                    </span>
                  </div>
                  <h1 className={projectStyles['heading-1']}>Servicii</h1>
                </div>
                <Link to="/servicii">
                  <BtnPrimary
                    cta_text="Afla mai mult"
                    rootClassName="rootClassName26"
                    className={styles['component04']}
                  ></BtnPrimary>
                </Link>
              </div>
              <div className={styles['Cards-Container']}>
                <ServiceCard
                  image_src="/playground_assets/img_4081-1500w.jpg"
                  card_title="personal training"
                ></ServiceCard>
                <ServiceCard
                  image_src="/playground_assets/121300894_398877651278033_1137013070053583593_n-1500w.jpg"
                  card_title="online coaching"
                ></ServiceCard>
                <ServiceCard
                  image_src="/playground_assets/img_2868-1500h.jpg"
                  card_title="evaluare"
                ></ServiceCard>
              </div>
            </div>
          </div>
        </section>
        <section className={styles['Stories']}>
          <div
            className={` ${styles['max-content3']} ${projectStyles['max-content']} `}
          >
            <div className={projectStyles['section-heading-container']}>
              <div className={styles['TitleContainer1']}>
                <div className={styles['Container5']}>
                  <div className={styles['horizontal-line2']}></div>
                  <span
                    className={` ${styles['text11']} ${projectStyles['before-H2']} `}
                  >
                    feedback
                  </span>
                </div>
                <h1 className={projectStyles['heading-1']}>
                  Povesti de succes
                </h1>
              </div>
              <Link to="/povesti-de-succes">
                <BtnPrimary
                  cta_text="Afla mai mult"
                  rootClassName="rootClassName27"
                  className={styles['component08']}
                ></BtnPrimary>
              </Link>
            </div>
            <CarrouselWithText></CarrouselWithText>
          </div>
        </section>
        <section className={styles['Shop']}>
          <div
            className={` ${styles['max-content4']} ${projectStyles['max-content']} `}
          >
            <div className={projectStyles['section-heading-container']}>
              <div className={styles['TitleContainer2']}>
                <div className={styles['Container6']}>
                  <div className={styles['horizontal-line3']}></div>
                  <span
                    className={` ${styles['text13']} ${projectStyles['before-H2']} `}
                  >
                    HIIT
                  </span>
                </div>
                <h1 className={projectStyles['heading-1']}>
                  Cum pot sa te ajut
                </h1>
              </div>
              <Link to="/hiit">
                <BtnPrimary
                  cta_text="Afla mai mult"
                  rootClassName="rootClassName28"
                  className={styles['component10']}
                ></BtnPrimary>
              </Link>
            </div>
            <div className={styles['Tablet-Container']}>
              <div className={styles['Tablet']}>
                <video
                  src="https://mypthelperbucket.s3.us-east-2.amazonaws.com/HIIT+promo+2.mp4"
                  muted="true"
                  poster="/playground_assets/img_9766-1500h.jpg"
                  preload="auto"
                  controls="true"
                  playsinline="true"
                  data-video-type="promoVideo"
                  className={styles['video']}
                ></video>
                <PlayBtn
                  rootClassName="rootClassName"
                  className={styles['component11']}
                ></PlayBtn>
              </div>
            </div>
          </div>
        </section>
        <section className={styles['Blog']}>
          <div
            className={` ${styles['max-content5']} ${projectStyles['max-content']} `}
          >
            <div className={projectStyles['section-heading-container']}>
              <div className={styles['TitleContainer3']}>
                <div className={styles['Container7']}>
                  <div className={styles['horizontal-line4']}></div>
                  <span
                    className={` ${styles['text15']} ${projectStyles['before-H2']} `}
                  >
                    Blog
                  </span>
                </div>
                <h1 className={projectStyles['heading-1']}>Ce mai scriu</h1>
              </div>
              <Link to="/blog">
                <BtnPrimary
                  cta_text="Afla mai mult"
                  rootClassName="rootClassName29"
                  className={styles['component12']}
                ></BtnPrimary>
              </Link>
            </div>
            <div className={styles['Cards-Container1']}>
              <BlogCard
                data="24 dec 2021"
                autor="Vali Ignat"
                image_src="/playground_assets/image%205%20%5B1%5D-1500w.png"
                rootClassName="rootClassName"
              ></BlogCard>
              <BlogCard
                data="11 nov 2021"
                autor="Guest writter"
                image_src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
                rootClassName="rootClassName2"
              ></BlogCard>
            </div>
          </div>
        </section>
      </main>
      <Footer rootClassName="rootClassName"></Footer>
    </div>
  )
}

export default Home
