import React from 'react'

import { Helmet } from 'react-helmet'

import MobileMenu from '../components/mobile-menu'
import SlideInDownNavbar1 from '../components/slide-in-down-navbar1'
import CtaBtnRounded from '../components/cta-btn-rounded'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './hiit.module.css'

const Hiit = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Hiit - Valentin Ignat PT</title>
        <meta property="og:title" content="Hiit - Valentin Ignat PT" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/27a3c67c-61d9-403f-afbd-260f79571dcb?org_if_sml=1"
        />
      </Helmet>
      <MobileMenu></MobileMenu>
      <SlideInDownNavbar1 rootClassName="rootClassName4"></SlideInDownNavbar1>
      <main className={styles['Main']}>
        <section className={styles['Hero']}>
          <div
            className={` ${styles['max-content']} ${projectStyles['max-content']} `}
          >
            <div
              className={` ${styles['Container01']} ${projectStyles['fade-in-left']} `}
            >
              <div className={styles['horizontal-line']}></div>
              <div className={styles['Container02']}>
                <h1
                  className={` ${styles['text']} ${projectStyles['heading-1']} `}
                >
                  <span>vrei o schimbare?</span>
                </h1>
                <span
                  className={` ${styles['text02']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  Esti capabil sa pierzi minim 8 kg in 2 luni, corect si
                  sanatos, doar cu sport si alimentatie echilibrata, in deficit
                  caloric sensibil. Cum ar suna pentru tine asta?
                </span>
                <CtaBtnRounded
                  cta_text="cumpara acum"
                  rootClassName="rootClassName25"
                ></CtaBtnRounded>
              </div>
            </div>
          </div>
        </section>
        <section className={styles['Description']}>
          <div
            className={` ${styles['max-content1']} ${projectStyles['max-content']} `}
          >
            <h1
              className={` ${styles['text03']} ${projectStyles['heading-1']} `}
            >
              primul meu program online
            </h1>
            <div className={styles['Intro']}>
              <div className={styles['Image-Container']}>
                <div className={styles['container03']}>
                  <span className={styles['text04']}>150</span>
                  <span className={styles['text05']}>+</span>
                </div>
                <img
                  src="/playground_assets/img_9744-1500w.jpg"
                  loading="eager"
                  className={styles['image']}
                />
              </div>
              <div className={styles['Text-Container']}>
                <span
                  className={` ${styles['text06']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    Dupa aproximativ 7 ani de zile in care am studiat diverse
                    metode de antrenament si am ajutat in sala, live, peste
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text08']}>150 de persoane</span>
                  <span>
                    , m-am hotarat sa imi scriu primul meu program de HIIT, pe
                    care il poti accesa de oriunde, fara accesorii.
                  </span>
                </span>
                <span
                  className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  Gandeste-te la HIIT mai degraba ca la un âconditioning
                  trainingâ si nu la un âcardio trainingâ, pentru ca te vei
                  antrena ca un atlet si vei arata intocmai.
                </span>
              </div>
            </div>
            <div className={styles['Picture']}>
              <img
                alt="image"
                src="/playground_assets/img_9822-1500h.jpg"
                loading="eager"
                className={styles['image01']}
              />
              <div className={styles['container04']}>
                <span className={styles['text11']}>20</span>
                <span className={styles['text12']}>&apos;</span>
              </div>
            </div>
            <div className={styles['Features']}>
              <div className={styles['Text-Container1']}>
                <span
                  className={` ${styles['text13']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    HIIT reprezinta prescurtarea de la
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text15']}>
                    HIGH INTENSITY INTERVAL TRAINING
                  </span>
                  <span>
                    {' '}
                    si a fost descoperit cu cateva decenii in urma in Suedia, de
                    cativa antrenori de atletism.
                  </span>
                </span>
                <span
                  className={` ${styles['text17']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    Practic, in loc sa alergi 45-60â pe banda, unde inteleg cat
                    de plictisitor poate fi, te vei antrena intr-un sistem de
                    alternare a intervalelor de intensitate crescuta cu
                    intervalele de intensitate scazuta,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text19']}>timp de 20-25â.</span>
                </span>
              </div>
              <div className={styles['List-Container']}>
                <div className={styles['list-item']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span
                    className={` ${styles['text20']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    intervale de timp
                  </span>
                </div>
                <div className={styles['list-item1']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span
                    className={` ${styles['text21']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    rapid
                  </span>
                </div>
                <div className={styles['list-item2']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span
                    className={` ${styles['text22']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    eficient
                  </span>
                </div>
                <div className={styles['list-item3']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span
                    className={` ${styles['text23']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    intens
                  </span>
                </div>
                <div className={styles['list-item4']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span
                    className={` ${styles['text24']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    periodizat
                  </span>
                </div>
                <div className={styles['list-item5']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span
                    className={` ${styles['text25']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    fara echipament
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['UseCase']}>
              <img
                alt="image"
                src="/playground_assets/img_9754-1500w.jpg"
                className={styles['image02']}
              />
              <div className={styles['container05']}>
                <span
                  className={` ${styles['text26']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    De curand am povestit cu un amic - care de aproximativ 3
                    luni s-a apucat de antrenamente in sistem HIIT, in confortul
                    casei sale, dupa un
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text28']}>program periodizat</span>
                  <span> si nu unul aleatoriu de pe internet.</span>
                </span>
                <span
                  className={` ${styles['text30']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    El era obisnuit sa faca miscare, clasic, sets &amp; reps,
                    insa i s-a parut ca nu i se mai potriveste acel stil, mai
                    ales ca acum il obseda si gandul ca vrea sa mai slabeasca 4
                    kg, iar alergatul pentru el nu era o optiune. Mentionez ca
                    este si gurmand si ii este dificil sa se abtina de la unele
                    placeri, astfel sacrificand vechiul lui stil de antrenamente
                    in favoarea altuia nou. S-a aratat super incantat de
                    antrenamentele de HIIT, pentru ca a intalnit in program
                    toate
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text32']}>
                    miscarile pe care el le cunostea
                  </span>
                  <span>
                    , insa ceva se modificase: totul era organizat pe intervale
                    de lucru si intervale de pauza.
                  </span>
                </span>
              </div>
            </div>
            <div className={styles['Benefits']}>
              <h1
                className={` ${styles['text34']} ${projectStyles['heading-1']} `}
              >
                beneficii
              </h1>
              <div className={styles['Container06']}>
                <div className={styles['container07']}>
                  <img
                    alt="image"
                    src="/playground_assets/home_1-800w.png"
                    className={styles['image03']}
                  />
                  <span
                    className={` ${styles['text35']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    Oriunde
                  </span>
                </div>
                <div className={styles['separator']}></div>
                <div className={styles['container08']}>
                  <img
                    alt="image"
                    src="/playground_assets/efieicnt-1500h.png"
                    className={styles['image04']}
                  />
                  <span
                    className={` ${styles['text36']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    Sanatos
                  </span>
                </div>
                <div className={styles['separator1']}></div>
                <span
                  className={` ${projectStyles['content-Bold']} ${projectStyles['circle-try']} `}
                >
                  Incearca
                </span>
                <div className={styles['separator2']}></div>
                <div className={styles['container09']}>
                  <img
                    alt="image"
                    src="/playground_assets/timp-1500h.png"
                    className={styles['image05']}
                  />
                  <span
                    className={` ${styles['text37']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    Rapid
                  </span>
                </div>
                <div className={styles['separator3']}></div>
                <div className={styles['container10']}>
                  <img
                    alt="image"
                    src="/playground_assets/eficient-800w.png"
                    className={styles['image06']}
                  />
                  <span
                    className={` ${styles['text38']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    Eficacitate
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['BenefitsExplained']}>
              <div className={styles['Benefit']}>
                <img
                  alt="image"
                  src="/playground_assets/rezultate-1500h.png"
                  className={styles['image07']}
                />
                <span
                  className={` ${styles['text39']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    Vei reusi sa
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text41']}>slabesti</span>
                  <span>
                    , sa adaugi
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text43']}>masa musculara</span>
                  <span>
                    {' '}
                    sau sa te mentii la fel de
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text45']}>
                    fit
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    ca si pana acum, bineinteles alaturi de o alimentatie
                    echilibrata, cunoscandu-ti aportul tau caloric zilnic
                    (Corpul tau arde zilnic 2000 kcal cu tot cu antrenament.
                    Vrei sa te mentii, aduci in corp, prin alimentatie, 2000
                    kcal, vrei sa slabesti â 1700-1800 kcal, vrei sa adaugi masa
                    musculara â 2200-2400 kcal - Acesta este doar un exemplu de
                    alimentatie pe termen scurt si mediu).
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
              <div className={styles['Benefit1']}>
                <img
                  alt="image"
                  src="/playground_assets/efieicnt-1500h.png"
                  className={styles['Image08']}
                />
                <span
                  className={` ${styles['text48']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span className={styles['text49']}>Consum caloric mare</span>
                  <span>
                    . Un studiu realizat pe persoane obeze din 2001, arata ca,
                    fara sa modifice alimentatia, obezii care au facut HIIT
                    intr-un program de 8 saptamani au redus 2% din grasime fata
                    de cei care au ales programe de anduranta.Un alt studiu, al
                    facultatii de medicina Baylor, din 1996, demonstreaza cum in
                    24 de ore, atletii care s-au antrenat in sistem HIIT pe o
                    bicicleta indoor au ars mai multe calorii decat ciclistii
                    care au pedalat la un ritm constant, moderat aceeasi durata
                    de timp. Un alt studiu al universitatii Tennessee ne
                    dovedeste ca adeptii HIIT-ului ard in medie cu 100 kcal mai
                    multe, intr-un ciclu de 24 de ore.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
              <div className={styles['Benefit2']}>
                <img
                  alt="image"
                  src="/playground_assets/timp-1500h.png"
                  className={styles['image09']}
                />
                <span
                  className={` ${styles['text52']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    O
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text54']}>
                    diversificare
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    in antrenamente. Pe langa antrenamentele de forta,
                    antrenamentul de HIIT poate fi privit ca ziua de
                    âconditionare fizicaâ a saptamanii. Gandeste-te ca in loc sa
                    fii blocat 45-60 min pe o banda de alergare sau pe un rower,
                    ai putea sa ai parte de mai multa varietate, mai putina
                    monotonie, intr-un antrenament HIIT care intr-adevar, poate
                    fi istovitor, dar va fi scurt, 20-25 min si super
                    challenging.
                  </span>
                </span>
              </div>
              <div className={styles['Benefit3']}>
                <img
                  alt="image"
                  src="/playground_assets/locatie-1500h.png"
                  className={styles['Image10']}
                />
                <span
                  className={` ${styles['text56']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  <span>
                    Poti sa te antrenezi
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text58']}>oriunde</span>
                  <span>
                    , fara niciun obiect aditional, cu un singur obiect, cu
                    miscari ale corpului liber, cu aparate din sala, cu o coarda
                    sau cu benzi elastice ori virtual, in clase online, cu
                    antrenori implicati si care stiu ce inseamna HIIT.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
            <div className={styles['MoreExplanations']}>
              <div className={styles['HeadingContainer']}>
                <h1
                  className={` ${styles['text60']} ${projectStyles['heading-1']} `}
                >
                  ce contine hiit?
                </h1>
                <span
                  className={` ${styles['text61']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                >
                  In primul meu program de HIIT, ma adresez si incepatorilor,
                  unde am inclus exercitii de baza conform tiparelor de miscare
                  ca sa va ajut sa activati corect si in siguranta sistemul
                  muscular.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className={styles['Container11']}>
                <div className={styles['Timeline']}>
                  <div className={styles['Item']}>
                    <div className={styles['container12']}>
                      <div className={styles['container13']}>
                        <div className={styles['Line']}></div>
                        <div className={styles['Bullet']}></div>
                        <div className={styles['Line1']}></div>
                      </div>
                    </div>
                    <span
                      className={` ${styles['Text62']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                    >
                      <span>
                        Am creat o
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className={styles['text64']}>
                        periodizare
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        cu o durata de 8 saptamani in care te antrenezi de 3
                        ori/saptamana. Am inceput totul cu intervale de lucru
                        1:2 si pe parcursul celor 8 saptamani am evoluat la
                        intervale de lucru 2:1.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                  </div>
                  <div className={styles['Item1']}>
                    <div className={styles['container14']}>
                      <div className={styles['container15']}>
                        <div className={styles['Bullet1']}></div>
                        <div className={styles['Line2']}></div>
                      </div>
                    </div>
                    <span
                      className={` ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} ${styles['Text67']} `}
                    >
                      <span>
                        La finalul programului vei simti cum sistemul tau
                        cardiovascular este mult imbunatatit. Practic vei fi mai
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className={styles['text69']}>
                        rezistent
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        fizic si psihic, vei putea face fata la tot ce se
                        intampla in jurul tau. O sa te uiti in oglinda si vei
                        observa cum apar forme mai definite ale sistemului tau
                        muscular.
                      </span>
                    </span>
                  </div>
                  <div className={styles['Item2']}>
                    <div className={styles['Container16']}>
                      <div className={styles['container17']}>
                        <div className={styles['Bullet2']}></div>
                        <div className={styles['Line3']}></div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className={styles['icon12']}
                        >
                          <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                        </svg>
                      </div>
                    </div>
                    <span
                      className={` ${styles['Text71']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                    >
                      <span>
                        Eu voi fi alaturi de tine pe parcursul celor 8
                        saptamani, la fiecare antrenament si il vom executa
                        impreuna. Pe ecran ma vei vedea tot timpul pe mine,
                        cronometrul si muzica.
                      </span>
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/playground_assets/image00002-1500w.png"
                  loading="lazy"
                  className={styles['image11']}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Hiit
