import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import ContactFormModal from '../components/contact-form-modal'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'
import BtnPrimary from '../components/btn-primary'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './despre.module.css'

const Despre = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Despre - Coach Vali Ignat</title>
        <meta property="og:title" content="Despre  - Coach Vali Ignat" />
        <meta
          property="og:description"
          content="Hello there, how are you?\nWe can put here whatever message we want!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/3a2f6895-526e-403a-884d-eca828114341?org_if_sml=1"
        />
      </Helmet>
      <LoginModal rootClassName="rootClassName4"></LoginModal>
      <RegisterModal rootClassName="rootClassName2"></RegisterModal>
      <ContactFormModal rootClassName="rootClassName"></ContactFormModal>
      <Navbar rootClassName="rootClassName1"></Navbar>
      <MobileMenu rootClassName="rootClassName1"></MobileMenu>
      <main className={styles['Main']}>
        <section
          className={` ${styles['Hero']} ${projectStyles['hero-container']} `}
        >
          <div
            className={` ${styles['max-content']} ${projectStyles['max-content-container']} `}
          >
            <div
              className={` ${styles['fade-inleft']} ${projectStyles['animation-fade-in-left']} `}
            >
              <div className={styles['horizontal-line']}></div>
              <div className={styles['container01']}>
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
                <div
                  data-action="showContactFormModal"
                  className={styles['container03']}
                >
                  <BtnPrimary
                    cta_text="Contacteaza-ma"
                    rootClassName="rootClassName12"
                  ></BtnPrimary>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={` ${styles['About']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-content1']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['Image-Container']}>
              <div className={styles['container04']}>
                <img
                  alt="Vali Ignat - medalie "
                  src="/playground_assets/img_2970-1500h.jpg"
                  className={styles['image']}
                />
                <img
                  alt="Lisa cu Vali Ignat"
                  src="/playground_assets/image00013-1500h.jpeg"
                  className={styles['image01']}
                />
              </div>
              <h1 className={` ${styles['Heading']} ${projectStyles['h2']} `}>
                <span>meticulos</span>
              </h1>
            </div>
            <div className={styles['Text-Container']}>
              <div className={styles['Container05']}>
                <div className={styles['horizontal-line1']}></div>
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
                className={` ${styles['Text08']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
              >
                <span className={styles['text09']}>
                  La 31 de ani, mai puternic ca la 20
                </span>
                <span>
                  {' '}
                  - acesta sunt eu - insa sunt la fel de progresiv, cu scopul
                  prevenirii imbatranirii biologice. Asa vreau sa ma simt, si
                  stiu ca sunt pe drumul cel bun - de a mentine un echilibru
                  sanatos al vietii.
                </span>
              </span>
              <h1 className={styles['Heading1']}>Vali Ignat</h1>
            </div>
          </div>
        </section>
        <div className={styles['InfoCards']}>
          <div
            className={` ${styles['First']} ${projectStyles['section-container']} `}
          >
            <div
              className={` ${styles['max-content2']} ${projectStyles['max-content-container']} `}
            >
              <div className={styles['container06']}>
                <span
                  className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    Cred ca am stiut asta de cand am fost copil sau poate ca asa
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text13']}>am simtit</span>
                  <span>
                    . De ce zic asta? Pentru ca de cand am amintiri cu mine, imi
                    amintesc plimbandu-ma pe dealuri, alergand pe terenuri de
                    fotbal, catarandu-ma in copaci, sarind peste garajele de
                    masini si inotand in raurile si paraiele din zona
                    Subcarpatilor de Curbura ai Romaniei. Toate amintirile pe
                    care le am din frageda tinerete se petrec in miscare,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text15']}>miscare continua</span>
                  <span>
                    , inconstienta, pe care o âexecutamâ cu placere, fara sa
                    realizez cat de importanta va fi mai tarziu.
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
                alt="Listening is power"
                src="/playground_assets/img_9765-1500w.jpg"
                className={styles['image02']}
              />
            </div>
          </div>
          <div
            className={` ${styles['Second']} ${projectStyles['section-container']} `}
          >
            <div
              className={` ${styles['max-content3']} ${projectStyles['max-content-container']} `}
            >
              <img
                alt="timp"
                src="/playground_assets/ceas-1500h.png"
                className={styles['image03']}
              />
              <div className={styles['container07']}>
                <span
                  className={` ${styles['text19']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    Din timpul liceului imi aduc aminte ca aveam cel putin 3 ore
                    pe saptamana de educatie fizica si sport. Pe langa scoala -
                    unde se respecta cu sfintenie programa scolara (cu 3 ore de
                    sport/saptamana) am cochetat cu tot felul de
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text21']}>sporturi</span>
                  <span>
                    {' '}
                    - la care aveam voie - deoarece mai existau si activitati
                    interzise de mama care avea grija de fiul ei mai mic, si
                    anume tot ce insemna contact fizic voit si se lasa cu
                    spart/rupt/umflat nasul si fata. Si daca nu ma lasa la
                    karate? Oricum improvizam miscarile de arte martiale cu
                    vecinii in spatele blocului, uneori la finalul meciurilor de
                    fotbal sau miuta... erau orgolii mari
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
          <div className={projectStyles['section-container']}>
            <div
              className={` ${styles['max-content4']} ${projectStyles['max-content-container']} `}
            >
              <div className={styles['container08']}>
                <span
                  className={` ${styles['text25']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    Revenind la sporturile practicate, pot sa enumar printre
                    acestea: fotbal, baschet, handbal si
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text27']}>volei</span>
                  <span>
                    , cel din urma ramanand sportul meu de suflet. Am jucat
                    volei 5 ani si am obtinut
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text29']}>medalia de bronz</span>
                  <span>
                    {' '}
                    la campionatele nationale de juniori, de la Baia Mare 2005,
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
                alt="Deadlift Vali Ignat"
                src="/playground_assets/img_9818-1500w.jpg"
                className={styles['image04']}
              />
            </div>
          </div>
          <div className={projectStyles['section-container']}>
            <div
              className={` ${styles['max-content5']} ${projectStyles['max-content-container']} `}
            >
              <img
                alt="Trasnformare Vali Ignat"
                src="/playground_assets/colaj-1500w.jpeg"
                className={styles['image05']}
              />
              <div className={styles['Text-Container1']}>
                <span
                  className={` ${styles['text33']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    Intr-un final, a venit si momentul sa plec de acasa, la
                    varsta de 19 ani, spre orasul ce avea sa ma gazduiasca -
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
                    In perioada facultatii am facut o pauza de la sport, timp de
                    3 ani, fapta care a dus la o cadere intr-o panta abrupta
                    spre un stil de viata sedentar si cu un nivel scazut de
                    energie.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span
                  className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
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
                    mai placeam. Nu mai voiam sa ma vad gras Ã®n oglinda, nu imi
                    placea sa ma aud gafaind cand urcam cele patru etaje ale
                    blocului sau sa ma incurce burta cÃ¢nd ma incheiam la
                    sireturi.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text43']}>Eu</span>
                  <span>
                    , care proveneam dintr-o viata sportiva neintrerupta.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['SportLife']} ${projectStyles['section-container']} `}
        >
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
            className={` ${styles['max-content6']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['container09']}>
              <img
                alt="Inele Vali Ignat"
                src="/playground_assets/img_9585-1500w.jpg"
                className={styles['image06']}
              />
              <div className={styles['Text-Container2']}>
                <span
                  className={` ${styles['text49']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    Cu un obiectiv bine stabilit am pasit intr-o sala
                    neconventionala in 2015, unde mi-am reinceput activitatea de
                    sportiv, sau cum imi place mie sa zic â
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
                    - si mai tarziu
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
                  className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    A fost greu cand am realizat cat de mult regresasem in trei
                    ani de zile, insa memoria musculara si-a facut treaba si asa
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
                    cu litere mari pe hartie si Ã®n minte, ajungand din ce in ce
                    mai aproape de el.
                  </span>
                </span>
              </div>
            </div>
            <div className={styles['container10']}>
              <span
                className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
              >
                <span>
                  Odata ce obiectivul a fost atins am fixat altul, care la
                  randul sau a fost indeplinit cu
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text61']}>succes</span>
                <span>
                  . In acest mod anii au trecut, adaugand si mai multa
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
                  pentru ceea ce fac si
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text65']}>disciplina</span>
                <span>.</span>
              </span>
            </div>
          </div>
        </div>
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-content7']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['Left']}>
              <div className={styles['container11']}>
                <img
                  alt="La sala cu Vali Ignat"
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
                alt="Spartan - Vali Ignat"
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
                <span>, iar atletii mei imi spun â</span>
                <span className={styles['text73']}>coach</span>
                <span>
                  â. Sunt cel mai fericit pentru ca merg la un job unde devin pe
                  zi ce trece mai puternic, mai intelept, si unde am reusit
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text75']}>sa ma iubesc</span>
                <span> pentru tot ceea ce fac.</span>
              </span>
            </div>
            <div className={styles['Right']}>
              <div className={styles['container12']}>
                <img
                  alt="Yoga cu Vali Ignat"
                  src="/playground_assets/img_4100-1500w.jpg"
                  className={styles['image09']}
                />
                <h1 className={` ${styles['text77']} ${projectStyles['h2']} `}>
                  Energic
                </h1>
              </div>
              <img
                alt="La mare cu Vali Ignat"
                src="/playground_assets/img_2868-1500h.jpg"
                className={styles['image10']}
              />
              <span className={` ${styles['text78']} ${projectStyles['h2']} `}>
                creativ
              </span>
              <div className={styles['container13']}>
                <img
                  alt="Fandari cu Vali Ignat"
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
        <div
          className={` ${styles['container14']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-content8']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['Text-Container3']}>
              <span
                className={` ${styles['text80']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
              >
                <span>
                  Realizez cÄ job-ul reprezinta
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text82']}>modul meu de a trai</span>
                <span>
                  {' '}
                  si de a-mi rescrie povestea spre obiectivele importante ale
                  vietii. Apreciez fiecare moment care mi se intampla si ma
                  bucur de fiecare clipa incercand sa acumulez cate ceva nou si
                  util din mediul âcu care ma inconjorâ
                </span>
              </span>
              <Link to="/povesti-de-succes" className={styles['navlink']}>
                <BtnPrimary
                  cta_text="Afla mai mult"
                  rootClassName="rootClassName10"
                  className={styles['component6']}
                ></BtnPrimary>
              </Link>
            </div>
            <div className={styles['Image-Container1']}>
              <img
                alt="La mare cu Vali Ignat"
                src="/playground_assets/img_1871-1500h.jpg"
                className={styles['image12']}
              />
              <img
                alt="Tractiuni cu Vali Ignat"
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

export default Despre
