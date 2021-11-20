import React from 'react'

import { Helmet } from 'react-helmet'

import SlideInDownNavbar1 from '../components/slide-in-down-navbar1'
import MobileMenu from '../components/mobile-menu'
import FadeInLeftComponent1 from '../components/fade-in-left-component1'
import CtaBtnRounded from '../components/cta-btn-rounded'
import SectionHeading from '../components/section-heading'
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
        <title>Valentin Ignat PT</title>
        <meta property="og:title" content="Valentin Ignat PT" />
        <meta
          property="og:description"
          content="Hello there, how are you?\nWe can put here whatever message we want!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/fd70f607-bc85-4d7b-bb1f-7847d3ed2e1c?org_if_sml=1"
        />
      </Helmet>
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
                className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} ${styles['text2']} `}
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
              <CtaBtnRounded
                cta_text="afla mai mult"
                rootClassName="rootClassName2"
              ></CtaBtnRounded>
            </div>
            <img
              alt="image"
              src="/playground_assets/img_9759-1500h.jpg"
              className={styles['image']}
            />
          </div>
        </section>
        <section className={styles['Services']}>
          <div
            className={` ${styles['max-content-picture']} ${projectStyles['max-content']} `}
          >
            <h1
              className={` ${styles['Heading1']} ${projectStyles['heading-1']} `}
            >
              Evaluare. conexiune. experienta
            </h1>
            <div className={styles['container2']}></div>
          </div>
          <div className={styles['container3']}>
            <div
              className={` ${styles['max-content2']} ${projectStyles['max-content']} `}
            >
              <SectionHeading
                title="Servicii"
                description="Shop"
                rootClassName="rootClassName1"
                link_component="https://services-new"
              ></SectionHeading>
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
            <SectionHeading></SectionHeading>
            <CarrouselWithText></CarrouselWithText>
          </div>
        </section>
        <section className={styles['Shop']}>
          <div
            className={` ${styles['max-content4']} ${projectStyles['max-content']} `}
          >
            <SectionHeading
              title="Cum pot sa te ajut"
              description="HIIT"
              rootClassName="rootClassName2"
            ></SectionHeading>
            <div className={styles['Tablet-Container']}>
              <div className={styles['Tablet']}>
                <div className={styles['container4']}>
                  <h1
                    className={` ${styles['text8']} ${projectStyles['heading-1']} `}
                  >
                    hiit
                  </h1>
                  <PlayBtn rootClassName="rootClassName"></PlayBtn>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles['Blog']}>
          <div
            className={` ${styles['max-content5']} ${projectStyles['max-content']} `}
          >
            <SectionHeading
              title="Ce mai scriu"
              description="Blog"
              rootClassName="rootClassName"
            ></SectionHeading>
            <div className={styles['Cards-Container1']}>
              <BlogCard
                text="Nutrition"
                heading3="Toni Eatgood"
                image_src="https://images.unsplash.com/photo-1556908153-c0e609dda194?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
                rootClassName="rootClassName"
              ></BlogCard>
              <BlogCard
                text="Marketing"
                heading3="Gigi Gogutu"
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
