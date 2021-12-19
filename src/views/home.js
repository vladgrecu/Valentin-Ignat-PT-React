import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import ContactFormModal from '../components/contact-form-modal'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'
import FadeInLeftHeroSection from '../components/fade-in-left-hero-section'
import BtnPrimary from '../components/btn-primary'
import ServiceCard from '../components/service-card'
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
      <LoginModal rootClassName="rootClassName"></LoginModal>
      <RegisterModal rootClassName="rootClassName3"></RegisterModal>
      <ContactFormModal rootClassName="rootClassName3"></ContactFormModal>
      <Navbar rootClassName="rootClassName"></Navbar>
      <MobileMenu rootClassName="rootClassName"></MobileMenu>
      <main className={styles['Main']}>
        <section
          className={` ${styles['Hero']} ${projectStyles['hero-container']} `}
        >
          <div
            className={` ${styles['max-content']} ${projectStyles['max-content-container']} `}
          >
            <FadeInLeftHeroSection
              text_content="Listening is power"
              rootClassName="rootClassName"
            ></FadeInLeftHeroSection>
          </div>
        </section>
        <section
          className={` ${styles['About']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-content1']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['Text-Container']}>
              <div className={styles['Info']}>
                <div className={styles['horizontal-line']}></div>
                <span className={styles['info-text']}>despre mine</span>
              </div>
              <h2
                className={` ${styles['Heading']} ${projectStyles['heading-1']} `}
              >
                <span>obiectivul meu</span>
              </h2>
              <span
                className={` ${styles['text01']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
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
                  className={styles['component06']}
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
        <section
          className={` ${styles['Services']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-content-picture']} ${projectStyles['max-content-container']} `}
          >
            <h1 className={projectStyles['heading-1']}>
              evaluare. conexiune. experienta.
            </h1>
            <div className={styles['container1']}></div>
          </div>
          <div
            className={` ${styles['max-content2']} ${projectStyles['max-content-container']} `}
          >
            <div className={projectStyles['section-heading-container']}>
              <div className={styles['TitleContainer']}>
                <div className={styles['Container2']}>
                  <div className={styles['horizontal-line1']}></div>
                  <span className={styles['text08']}>Shop</span>
                </div>
                <h1 className={projectStyles['heading-1']}>Servicii</h1>
              </div>
              <Link to="/servicii">
                <BtnPrimary
                  cta_text="Afla mai mult"
                  rootClassName="rootClassName26"
                  className={styles['component07']}
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
                image_src="/playground_assets/img_2868-1500w.jpg"
                card_title="evaluare"
              ></ServiceCard>
            </div>
          </div>
        </section>
        <section
          className={` ${styles['Stories']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-content3']} ${projectStyles['max-content-container']} `}
          >
            <div className={projectStyles['section-heading-container']}>
              <div className={styles['TitleContainer1']}>
                <div className={styles['Container3']}>
                  <div className={styles['horizontal-line2']}></div>
                  <span className={styles['text10']}>feedback</span>
                </div>
                <h1 className={projectStyles['heading-1']}>
                  Povesti de succes
                </h1>
              </div>
              <Link to="/povesti-de-succes">
                <BtnPrimary
                  cta_text="Afla mai mult"
                  rootClassName="rootClassName27"
                  className={styles['component11']}
                ></BtnPrimary>
              </Link>
            </div>
            <div data-role="carrousel" className={styles['Carrousel']}>
              <div className={styles['Slider']}>
                <div
                  className={` ${styles['Slides']} ${projectStyles['slides-container']} `}
                >
                  <img
                    alt="slide-1"
                    src="/playground_assets/catalina%20b_a-1500h.jpg"
                    data-slide-index="0"
                    className={` ${projectStyles['carrousel-slide']} ${projectStyles['slide-active']} ${projectStyles['animation-fade-in']} `}
                  />
                  <img
                    alt="slide-1"
                    src="/playground_assets/simina%20b_a%20-%20spate-600w.jpg"
                    data-slide-index="1"
                    className={` ${styles['Image2']} ${projectStyles['carrousel-slide']} ${projectStyles['animation-fade-in']} `}
                  />
                  <img
                    alt="slide-1"
                    src="/playground_assets/lorena%20b_a-600w.jpg"
                    data-slide-index="2"
                    className={` ${styles['Image3']} ${projectStyles['carrousel-slide']} ${projectStyles['animation-fade-in']} `}
                  />
                </div>
                <div className={projectStyles['carrousel-controls-container']}>
                  <div
                    data-slide-index="0"
                    className={projectStyles['carrousel-control-btn']}
                  >
                    <div
                      className={` ${styles['BulletContent']} ${projectStyles['tl-bullet-active']} ${projectStyles['tl-bullet']} `}
                    >
                      <div
                        className={` ${projectStyles['tl-inner-active']} ${projectStyles['inner-white']} `}
                      ></div>
                    </div>
                    <div className={projectStyles['tl-bullet-inner']}></div>
                  </div>
                  <div
                    className={` ${styles['Line']} ${projectStyles['tl-line']} `}
                  ></div>
                  <div
                    data-slide-index="1"
                    className={projectStyles['carrousel-control-btn']}
                  >
                    <div
                      className={` ${styles['BulletContent1']} ${projectStyles['tl-bullet']} `}
                    >
                      <div className={projectStyles['inner-white']}></div>
                    </div>
                    <div className={projectStyles['tl-bullet-inner']}></div>
                  </div>
                  <div
                    className={` ${styles['Line1']} ${projectStyles['tl-line']} `}
                  ></div>
                  <div
                    data-slide-index="2"
                    className={projectStyles['carrousel-control-btn']}
                  >
                    <div
                      className={` ${styles['BulletContent2']} ${projectStyles['tl-bullet']} `}
                    >
                      <div className={projectStyles['inner-white']}></div>
                    </div>
                    <div className={projectStyles['tl-bullet-inner']}></div>
                  </div>
                </div>
              </div>
              <div className={styles['Text-Container1']}>
                <span
                  data-slide-index="0"
                  className={` ${projectStyles['carrousel-text']} ${projectStyles['slide-active']} ${projectStyles['animation-fade-in']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    In 2019 m-am hotarat sa fac o schimbare legata de ce tip de
                    miscare sa fac. Pana atunci mergeam la clase de Zumba si
                    Pilates si devenise cam monoton, vroiam ceva mai challenging
                    asa ca m-am dus la o sala cu total alt fel de clase. Acolo
                    l-am cunoscut pe Vali, care facea clasele de HIIT. Mergeam
                    si la alte clase cateodata, dar cel mai des la Vali, pentru
                    ca energia si buna lui dispozitie (inca)e molipsitoare!
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>
                    In 2020, dupa ce am tot auzit de la prieteni/prietene ca au
                    apelat la un antrenor personal mi-am zis sa incerc si
                    eu(pentru prima oara), si a urmat: &quot;Vali, ai un loc si
                    pentru mine la Personal Training&quot;. Si m-a primit!
                    Decizia asta a fost motivata de cat de mult mi-a placut la
                    clasele lui si de ce om fain este.
                  </span>
                  <br></br>
                  <span>
                    De-atunci orele de PT au fost din ce in ce mai faine si
                    pentru ca incepeam sa progresez, dar si pentru ca incepeam
                    sa descopar tot mai multe lucruri bune despre Vali.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>
                    Pentru mine Vali e un antrenor complet: se intereseaza de
                    obiectivele fiecaruia si lucreaza cu fiecare pe baza
                    obiectivelor, e atent permanent la cum execut
                    exercitiile/miscarile si are rabdare sa explice ce vrea sa
                    zica de cate ori e nevoie pana inteleg, isi motiveaza
                    alegerile legate de exercitii, imi raspunde la orice
                    intrebare am, ma motiveaza prin felul lui de a fi si prin
                    faptul ca se bucura si el cu mine cand progresez, e foarte
                    implicat, se documenteaza continuu, m-a invatat sa ma
                    descurc si singura in sala, si bonus pentru cititori: are si
                    simtul umorului! :D
                  </span>
                  <br></br>
                  <span>
                    Din 2020 pana azi: am devenit mai puternica, am mai multa
                    incredere in mine, sunt mult mai activa si fac asta cu
                    placere, simt ca sunt in cea mai buna forma a mea de pana
                    acum, si-n plus sunt mai bogata ca l-am cunoscut pe Vali si
                    pe colegii de echipa.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>Multumesc inca o data, Vali!</span>
                  <br></br>
                  <span></span>
                </span>
                <span
                  data-slide-index="1"
                  className={` ${projectStyles['carrousel-text']} ${projectStyles['animation-fade-in']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  Pe lÃ¢ngÄ faptul cÄ este un profesionist, Vali este Èi un om
                  foarte fain! DacÄ simÈi cÄ nu vei ajunge vreodatÄ sÄ mergi cu
                  drag la salÄ e pentru cÄ nu l-ai cunoscut pe Vali!
                  Profesionalism (antrenor) + multa transpiraÈie (client) + good
                  vibes = antrenamente cu Vali
                </span>
                <span
                  data-slide-index="2"
                  className={` ${projectStyles['carrousel-text']} ${projectStyles['animation-fade-in']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    Hmm.. este asa de indepartat inceputul povestii mele cu
                    Coach, incat trebuie sa fac niste eforturi pentru a-mi
                    aminti:D. M-am decis in urma cu vreo 4-5 ani parca... sa nu
                    mai ignor faptul ca am 20 si ceva de ani si obosesc cand urc
                    10 scari, asa ca printr-o cunostinta comuna am ajuns sa il
                    cunosc pe Vali. De atunci lucram impreuna fara pauza:D
                    indiferent de locatie (diferite Sali de-a lungul timpului,
                    apoi in online de cand cu pandemia).
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>
                    Ma intreaba multa lume de ce continui sa lucrez cu antrenor
                    personal avand in vedere ca de atata timp deja stiu sa
                    execut corect exercitiile. E simplu! Daca nu as face cu
                    Vali, nu as face deloc:D. Ma motiveaza si ma face sa fac
                    sport de 4 ani constant. Cum? Simplu!
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>
                    Am sa raspund la 2 intrebari deodata: cum ma motiveaza si ce
                    imi place la el: profesionalismul, implicarea si
                    rigurozitatea. Povestim si despre alte lucruri in afara de
                    sport, inaintea antrenamentelor, dupa antrenamente, in
                    timpul liber, dar NICIODATA in timpul antrenamentelor (in
                    ciuda incercarilor mele de a mai fura un minut-2 :D). Pare
                    cateodata ca nu este atent la tine.. Ai sa aflii in scurt
                    timp ca te inseli (âai pauza 2 minuteâ si in 2 minute pe
                    ceas se aude: âPauza a trecut!â) sau faci 10 repetari si la
                    a 11-a nu mai ai chef si o faci pe jumatate si de undeva din
                    podea, din ceruri, de dupa usa (tu nu il vezi deci automat
                    crezi ca nici el nu te vede) : â AIA NU SE PUNE CA
                    REPETARE!â.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>
                    Cum l-as descrie pe Coach in 3 cuvinte: profesionalist,
                    ambitios si riguros ( acestea fiind atat calitatile cat si
                    defectele lui in functie de cat chef am de antrenament in
                    acea zi:))) totodata un om cald si prietenos. Antrenamentele
                    sunt variate, astfel incat nu m-am plictisit de ele de 4 ani
                    ( mare lucru) si faptul ca cineva âma trage de urechiâ
                    constant sa nu abandonez sportul este foarte de ajutor.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-content4']} ${projectStyles['max-content-container']} `}
          >
            <div className={projectStyles['section-heading-container']}>
              <div className={styles['TitleContainer2']}>
                <div className={styles['Container7']}>
                  <div className={styles['horizontal-line3']}></div>
                  <span className={styles['text40']}>HIIT</span>
                </div>
                <h1 className={projectStyles['heading-1']}>
                  Cum pot sa te ajut
                </h1>
              </div>
              <Link to="/hiit">
                <BtnPrimary
                  cta_text="Afla mai mult"
                  rootClassName="rootClassName28"
                  className={styles['component12']}
                ></BtnPrimary>
              </Link>
            </div>
            <div className={styles['Tablet-Container']}>
              <video
                src="https://mypthelperbucket.s3.us-east-2.amazonaws.com/HIIT+promo+2.mp4"
                muted="true"
                poster="/playground_assets/img_9766-1500w.jpg"
                preload="auto"
                controls="true"
                playsinline="true"
                data-video-type="promoVideo"
                className={styles['video']}
              ></video>
              <PlayBtn
                rootClassName="rootClassName"
                className={styles['component13']}
              ></PlayBtn>
            </div>
          </div>
        </section>
        <section className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-content5']} ${projectStyles['max-content-container']} `}
          >
            <div className={projectStyles['section-heading-container']}>
              <div className={styles['TitleContainer3']}>
                <div className={styles['Container8']}>
                  <div className={styles['horizontal-line4']}></div>
                  <span className={styles['text42']}>Blog</span>
                </div>
                <h1 className={projectStyles['heading-1']}>Ce mai scriu</h1>
              </div>
              <Link to="/blog-home">
                <BtnPrimary
                  cta_text="Afla mai mult"
                  rootClassName="rootClassName29"
                  className={styles['component14']}
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
