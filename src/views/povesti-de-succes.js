import React from 'react'

import { Helmet } from 'react-helmet'

import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import ContactFormModal from '../components/contact-form-modal'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'
import BtnPrimary from '../components/btn-primary'
import ResultsCard from '../components/results-card'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './povesti-de-succes.module.css'

const PovestiDeSucces = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Povesti de succes - Coach Vali Ignat</title>
        <meta
          property="og:title"
          content="Povesti de succes - Coach Vali Ignat"
        />
        <meta
          property="og:description"
          content="Hello there, how are you?\nWe can put here whatever message we want!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/3a2f6895-526e-403a-884d-eca828114341?org_if_sml=1"
        />
      </Helmet>
      <LoginModal rootClassName="rootClassName5"></LoginModal>
      <RegisterModal rootClassName="rootClassName5"></RegisterModal>
      <ContactFormModal rootClassName="rootClassName2"></ContactFormModal>
      <Navbar rootClassName="rootClassName3"></Navbar>
      <MobileMenu rootClassName="rootClassName3"></MobileMenu>
      <main className={styles['Main']}>
        <section
          className={` ${styles['Hero']} ${projectStyles['hero-container']} `}
        >
          <div
            className={` ${styles['max-content']} ${projectStyles['max-content-container']} `}
          >
            <div
              className={` ${styles['FadeInLeftRich']} ${projectStyles['animation-fade-in-left']} `}
            >
              <div className={styles['horizontal-line']}></div>
              <div className={styles['Container1']}>
                <span
                  className={` ${styles['text']} ${projectStyles['heading-1']} `}
                >
                  <span>
                    POVESTI DE
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className={styles['text002']}>
                    SUCCES
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>CU OAMENI PASIONATI</span>
                </span>
                <div
                  data-action="showContactFormModal"
                  className={styles['container2']}
                >
                  <BtnPrimary
                    cta_text="Contacteaza-ma"
                    rootClassName="rootClassName31"
                  ></BtnPrimary>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className={` ${styles['Stories']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-content1']} ${projectStyles['max-content-container']} `}
          >
            <h1
              className={` ${styles['text004']} ${projectStyles['heading-1']} `}
            >
              PERSONALIZARE. INCREDERE. REZULTATE.
            </h1>
            <div className={styles['cards-container']}>
              <div className={styles['Bogdan']}>
                <div className={styles['Text-Container']}>
                  <span
                    className={` ${styles['text005']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    <span className={styles['text006']}>
                      - Bogdan -
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      Lucrez cu Vali de 3 ani. Aveam o reticenta legata de sport
                      si mai ales de sali de sport dupa mai multe experiente
                      esuate.. asa ca nu m-am lasat convins pana cand prietena
                      mea (care lucra cu Vali de ceva vreme) mi-a facut cadou un
                      abonament la el. Am zis ca ii dau o sansa timp de o luna.
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
                      De atunci s-au facut 3 ani fara oprire. Am descoperit un
                      altfel de sport, un stil de viata. Am devenit mai atent cu
                      alimentatia si incerc sa ma tin de antrenamente. Ca sa il
                      descriu pe Vali as zice ca stie sa obtina ce isi propune
                      si cu toate ca de multe ori nu aveam chef de antrenamente,
                      decat sa ma mai âcicaleascaâ am preferat sa le fac si nu
                      am regretat niciodata! Keep up with the good work Coach!
                    </span>
                  </span>
                </div>
                <div className={styles['Image']}>
                  <img
                    alt="slide-1"
                    src="/playground_assets/bogdan-600w.jpeg"
                    className={styles['image01']}
                  />
                </div>
              </div>
              <div className={styles['Lorena']}>
                <div className={styles['Image02']}>
                  <img
                    alt="slide-1"
                    src="/playground_assets/lorena%20b_a-600w.jpg"
                    className={styles['image03']}
                  />
                </div>
                <div className={styles['Text-Container1']}>
                  <span
                    className={` ${styles['text013']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    <span className={styles['text014']}>- Lorena -</span>
                    <br></br>
                    <span>
                      Hmm.. este asa de indepartat inceputul povestii mele cu
                      Coach, incat trebuie sa fac niste eforturi pentru a-mi
                      aminti:D. M-am decis in urma cu vreo 4-5 ani parca... sa
                      nu mai ignor faptul ca am 20 si ceva de ani si obosesc
                      cand urc 10 scari, asa ca printr-o cunostinta comuna am
                      ajuns sa il cunosc pe Vali.
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
                      De atunci lucram impreuna fara pauza:D indiferent de
                      locatie (diferite Sali de-a lungul timpului, apoi in
                      online de cand cu pandemia). Ma intreaba multa lume de ce
                      continui sa lucrez cu antrenor personal avand in vedere ca
                      de atata timp deja stiu sa execut corect exercitiile. E
                      simplu! Daca nu as face cu Vali, nu as face deloc:D. Ma
                      motiveaza si ma face sa fac sport de 4 ani constant. Cum?
                      Simplu! Am sa raspund la 2 intrebari deodata: cum ma
                      motiveaza si ce imi place la el: profesionalismul,
                      implicarea si rigurozitatea.
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
                      Povestim si despre alte lucruri in afara de sport,
                      inaintea antrenamentelor, dupa antrenamente, in timpul
                      liber, dar NICIODATA in timpul antrenamentelor (in ciuda
                      incercarilor mele de a mai fura un minut-2 :D). Pare
                      cateodata ca nu este atent la tine.. Ai sa aflii in scurt
                      timp ca te inseli (âai pauza 2 minuteâ si in 2 minute pe
                      ceas se aude: âPauza a trecut!â) sau faci 10 repetari si
                      la a 11-a nu mai ai chef si o faci pe jumatate si de
                      undeva din podea, din ceruri, de dupa usa (tu nu il vezi
                      deci automat crezi ca nici el nu te vede) : â AIA NU SE
                      PUNE CA REPETARE!â. Cum l-as descrie pe Coach in 3
                      cuvinte: profesionalist, ambitios si riguros ( acestea
                      fiind atat calitatile cat si defectele lui in functie de
                      cat chef am de antrenament in acea zi:))) totodata un om
                      cald si prietenos.
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>
                      {' '}
                      Antrenamentele sunt variate, astfel incat nu m-am
                      plictisit de ele de 4 ani ( mare lucru) si faptul ca
                      cineva âma trage de urechiâ constant sa nu abandonez
                      sportul este foarte de ajutor.
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles['Tomi']}>
                <div className={styles['Text-Container2']}>
                  <span
                    className={` ${styles['text029']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    <span className={styles['text030']}>
                      - Tomi -
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      Toata viata am facut sport, dar mereu ma accidentam si
                      simteam ca pot imbunatati fizicul si automat performanta,
                      astfel ca m-am gandit sa ma apuc sa merg la sala. Am ales
                      sa incep sa ma antrenez cu Vali in urma unei recomandari
                      de la niste prieteni, dar am continuat sa ma antrenez cu
                      el pentru urmatoarele:
                    </span>
                    <br></br>
                    <span>
                      - omul e un pachet de entuziasm, are pentru toti si toate,
                      deci chiar daca esti la pamant psihic inainte sa incepi
                      antrenamentul, Vali, prin glumele si atitudinea lui, iti
                      da energie sa faci treaba
                    </span>
                    <br></br>
                    <span></span>
                    <span>
                      - Pune suflet in ceea ce face, am simtit ca incearca cu
                      adevarat sa ma cunoasca, sa imi stie limitele la
                      antrenamente, sa imi inteleaga simtul umorului, problemele
                      samd - am simtit ca fiecare atlet primea o experienta
                      proprie, in functie de natura fiecaruia
                    </span>
                    <br></br>
                    <span>
                      - Si-a facut un colectiv fain, clasele lui au fost mereu
                      amuzante si energice, stia sa implice pe toata lumea, fie
                      ca erau pregatiti sau nepregatiti, in forma sau nu
                    </span>
                    <br></br>
                    <span>
                      - M-a ambitionat sa merg mai des la sala si sa fiu mai
                      atent la mancare
                    </span>
                    <br></br>
                    <span></span>
                    <span>
                      - A stat mereu cu gura pe mine si s-a asigurat ca nu
                      chiulesc si ca scot ce-i mai bun din mine
                    </span>
                    <br></br>
                    <span>Mereu o placere, coach.</span>
                  </span>
                </div>
                <div className={styles['Image04']}>
                  <img
                    alt="slide-1"
                    src="/playground_assets/tomi%20b_a%20-%20no%20face%202%20-600w.jpg"
                    className={styles['image05']}
                  />
                </div>
              </div>
              <div className={styles['Simina']}>
                <div className={styles['Image06']}>
                  <img
                    alt="slide-1"
                    src="/playground_assets/simina%20b_a%20-%20spate-1500h.jpg"
                    className={styles['image07']}
                  />
                </div>
                <div className={styles['Text-Container3']}>
                  <span
                    className={` ${styles['text047']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    <span className={styles['text048']}>- Simina -</span>
                    <br></br>
                    <span>
                      Valy este coach-ul meu de 4 ani. Din âcauzaâ lui am
                      strabatut tot Clujul pentru a merge la sala, dupa o viata
                      de sedentarism.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>â</span>
                    <br></br>
                    <span>
                      Cel mai mult apreciez la el ca a crescut constant in toti
                      acesti ani:ca om si ca antrenor. Imi place mult ca e un om
                      cu o inteligenta emotionala dezvoltata si ca e amuzant.
                      Asta a determinat sa devenim si prieteni.
                    </span>
                    <br></br>
                    <span>
                      A avut abilitatea si rabdarea de a-mi explica constant de
                      ce exercitiile se executa corect intr-un anume mod.
                      Explicatiile lui sunt super logice.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>â</span>
                    <br></br>
                    <span>
                      E foarte tare cum acum merg singura la sala, fara rusine,
                      cu incredere in mine ca voi executa corect antrenamentul.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>â</span>
                    <br></br>
                    <span>
                      Imi place mult sentimentul de siguranta pe care il am
                      atunci cand lucrez cu Valy.
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>
                      Am mers la sala pentru a slabi. In timp, mi-am dat seama
                      alaturi de Vali ca sportul inseamna mai mult de atat
                      pentru mine: sportul ma ajuta sa ma simt puternica si este
                      ca o meditatie pentru mine dupa o zi de munca.
                    </span>
                    <br></br>
                    <span>â</span>
                    <br></br>
                    <span>Love it!</span>
                  </span>
                </div>
              </div>
              <div className={styles['Catalina']}>
                <div className={styles['Text-Container4']}>
                  <span
                    className={` ${styles['text062']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    <span className={styles['text063']}>- Catalina -</span>
                    <br></br>
                    <span>
                      In 2019 m-am hotarat sa fac o schimbare legata de ce tip
                      de miscare sa fac. Pana atunci mergeam la clase de Zumba
                      si Pilates si devenise cam monoton, vroiam ceva mai
                      challenging asa ca m-am dus la o sala cu total alt fel de
                      clase. Acolo l-am cunoscut pe Vali, care facea clasele de
                      HIIT. Mergeam si la alte clase cateodata, dar cel mai des
                      la Vali, pentru ca energia si buna lui dispozitie (inca)e
                      molipsitoare!
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>â</span>
                    <br></br>
                    <span>
                      In 2020, dupa ce am tot auzit de la prieteni/prietene ca
                      au apelat la un antrenor personal mi-am zis sa incerc si
                      eu(pentru prima oara), si a urmat: &quot;Vali, ai un loc
                      si pentru mine la Personal Training&quot;. Si m-a primit!
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
                    <span>â</span>
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
                      descurc si singura in sala, si bonus pentru cititori: are
                      si simtul umorului! :D
                    </span>
                    <br></br>
                    <span>
                      Din 2020 pana azi: am devenit mai puternica, am mai multa
                      incredere in mine, sunt mult mai activa si fac asta cu
                      placere, simt ca sunt in cea mai buna forma a mea de pana
                      acum, si-n plus sunt mai bogata ca l-am cunoscut pe Vali
                      si pe colegii de echipa.
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>Multumesc inca o data, Vali!</span>
                  </span>
                </div>
                <div className={styles['Image08']}>
                  <img
                    alt="slide-1"
                    src="/playground_assets/catalina%20b_a-1500h.jpg"
                    className={styles['image09']}
                  />
                </div>
              </div>
              <div className={styles['Mihaela-fara-BA']}>
                <div className={styles['Image10']}>
                  <img
                    alt="slide-1"
                    src="/playground_assets/34249831-1500w.jpg"
                    className={styles['image11']}
                  />
                </div>
                <div className={styles['Text-Container5']}>
                  <span
                    className={` ${styles['text074']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    <span className={styles['text075']}>- Mihaela -</span>
                    <br></br>
                    <span>
                      Am Ã®nceput sa merg la sala cu Vali antrenor dintr-o
                      Ã®ntÃ¢mplare, Ã®mpreuna cu o prietena. Am pornit cu mult
                      scepticism Èi aproximativ 7 kg âin plus â rÄmase de la
                      ultima sarcina. Eu fÄceam sport constant urmÃ¢nd tot felul
                      de aplicaÈii si programe Ã®nsÄ rezultatele erau mediocre si
                      de aici si neÃ®ncrederea cu care am Ã®nceput colaborarea cu
                      Vali. Primele ÈedinÈe mi s-au pÄrut â neimpresionante â
                      pentru ca eu Ètiam mai bine, aveam o vasta experienÈa
                      acumulata dupÄ ani de sport acasÄ:).
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
                      DupÄ o luna am Ã®nceput sa vÄd deja rezultate concrete si
                      sa vÄd sensul in spatele exerciÈiilor gÃ¢ndite de Vali.
                      ExplicaÈiile care Ã®nsoteau exercitiile aveau sens, seriile
                      alese erau gÃ¢ndite si integrate intr- un plan conceput
                      special pentru corpul meu. AÈa am cÄpÄtat Ã®ncredere in
                      Vali si in programul pe care Ã®l urmam. MotivaÈia a devenit
                      mai puternica si a ajutat mult si ca Vali ma Ã®mpingea de
                      la spate cÃ¢nd Ã®ncercam sa Ã®ncetinesc ritmul. Pe scurt, 5
                      luni , 7 kg slÄbite frumos, constant si schimbÄri vizibile
                      pentru mine si cei din jur. In consecinÈÄ au urmat
                      colaborarea cu Vali soÈul si fiica mea de 13 ani, fiecare
                      cu targeturi diferite Ã®nsÄ ambii cu rezultate clare. Fiica
                      mea urmeazÄ in prezent un program acasÄ cu exerciÈii
                      Ã®nregistrate in prealabil , scopul fiind sa creascÄ
                      frumos, cu o postura corecta Èi sa Ã®Èi Ã®ntÄreascÄ
                      musculatura.
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
                      Vali poate gÃ¢ndi programe pentru toatÄ familia, la noi a
                      funcÈionat mai bine decÃ¢t orice altceva am Ã®ncercat !
                    </span>
                    <br></br>
                    <span></span>
                  </span>
                </div>
              </div>
              <div className={styles['Romana-fara-BA']}>
                <div className={styles['Text-Container6']}>
                  <span
                    className={` ${styles['text086']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    <span className={styles['text087']}>- Romana -</span>
                    <br></br>
                    <span>
                      Cum a inceput povestea noastra? As putea spune ca nimic nu
                      e intamplatorâ¦:). Vali mi-a fost recomandat ca fiind âcel
                      care va reusi sa puna capatâ durerilor de care sufeream,
                      pricinuite de o hernie de disc. A trecut aproape un an de
                      cand ne antrenam, ma simt mai bine ca niciodata,
                      puternica, increzatoare si vesela:). O eticheta pentru
                      Vali: â3H coach: HEALTHFUL, HAPPY, HEROâ.
                    </span>
                    <br></br>
                    <span></span>
                  </span>
                </div>
                <div className={styles['Image12']}>
                  <img
                    alt="slide-1"
                    src="/playground_assets/34249831-1500w.jpg"
                    className={styles['image13']}
                  />
                </div>
              </div>
              <div className={styles['Andra-fara-BA']}>
                <div className={styles['Image14']}>
                  <img
                    alt="slide-1"
                    src="/playground_assets/34249831-1500w.jpg"
                    className={styles['image15']}
                  />
                </div>
                <div className={styles['Text-Container7']}>
                  <span
                    className={` ${styles['text091']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
                  >
                    <span className={styles['text092']}>- Andra</span>
                    <span className={styles['text093']}> -</span>
                    <br></br>
                    <span>
                      Ãn cele cÃ¢teva luni de cÃ¢nd lucrez cu Vali pot spune cÄ am
                      gÄsit mai mult decÃ¢t un clasic âpersonal trainerâ.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>Ã</span>
                    <span>
                      n primul rÃ¢nd l-am ales pe Vali datoritÄ modului Ã®n care
                      abordeazÄ aÈa zisele probleme cu care ne confruntÄm.
                      SituaÈia Ã®n care mÄ aflu m-a obligat sÄ aleg un antrenor
                      care sa Ã®mi Ã®nÈeleagÄ problema Èi care sÄ aibÄ
                      informaÈiile necesare sÄ mÄ ajute. AÈa am ajuns la Vali,
                      care este mai mult decÃ¢t cÄutam. Am gÄsit un om care
                      Ã®nÈelege cÄ avem Èi zile mai proaste, dispus sÄ Ã®Èi
                      adapteze antrenamentul, sÄ Ã®Èi ofere o vorba bunÄ Èi o
                      Ã®ncurajare.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>P</span>
                    <span>
                      ot spune cÄ merg cu drag la salÄ Èi asta datoritÄ faptului
                      cÄ am gÄsit mai mult decÃ¢t un antrenor, am gÄsit un
                      prieten, un om care Ã®Èi face ziua mai bunÄ prin energia pe
                      care o emana, care te face sÄ iubeÈti sportul. DacÄ ar
                      trebui sÄ Ã®l descriu Ã®n cateva cuvinte, aÈ alege:
                      motivaÈie, determinare, Ã®nÈelegere.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>M</span>
                    <span>
                      ultumesc Vali Èi sper sÄ avem o colaborare cat mai lungÄ!
                    </span>
                    <br></br>
                    <span></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-content2']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['cards-container1']}>
              <ResultsCard
                name="Costin"
                image_src="/playground_assets/costin-300h.png"
                rootClassName="rootClassName"
              ></ResultsCard>
              <ResultsCard
                name="Rares"
                text="Daca vrei un antrenor sufletist, glumet, serios cand trebuie, care sa te motiveze sa te autodepasesti, care iti insufla dragoste pentru miscare, merita sa ii dai o sansa lui Vali. Modeleaza antrenamentele in functie de eventualele tale probleme, spre exemplu pe mine antrenamentele cu el m-au scapat de durerile de spate care ma imobilizau uneori. Atentie marita, omu' are ochi de vultur, te vede si din vestiar daca stai, si inca ceva, a fost atent la matematica, stie sa numere bine, deci grija mare cu furatu' la repetari."
                image_src="/playground_assets/rares-300h.png"
                rootClassName="rootClassName1"
              ></ResultsCard>
              <ResultsCard
                name="Andra"
                text='Datorita lui Vali si datorita profesionalismului si stilului exemplar de antrenament, am descoperit o noua pasiune a mea "SPORTUL SI STILUL DE VIATA SANATOS". Iti multumesc pentru increderea si motivarea pe care mi-o inspiri la fiecare antrenament. "POWER VALI"!'
                rootClassName="rootClassName2"
              ></ResultsCard>
              <ResultsCard
                name="Simina"
                text="Pe langa faptul ca este un profesionist, Vali este si un om foarte fain! Daca simti ca nu vei ajunge vreodata sa mergi cu drag la sala e pentru ca nu l-ai cunoscut pe Vali! Profesionalism (antrenor) + multa transpiratie (client) + good vibes = antrenamente cu Vali"
                image_src="/playground_assets/simina-300h.png"
                rootClassName="rootClassName3"
              ></ResultsCard>
              <ResultsCard
                name="Dragos"
                text="Cand am intrat prima data la Gym veneam dupa o accidentare la genunchi, aveam cateva kg in plus. Pana atunci mai mergeam la sala dar renuntam dupa 1-2 luni. Totul s-a schimbat de cand ma antrenez cu Vali! Antrenamente care iti fac placere, ai langa tine un motivator iar de 2 ani nu am renuntat! Sa nu mai spun ca e extrem de adaptabil la cerintele mele - fiind plecat de multe ori. Super om, super antrenor!"
                image_src="/playground_assets/dragos-300h.png"
                rootClassName="rootClassName6"
              ></ResultsCard>
              <ResultsCard
                name="Andrei"
                text="Un antrenor foarte dedicat, profesionist, mereu atent si adaptat la cerintele clientului. Felul prin care iti transmite energia si pasiunea pentru sport il face pe Vali sa se detaseze cu mult fata de restul. Un super om, un super prieten."
                image_src="/playground_assets/andrei-300h.png"
                rootClassName="rootClassName7"
              ></ResultsCard>
              <ResultsCard
                name="Cristina"
                text="Dupa multi ani de cautari si incercari l-am gasit pe Vali, singurul antrenor care a reusit sa ma faca sa ma tin de sport... si uite asa ne antrenam de aproape 2 ani. Iti multumesc din suflet si.... never give up, it is a promise!"
                image_src="/playground_assets/cristina-300h.png"
                rootClassName="rootClassName8"
              ></ResultsCard>
              <ResultsCard
                name="Oana"
                text="Un antrenor extrem de implicat, pe care il simti alaturi la fiecare pas. Transmite pasiunea pentru sport si te motiveaza din nou si din nou si din nou... Recomand fara emotii!"
                image_src="/playground_assets/oana1-300h.png"
                rootClassName="rootClassName4"
              ></ResultsCard>
              <ResultsCard
                name="Mihaela"
                text="Foarte implicat, am obtinut rezultate in timp scurt"
                image_src="/playground_assets/mihaela-300h.png"
                rootClassName="rootClassName5"
              ></ResultsCard>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="rootClassName3"></Footer>
    </div>
  )
}

export default PovestiDeSucces
