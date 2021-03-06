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
                  - acesta sunt eu - ????ns???? sunt la fel de progresiv, cu scopul
                  prevenirii ????mb????tr????nirii biologice. A????a vreau s???? m???? simt, ????i
                  ????tiu c???? sunt pe drumul cel bun - de a men????ine un echilibru
                  s????n????tos al vie????ii.
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
                    Cred c???? am ????tiut asta de c????nd am fost copil sau poate ca a????a
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text13']}>am sim????it</span>
                  <span>
                    . De ce zic asta? Pentru c???? de c????nd am amintiri cu mine, ????mi
                    amintesc plimb????ndu-m???? pe dealuri, alerg????nd pe terenuri de
                    fotbal, c????????????r????ndu-m???? ????n copaci, s????rind peste garajele de
                    ma????ini ????i ????not????nd ????n r????urile ????i p????raiele din zona
                    Subcarpa????ilor de Curbur???? ai Rom????niei. Toate amintirile pe
                    care le am din frageda tinere????e se petrec ????n mi????care,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text15']}>mi????care continu????</span>
                  <span>
                    , incon????tient????, pe care o ??????executam?????? cu pl????cere, f????r???? s????
                    realizez c????t de important???? va fi mai t????rziu.
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
                    Din timpul liceului ????mi aduc aminte c???? aveam cel pu????in 3 ore
                    pe s????pt????m????n???? de educa????ie fizic???? ????i sport. Pe l????ng???? ????coal???? -
                    unde se respecta cu sfin????enie programa ????colar???? (cu 3 ore de
                    sport/s????pt????m????n????) am cochetat cu tot felul de
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text21']}>sporturi</span>
                  <span>
                    {' '}
                    - la care aveam voie - deoarece mai existau ????i activit????????i
                    interzise de mama care avea grij???? de fiul ei mai mic, ????i
                    anume tot ce ????nsemna contact fizic voit ????i se l????sa cu
                    spart/rupt/umflat nasul ????i fa????a. ????i dac???? nu m???? l????sa la
                    karate? Oricum improvizam mi????c????rile de arte mar????iale cu
                    vecinii ????n spatele blocului, uneori la finalul meciurilor de
                    fotbal sau miu????a... erau orgolii mari
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
                    Revenind la sporturile practicate, pot sa enum????r printre
                    acestea: fotbal, baschet, handbal ????i
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text27']}>volei</span>
                  <span>
                    , cel din urm???? r????m????n????nd sportul meu de suflet. Am jucat
                    volei 5 ani ????i am ob????inut
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text29']}>medalia de bronz</span>
                  <span>
                    {' '}
                    la campionatele na????ionale de juniori, de la Baia Mare 2005,
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
                    ????ntr-un final, a venit ????i momentul s???? plec de acas????, la
                    v????rsta de 19 ani, spre ora????ul ce avea sa m???? g????zduiasc???? -
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
                    ????n perioada facult????????ii am f????cut o pauz???? de la sport, timp de
                    3 ani, fapt???? care a dus la o c????dere ????ntr-o pant???? abrupt????
                    spre un stil de via???????? sedentar ????i cu un nivel sc????zut de
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
                    mai placeam. Nu mai voiam s???? m???? vad gras ????n oglind????, nu ????mi
                    pl????cea s???? m???? aud g????f????ind c????nd urcam cele patru etaje ale
                    blocului sau s???? m???? ????ncurce burta c????nd m???? ????ncheiam la
                    ????ireturi.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text43']}>Eu</span>
                  <span>
                    , care proveneam dintr-o via???????? sportiv???? ne????ntrerupt????.
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
                    Cu un obiectiv bine stabilit am p????????it ????ntr-o sal????
                    neconven????ional???? ????n 2015, unde mi-am re????nceput activitatea de
                    sportiv, sau cum ????mi place mie s???? zic ??????
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
                    - ????i mai t????rziu
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
                    A fost greu c????nd am realizat c????t de mult regresasem ????n trei
                    ani de zile, ????ns???? memoria muscular???? ????i-a f????cut treaba ????i a????a
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
                    cu litere mari pe h????rtie ????i ????n minte, ajung????nd din ce ????n ce
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
                  Odat???? ce obiectivul a fost atins am fixat altul, care la
                  r????ndul s????u a fost ????ndeplinit cu
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text61']}>succes</span>
                <span>
                  . ????n acest mod anii au trecut, ad????ug????nd ????i mai mult????
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
                  pentru ceea ce fac ????i
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text65']}>disciplin????</span>
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
                <span>, iar atle????ii mei ????mi spun ??????</span>
                <span className={styles['text73']}>coach</span>
                <span>
                  ??????. Sunt cel mai fericit pentru c???? merg la un job unde devin pe
                  zi ce trece mai puternic, mai ????n????elept, ????i unde am reu????it
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text75']}>s???? m???? iubesc</span>
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
                  Realizez c???? job-ul reprezint????
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text82']}>modul meu de a tr????i</span>
                <span>
                  {' '}
                  ????i de a-mi rescrie povestea spre obiectivele importante ale
                  vie????ii. Apreciez fiecare moment care mi se ????nt????mpl???? ????i m????
                  bucur de fiecare clip???? ????ncerc????nd s???? acumulez c????te ceva nou ????i
                  util din mediul ??????cu care m???? ????nconjor??????
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
