import React from 'react'

import { Helmet } from 'react-helmet'

import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import ContactFormModal from '../components/contact-form-modal'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'
import BtnPrimary from '../components/btn-primary'
import TestimonialCard from '../components/testimonial-card'
import TestimonialCardReverse from '../components/testimonial-card-reverse'
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
                  <span className={styles['text2']}>
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
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-content1']} ${projectStyles['max-content-container']} `}
          >
            <h1
              className={` ${styles['text4']} ${projectStyles['heading-1']} `}
            >
              PERSONALIZARE. INCREDERE. REZULTATE.
            </h1>
            <div className={styles['cards-container']}>
              <TestimonialCard
                image_src="/playground_assets/0-500w.jpg"
                rootClassName="rootClassName"
              ></TestimonialCard>
              <TestimonialCardReverse
                image_src="/playground_assets/back-romina-600w.jpg"
                rootClassName="rootClassName"
              ></TestimonialCardReverse>
              <TestimonialCard
                image_src="/playground_assets/colaj-600w.jpeg"
                rootClassName="rootClassName1"
              ></TestimonialCard>
              <TestimonialCardReverse
                image_src="/playground_assets/1-600w.jpg"
                rootClassName="rootClassName1"
              ></TestimonialCardReverse>
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
                text="Cand am intrat prima data la Gym\nveneam dupa o accidentare la genunchi,\naveam cateva kg in plus. Pana atunci mai\nmergeam la sala dar renuntam dupa 1-2\nluni. Totul s-a schimbat de cand ma\nantrenez cu Vali! Antrenamente care iti\nfac placere, ai langa tine un motivator iar\nde 2 ani nu am renuntat! Sa nu mai spun\nca e extrem de adaptabil la cerintele mele\n- fiind plecat de multe ori. Super om,\nsuper antrenor!\n"
                image_src="/playground_assets/dragos-300h.png"
                rootClassName="rootClassName6"
              ></ResultsCard>
              <ResultsCard
                name="Andrei"
                text="Un antrenor foarte dedicat, profesionist,\nmereu atent si adaptat la cerintele\nclientului. Felul prin care iti transmite\nenergia si pasiunea pentru sport il face pe\nVali sa se detaseze cu mult fata de restul.\nUn super om, un super prieten."
                image_src="/playground_assets/andrei-300h.png"
                rootClassName="rootClassName7"
              ></ResultsCard>
              <ResultsCard
                name="Cristina"
                text="Dupa multi ani de cautari si incercari l-am\ngasit pe Vali, singurul antrenor care a\nreusit sa ma faca sa ma tin de sport... si\nuite asa ne antrenam de aproape 2 ani. Iti\nmultumesc din suflet si.... never give up, it\nis a promise!\n"
                image_src="/playground_assets/cristina-300h.png"
                rootClassName="rootClassName8"
              ></ResultsCard>
              <ResultsCard
                name="Oana"
                text="Un antrenor extrem de implicat, pe care il\nsimti alaturi la fiecare pas. Transmite\npasiunea pentru sport si te motiveaza din\nnou si din nou si din nou... Recomand fara\nemotii!"
                image_src="/playground_assets/oana-300h.png"
                rootClassName="rootClassName4"
              ></ResultsCard>
              <ResultsCard
                name="Mihaela"
                text="Foarte implicat, am obtinut rezultate in\ntimp scurt"
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
