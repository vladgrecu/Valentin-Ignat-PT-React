import React from 'react'

import { Helmet } from 'react-helmet'

import SlideInDownNavbar1 from '../components/slide-in-down-navbar1'
import MobileMenu from '../components/mobile-menu'
import CtaBtnRounded from '../components/cta-btn-rounded'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>About - Valentin Ignat PT</title>
        <meta property="og:title" content="About - Valentin Ignat PT" />
        <meta
          property="og:description"
          content="Hello there, how are you?\nWe can put here whatever message we want!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/fd70f607-bc85-4d7b-bb1f-7847d3ed2e1c?org_if_sml=1"
        />
      </Helmet>
      <SlideInDownNavbar1 rootClassName="rootClassName1"></SlideInDownNavbar1>
      <MobileMenu rootClassName="rootClassName1"></MobileMenu>
      <main className={styles['Main']}>
        <section className={styles['Hero']}>
          <div
            className={` ${styles['max-content']} ${projectStyles['max-content']} `}
          >
            <div
              className={` ${styles['container01']} ${projectStyles['fade-in-left']} `}
            >
              <div className={styles['container02']}>
                <span
                  className={` ${styles['text']} ${projectStyles['heading-1']} `}
                >
                  coach
                </span>
                <span
                  className={` ${styles['text01']} ${projectStyles['heading-1']} `}
                >
                  vali
                </span>
              </div>
              <span
                className={` ${styles['Text02']} ${projectStyles['heading-1']} `}
              >
                ignat
              </span>
              <CtaBtnRounded
                cta_text="Contacteaza-ma"
                rootClassName="rootClassName12"
              ></CtaBtnRounded>
            </div>
          </div>
        </section>
        <section className={styles['About']}>
          <div
            className={` ${styles['max-content1']} ${projectStyles['max-content']} `}
          >
            <div className={styles['Image-Container']}>
              <div className={styles['container03']}>
                <img
                  alt="image"
                  src="/playground_assets/img_2970-1500h.jpg"
                  className={styles['image']}
                />
                <img
                  alt="image"
                  src="/playground_assets/image00013-1500h.jpeg"
                  className={styles['image01']}
                />
              </div>
              <h1 className={` ${styles['Heading']} ${projectStyles['h2']} `}>
                <span>meticulos</span>
              </h1>
            </div>
            <div className={styles['Text-Container']}>
              <div className={styles['Container04']}>
                <div className={styles['horizontal-line']}></div>
                <span
                  className={` ${styles['text04']} ${projectStyles['heading-1']} `}
                >
                  <span>
                    despre
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Vali</span>
                </span>
              </div>
              <span
                className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} ${styles['Text08']} `}
              >
                <span className={styles['text09']}>
                  La 31 de ani, mai puternic ca la 20
                </span>
                <span>
                  {' '}
                  - acesta sunt eu - Ã®nsÄ sunt la fel de progresiv, cu scopul
                  prevenirii Ã®mbÄtrÃ¢nirii biologice. AÈa vreau sÄ mÄ simt, Èi
                  Ètiu cÄ sunt pe drumul cel bun - de a menÈine un echilibru
                  sÄnÄtos al vieÈii.
                </span>
              </span>
              <h1 className={styles['Heading1']}>Vali Ignat</h1>
            </div>
          </div>
        </section>
        <div className={styles['InfoCards']}>
          <div className={styles['First']}>
            <div
              className={` ${styles['max-content2']} ${projectStyles['max-content']} `}
            >
              <div className={styles['container05']}>
                <span
                  className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    Cred cÄ am Ètiut asta de cÃ¢nd am fost copil sau poate ca aÈa
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text13']}>am simÈit</span>
                  <span>
                    . De ce zic asta? Pentru cÄ de cÃ¢nd am amintiri cu mine, Ã®mi
                    amintesc plimbÃ¢ndu-mÄ pe dealuri, alergÃ¢nd pe terenuri de
                    fotbal, cÄÈÄrÃ¢ndu-mÄ Ã®n copaci, sÄrind peste garajele de
                    maÈini Èi Ã®notÃ¢nd Ã®n rÃ¢urile Èi pÃ¢raiele din zona
                    SubcarpaÈilor de CurburÄ ai RomÃ¢niei. Toate amintirile pe
                    care le am din frageda tinereÈe se petrec Ã®n miÈcare,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text15']}>miÈcare continuÄ</span>
                  <span>
                    , inconÈtientÄ, pe care o âexecutamâ cu plÄcere, fÄrÄ sÄ
                    realizez cÃ¢t de importantÄ va fi mai tÃ¢rziu.
                  </span>
                </span>
                <span
                  className={` ${styles['text17']} ${projectStyles['h2']} `}
                >
                  consecvent
                </span>
                <span
                  className={` ${styles['text18']} ${projectStyles['h2']} `}
                >
                  rabdator
                </span>
              </div>
              <img
                alt="image"
                src="/playground_assets/img_9765-1500w.jpg"
                className={styles['image02']}
              />
            </div>
          </div>
          <div className={styles['Second']}>
            <div
              className={` ${styles['max-content3']} ${projectStyles['max-content']} `}
            >
              <img
                alt="image"
                src="/playground_assets/ceas-1500h.png"
                className={styles['image03']}
              />
              <div className={styles['container06']}>
                <span
                  className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    Din timpul liceului Ã®mi aduc aminte cÄ aveam cel puÈin 3 ore
                    pe sÄptÄmÃ¢nÄ de educaÈie fizicÄ Èi sport. Pe lÃ¢ngÄ ÈcoalÄ -
                    unde se respecta cu sfinÈenie programa ÈcolarÄ (cu 3 ore de
                    sport/sÄptÄmÃ¢nÄ) am cochetat cu tot felul de
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text21']}>sporturi</span>
                  <span>
                    {' '}
                    - la care aveam voie - deoarece mai existau Èi activitÄÈi
                    interzise de mama care avea grijÄ de fiul ei mai mic, Èi
                    anume tot ce Ã®nsemna contact fizic voit Èi se lÄsa cu
                    spart/rupt/umflat nasul Èi faÈa. Èi dacÄ nu mÄ lÄsa la
                    karate? Oricum improvizam miÈcÄrile de arte marÈiale cu
                    vecinii Ã®n spatele blocului, uneori la finalul meciurilor de
                    fotbal sau miuÈa... erau orgolii mari
                  </span>
                </span>
                <span
                  className={` ${styles['text23']} ${projectStyles['h2']} `}
                >
                  persuasiv
                </span>
                <span
                  className={` ${styles['text24']} ${projectStyles['h2']} `}
                >
                  Implicat
                </span>
              </div>
            </div>
          </div>
          <div className={styles['Third']}>
            <div
              className={` ${styles['max-content4']} ${projectStyles['max-content']} `}
            >
              <div className={styles['container07']}>
                <span
                  className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    Revenind la sporturile practicate, pot sa enumÄr printre
                    acestea: fotbal, baschet, handbal Èi
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text27']}>volei</span>
                  <span>
                    , cel din urmÄ rÄmÃ¢nÃ¢nd sportul meu de suflet. Am jucat
                    volei 5 ani Èi am obÈinut
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text29']}>medalia de bronz</span>
                  <span>
                    {' '}
                    la campionatele naÈionale de juniori, de la Baia Mare 2005,
                    pe postul de libero.
                  </span>
                </span>
                <span
                  className={` ${styles['text31']} ${projectStyles['h2']} `}
                >
                  empatic
                </span>
                <span
                  className={` ${styles['text32']} ${projectStyles['h2']} `}
                >
                  loial
                </span>
              </div>
              <img
                alt="image"
                src="/playground_assets/img_9818-1500h.jpg"
                className={styles['image04']}
              />
            </div>
          </div>
          <div className={styles['Forfth']}>
            <div
              className={` ${styles['max-content5']} ${projectStyles['max-content']} `}
            >
              <img
                alt="slide-1"
                src="/playground_assets/colaj-1500h.jpeg"
                className={styles['image05']}
              />
              <div className={styles['Text-Container1']}>
                <span
                  className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} ${styles['text33']} `}
                >
                  <span>
                    Ãntr-un final, a venit Èi momentul sÄ plec de acasÄ, la
                    vÃ¢rsta de 19 ani, spre oraÈul ce avea sa mÄ gÄzduiascÄ -
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text35']}>Cluj Napoca</span>
                  <span>.</span>
                </span>
                <span
                  className={` ${styles['text37']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    {' '}
                    Ãn perioada facultÄÈii am fÄcut o pauzÄ de la sport, timp de
                    3 ani, faptÄ care a dus la o cÄdere Ã®ntr-o pantÄ abruptÄ
                    spre un stil de viaÈÄ sedentar Èi cu un nivel scÄzut de
                    energie.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span
                  className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} ${styles['text39']} `}
                >
                  <span>
                    Pana la urma, orice
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text41']}>
                    evolutie
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    vine cu putina suferinta, iar eu sufeream pentru ca nu imi
                    mai placeam. Nu mai voiam sÄ mÄ vad gras Ã®n oglindÄ, nu Ã®mi
                    plÄcea sÄ mÄ aud gÃ¢fÃ¢ind cÃ¢nd urcam cele patru etaje ale
                    blocului sau sÄ mÄ Ã®ncurce burta cÃ¢nd mÄ Ã®ncheiam la
                    Èireturi.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text43']}>Eu</span>
                  <span>
                    , care proveneam dintr-o viaÈÄ sportivÄ neÃ®ntreruptÄ.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['SportLife']}>
          <div className={styles['heading-container']}>
            <div className={styles['overlay']}></div>
            <h1
              className={` ${styles['text45']} ${projectStyles['heading-1']} `}
            >
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className={styles['text47']}>lifeStyle</span>
              <span> activ</span>
            </h1>
          </div>
          <div
            className={` ${styles['max-content6']} ${projectStyles['max-content']} `}
          >
            <div className={styles['container08']}>
              <img
                alt="image"
                src="/playground_assets/img_9585-1500w.jpg"
                className={styles['image06']}
              />
              <div className={styles['Text-Container2']}>
                <span
                  className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} ${styles['text49']} `}
                >
                  <span>
                    Cu un obiectiv bine stabilit am pÄÈit Ã®ntr-o salÄ
                    neconvenÈionalÄ Ã®n 2015, unde mi-am reÃ®nceput activitatea de
                    sportiv, sau cum Ã®mi place mie sÄ zic â
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text51']}>
                    atlet
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    - Èi mai tÃ¢rziu
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text53']}>antrenor</span>
                  <span>.</span>
                </span>
                <span
                  className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} ${styles['text55']} `}
                >
                  <span>
                    A fost greu cÃ¢nd am realizat cÃ¢t de mult regresasem Ã®n trei
                    ani de zile, Ã®nsÄ memoria muscularÄ Èi-a fÄcut treaba Èi aÈa
                    am revenit la forma pe care mi-am dorit-o, dar tot timpul cu
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text57']}>obiectivul notat</span>
                  <span>
                    {' '}
                    cu litere mari pe hÃ¢rtie Èi Ã®n minte, ajungÃ¢nd din ce Ã®n ce
                    mai aproape de el.
                  </span>
                </span>
              </div>
            </div>
            <div className={styles['container09']}>
              <span
                className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} ${styles['text59']} `}
              >
                <span>
                  OdatÄ ce obiectivul a fost atins am fixat altul, care la
                  rÃ¢ndul sÄu a fost Ã®ndeplinit cu
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text61']}>succes</span>
                <span>
                  . Ãn acest mod anii au trecut, adÄugÃ¢nd Èi mai multÄ
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text63']}>
                  pasiune
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  pentru ceea ce fac Èi
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text65']}>disciplinÄ</span>
                <span>.</span>
              </span>
            </div>
          </div>
        </div>
        <div className={styles['Gallery']}>
          <div
            className={` ${styles['max-content7']} ${projectStyles['max-content']} `}
          >
            <div className={styles['Container10']}>
              <div className={styles['container11']}>
                <img
                  alt="image"
                  src="/playground_assets/img_3703-edit-1500h.jpg"
                  className={styles['image07']}
                />
                <span
                  className={` ${styles['text67']} ${projectStyles['h2']} `}
                >
                  fericit
                </span>
                <span
                  className={` ${styles['text68']} ${projectStyles['h2']} `}
                >
                  sincer
                </span>
              </div>
              <img
                alt="image"
                src="/playground_assets/img_3005-1500h.jpg"
                className={styles['image08']}
              />
              <span
                className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
              >
                <span>
                  Acum sunt
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text71']}>antrenor</span>
                <span>, iar atleÈii mei Ã®mi spun â</span>
                <span className={styles['text73']}>coach</span>
                <span>
                  â. Sunt cel mai fericit pentru cÄ merg la un job unde devin pe
                  zi ce trece mai puternic, mai Ã®nÈelept, Èi unde am reuÈit
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text75']}>sÄ mÄ iubesc</span>
                <span> pentru tot ceea ce fac.</span>
              </span>
            </div>
            <div className={styles['container12']}>
              <div className={styles['container13']}>
                <img
                  alt="image"
                  src="/playground_assets/img_4100-1500w.jpg"
                  className={styles['image09']}
                />
                <h1 className={` ${styles['text77']} ${projectStyles['h2']} `}>
                  Energic
                </h1>
              </div>
              <img
                alt="image"
                src="/playground_assets/img_2868-1500h.jpg"
                className={styles['image10']}
              />
              <span className={` ${styles['text78']} ${projectStyles['h2']} `}>
                creativ
              </span>
              <div className={styles['container14']}>
                <img
                  alt="image"
                  src="/playground_assets/img_9937-1500w.jpg"
                  className={styles['image11']}
                />
                <h1 className={` ${styles['text79']} ${projectStyles['h2']} `}>
                  determinat
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['container15']}>
          <div
            className={` ${styles['max-content8']} ${projectStyles['max-content']} `}
          >
            <div className={styles['Text-Container3']}>
              <span
                className={` ${styles['text80']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
              >
                <span>
                  Realizez cÄ job-ul reprezintÄ
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text82']}>modul meu de a trÄi</span>
                <span>
                  {' '}
                  Èi de a-mi rescrie povestea spre obiectivele importante ale
                  vieÈii. Apreciez fiecare moment care mi se Ã®ntÃ¢mplÄ Èi mÄ
                  bucur de fiecare clipÄ Ã®ncercÃ¢nd sÄ acumulez cÃ¢te ceva nou Èi
                  util din mediul âcu care mÄ Ã®nconjorâ
                </span>
              </span>
              <CtaBtnRounded
                cta_text="Afla mai mult"
                rootClassName="rootClassName10"
              ></CtaBtnRounded>
            </div>
            <div className={styles['Image-Container1']}>
              <img
                alt="image"
                src="/playground_assets/img_1871-1500h.jpg"
                className={styles['image12']}
              />
              <img
                alt="image"
                src="/playground_assets/img_9904-1500h.jpg"
                className={styles['image13']}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="rootClassName1"></Footer>
    </div>
  )
}

export default About
