import React from 'react'

import { Helmet } from 'react-helmet'

import MobileMenu from '../components/mobile-menu'
import SlideInDownNavbar from '../components/slide-in-down-navbar'
import FadeInLeftComponent from '../components/fade-in-left-component'
import AnimatedBtn from '../components/animated-btn'
import ServiceCard from '../components/service-card'
import CarrouselBtn from '../components/carrousel-btn'
import Gallery from '../components/gallery'
import BlogCard from '../components/blog-card'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './my-mission.module.css'

const MyMission = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>MyMission - Valentin Ignat PT</title>
        <meta property="og:title" content="MyMission - Valentin Ignat PT" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/27a3c67c-61d9-403f-afbd-260f79571dcb?org_if_sml=1"
        />
      </Helmet>
      <MobileMenu></MobileMenu>
      <SlideInDownNavbar></SlideInDownNavbar>
      <main className={styles['Main']}>
        <div className={styles['Hero-Full-Width']}>
          <div className={styles['Hero']}>
            <div className={styles['Hero-Heading']}>
              <FadeInLeftComponent text_content="MY MISSION PAGE"></FadeInLeftComponent>
            </div>
          </div>
        </div>
        <section className={styles['Section']}>
          <div className={styles['Content']}>
            <div className={styles['Image-Container']}>
              <img
                alt="image"
                src="/playground_assets/121501332_923440518184840_8571899899672809555_n-1500w.jpg"
                className={styles['image']}
              />
            </div>
            <div className={styles['Text-Container']}>
              <div className={styles['Container1']}>
                <div className={styles['horizontal-line']}></div>
                <span
                  className={` ${styles['text']} ${projectStyles['before-H2']} `}
                >
                  ABOUT vali ignat
                </span>
              </div>
              <h2 className={` ${styles['Heading']} ${projectStyles['h2']} `}>
                <span className={styles['text01']}>
                  something like your motto or a favourite quote
                </span>
              </h2>
              <span
                className={` ${styles['text02']} ${projectStyles['content-Bold']} `}
              >
                <span className={styles['text03']}>
                  Brook presents your services with flexible, convenient and
                  cdpose layouts. You can select your favorite layouts &amp;
                  elements for cular ts with unlimited ustomization
                  possibilities. Pixel-perfect replication of the designers is
                  intended.
                </span>
              </span>
              <span
                className={` ${styles['text04']} ${projectStyles['content-Regular']} `}
              >
                <span className={styles['text05']}>
                  Brook presents your services with flexible, convefnient and
                  chient anipurpose layouts. You can select your favorite
                  layouts.
                </span>
              </span>
              <AnimatedBtn cta_text="Become a member"></AnimatedBtn>
            </div>
          </div>
        </section>
        <section className={styles['Section1']}>
          <div className={styles['Content1']}>
            <div className={styles['Header-Container']}>
              <div className={styles['Container2']}>
                <div className={styles['Container3']}>
                  <div className={styles['horizontal-line1']}></div>
                  <span
                    className={` ${styles['text06']} ${projectStyles['before-H2']} `}
                  >
                    my services
                  </span>
                </div>
                <h1 className={` ${styles['text07']} ${projectStyles['h2']} `}>
                  PUSH YOUR LIMITS FORWARD WE OFFER TO YOU
                </h1>
              </div>
              <AnimatedBtn cta_text="more services"></AnimatedBtn>
            </div>
            <div className={styles['Cards-Container']}>
              <ServiceCard
                image_src="https://images.unsplash.com/photo-1614091245646-b8b2afa2906d?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                card_title="personal training"
              ></ServiceCard>
              <ServiceCard
                image_src="https://images.unsplash.com/photo-1517963628607-235ccdd5476c?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                card_title="online training"
              ></ServiceCard>
              <ServiceCard
                image_src="https://images.unsplash.com/photo-1606335545623-5d90040a4756?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                card_title="free evaluation"
              ></ServiceCard>
            </div>
          </div>
        </section>
        <section className={styles['Section2']}>
          <div className={styles['Content2']}>
            <div className={styles['Slider']}>
              <div className={styles['Slides']}>
                <img
                  id="slide-1"
                  alt="slide-1"
                  src="/playground_assets/0-1500h.jpg"
                  className={styles['image1']}
                />
                <img
                  id="slide-2"
                  alt="slide-2"
                  src="/playground_assets/2-1500h.jpg"
                  className={styles['image2']}
                />
                <img
                  id="slide-3"
                  alt="slide-3"
                  src="/playground_assets/1-1500h.jpg"
                  className={styles['image3']}
                />
              </div>
              <div className={styles['Btns']}>
                <a href="#slide-1" className={styles['link']}>
                  <CarrouselBtn
                    className={styles['component07']}
                  ></CarrouselBtn>
                </a>
                <a href="#slide-2" className={styles['link1']}>
                  <CarrouselBtn
                    className={styles['component08']}
                  ></CarrouselBtn>
                </a>
                <a href="#slide-3" className={styles['link2']}>
                  <CarrouselBtn
                    className={styles['component09']}
                  ></CarrouselBtn>
                </a>
              </div>
            </div>
            <div className={styles['Text-Container1']}>
              <div className={styles['Container4']}>
                <div className={styles['horizontal-line2']}></div>
                <span
                  className={` ${styles['text08']} ${projectStyles['before-H2']} `}
                >
                  CLIENT FEEDBACK
                </span>
              </div>
              <h2 className={` ${styles['Heading1']} ${projectStyles['h2']} `}>
                <span className={styles['text09']}>
                  WHAT OUR CLIENT THIK ABOUT OUR GYM
                </span>
              </h2>
              <span
                className={` ${styles['text10']} ${projectStyles['content-Bold']} `}
              >
                <span className={styles['text11']}>
                  Brook presents your services with flexible, convenient and
                  cdpose layouts. You can select your favorite layouts &amp;
                  elements for cular ts with unlimited ustomization
                  possibilities. Pixel-perfect replication of the designers is
                  intended.
                </span>
              </span>
              <span
                className={` ${styles['text12']} ${projectStyles['content-Regular']} `}
              >
                <span className={styles['text13']}>
                  Brook presents your services with flexible, convefnient and
                  chient anipurpose layouts. You can select your favorite
                  layouts.
                </span>
              </span>
            </div>
          </div>
        </section>
        <div className={styles['Section3']}>
          <Gallery></Gallery>
        </div>
        <div className={styles['Section4']}>
          <div className={styles['Content3']}>
            <div className={styles['Header-Container1']}>
              <div className={styles['Container5']}>
                <div className={styles['Container6']}>
                  <div className={styles['horizontal-line3']}></div>
                  <span
                    className={` ${styles['text14']} ${projectStyles['before-H2']} `}
                  >
                    my collaborators
                  </span>
                </div>
                <h1 className={` ${styles['text15']} ${projectStyles['h2']} `}>
                  <span>it&apos;s not all about,</span>
                  <br></br>
                  <span>doing sports...</span>
                </h1>
              </div>
              <AnimatedBtn cta_text="more services"></AnimatedBtn>
            </div>
            <div className={styles['Cards-Container1']}>
              <BlogCard
                text="Professional massage"
                heading3="Maria Masseuza"
                image_src="https://images.unsplash.com/photo-1611072172377-0cabc3addb30?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
              ></BlogCard>
              <BlogCard
                text="Nutrition"
                heading3="Toni Eatgood"
                image_src="https://images.unsplash.com/photo-1556908153-c0e609dda194?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
              ></BlogCard>
              <BlogCard
                text="Marketing"
                heading3="Gigi Gogutu"
                image_src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
              ></BlogCard>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default MyMission
