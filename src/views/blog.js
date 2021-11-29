import React from 'react'

import { Helmet } from 'react-helmet'

import ContactFormModal from '../components/contact-form-modal'
import SlideInDownNavbar1 from '../components/slide-in-down-navbar1'
import MobileMenu from '../components/mobile-menu'
import FadeInLeftComponent1 from '../components/fade-in-left-component1'
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
      <ContactFormModal rootClassName="rootClassName5"></ContactFormModal>
      <SlideInDownNavbar1 rootClassName="rootClassName6"></SlideInDownNavbar1>
      <MobileMenu rootClassName="rootClassName5"></MobileMenu>
      <main className={styles['Main']}>
        <section className={styles['Hero']}>
          <div
            className={` ${styles['max-content']} ${projectStyles['max-content']} `}
          >
            <FadeInLeftComponent1
              text_content="ce mai scriu"
              rootClassName="rootClassName2"
            ></FadeInLeftComponent1>
          </div>
        </section>
        <div className={styles['ArticleContainer']}>
          <div
            className={` ${styles['max-content1']} ${projectStyles['max-content']} `}
          >
            <div className={styles['BlogPostCard']}>
              <div className={styles['container01']}>
                <div className={styles['Image']}>
                  <div className={styles['Btn']}>
                    <BtnSecondary
                      cta_text="citeste mai mult"
                      rootClassName="rootClassName5"
                    ></BtnSecondary>
                  </div>
                </div>
              </div>
              <div className={styles['container02']}>
                <div className={styles['container03']}>
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
            <div className={styles['BlogPostCard1']}>
              <div className={styles['container04']}>
                <div className={styles['container05']}>
                  <span className={styles['text11']}>24 dec 2021</span>
                </div>
                <h1 className={` ${styles['text12']} ${projectStyles['h2']} `}>
                  Titlu articol
                </h1>
                <span
                  className={` ${styles['text13']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
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
                <div className={styles['Container06']}>
                  <BtnSecondary
                    cta_text="citeste mai mult"
                    rootClassName="rootClassName6"
                  ></BtnSecondary>
                </div>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxibG9nfGVufDB8fHx8MTYzNzcwODU1Mg&amp;ixlib=rb-1.2.1&amp;h=1500"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className={styles['image1']}
              />
            </div>
            <div className={styles['BlogPostCard2']}>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxibG9nfGVufDB8fHx8MTYzNzcwODU1Mg&amp;ixlib=rb-1.2.1&amp;h=1500"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className={styles['image2']}
              />
              <div className={styles['container07']}>
                <div className={styles['container08']}>
                  <span className={styles['text22']}>24 dec 2021</span>
                </div>
                <h1 className={` ${styles['text23']} ${projectStyles['h2']} `}>
                  Titlu articol
                </h1>
                <span
                  className={` ${styles['text24']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
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
                <div className={styles['Container09']}>
                  <BtnSecondary
                    cta_text="citeste mai mult"
                    rootClassName="rootClassName7"
                  ></BtnSecondary>
                </div>
              </div>
            </div>
            <div className={styles['BlogPostCard3']}>
              <div className={styles['container10']}>
                <div className={styles['container11']}>
                  <span className={styles['text33']}>24 dec 2021</span>
                </div>
                <h1 className={` ${styles['text34']} ${projectStyles['h2']} `}>
                  Titlu articol
                </h1>
                <span
                  className={` ${styles['text35']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
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
                <div className={styles['Container12']}>
                  <BtnSecondary
                    cta_text="citeste mai mult"
                    rootClassName="rootClassName8"
                  ></BtnSecondary>
                </div>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI3fHxibG9nfGVufDB8fHx8MTYzNzcwODU3MQ&amp;ixlib=rb-1.2.1&amp;h=1500"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className={styles['image3']}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="rootClassName5"></Footer>
    </div>
  )
}

export default Blog
