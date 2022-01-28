import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import LoginModal from '../components/login-modal'
import RegisterModal from '../components/register-modal'
import MobileMenu from '../components/mobile-menu'
import BtnSecondary from '../components/btn-secondary'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './blog-despre-somn.module.css'

const BlogDespreSomn = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Blog - Despre Somn - Valentin Ignat PT</title>
        <meta
          property="og:title"
          content="Blog - Despre Somn - Valentin Ignat PT"
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
      <Navbar rootClassName="rootClassName7"></Navbar>
      <LoginModal rootClassName="rootClassName7"></LoginModal>
      <RegisterModal rootClassName="rootClassName7"></RegisterModal>
      <MobileMenu rootClassName="rootClassName6"></MobileMenu>
      <main className={styles['Main']}>
        <section
          className={` ${styles['Hero']} ${projectStyles['hero-container']} `}
        >
          <div
            className={` ${styles['max-content']} ${projectStyles['max-content-container']} `}
          >
            <div
              className={` ${styles['Container1']} ${projectStyles['animation-fade-in-left']} `}
            >
              <div className={styles['horizontal-line']}></div>
              <span
                className={` ${projectStyles['heading-1']} ${styles['text']} `}
              >
                despre somn
              </span>
            </div>
            <BtnSecondary
              cta_text="Inapoi la lista articole..."
              rootClassName="rootClassName14"
            ></BtnSecondary>
          </div>
        </section>
        <div
          className={` ${styles['Articol']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['container2']} ${projectStyles['max-content-container']} `}
          >
            <span>
              <span>
                Astazi vei afla ce se intampla cu corpul si creierul tau in
                timpul somnului NREM(adica somnul usor si profund - vezi post-ul
                anterior).
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Cel mai bine o sa intelegi ce se intampla in timpul somnului
                NREM printr-un exemplu:
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Imagineaza-ti ca o regiune a creierului tau, numita hipocamp,
                este asemanatoare unui stick USB, cu capacitate limitata, pe
                care vrei sa incarci date si sa le transferi mai tarziu intr-o
                unitate PC, pe termen lung(scoarta cerebrala).Daca astazi inveti
                informatii noi, la noapte, in timpul acestei etape, tot ce ai
                asimilat ca si noua amintire, in hipocamp sau memoria pe termen
                scurt se va transfera pe PC iar maine vei elibera hipocamp-ul pt
                noi amintiri.
              </span>
              <br></br>
              <span>Simplu, nu?</span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Mai sus spuneam despre hipocamp ca are o capacitate limitata,
                asta inseamna ca in timpul etapei de somn NREM profund, creierul
                tau va face transferul noilor informatii relevante pentru tine
                si va elimina informatiile inutile.De aceea nu o sa retii pt
                mult timp nr masinii care te-a preluat sapt trecuta, ora
                zborului cu care ai fost in Italia acum 3 luni sau chiar durerea
                unei pierderi, deoarece creierul tau va vrea sa inlocuiasca
                vechile amintiri mai putin importante cu altele noi si nu vrea
                sa sufere ci mai degraba sa uite de lucrurile inutile sau
                dureroase din trecut.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Este clar ca daca te privezi constient de somn NREM(iti spuneam
                in post-ul trecut ca acesta este in cantitate mai mare in prima
                parte a noptii) este echivalent cu retentia mica de noi
                informatii, in procesul de invatare.Mai simplu, daca iti pierzi
                noptile pana la orele 1, 2, 3, afla ca nu ai cum sa inveti
                eficient lucruri noi(exercitii, materii, limbi straine, limbaje
                de programare etc).
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Sper tare mult ca pana la finalul acestei serii &quot;Despre
                somn&quot;, cei mai inflacarati adepti ai somnului putin sa isi
                reformeze convingerileð´
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Daca consideri valoroasa informatia poti sa o salvezi si sa o
                arati si apropiatilor tai, ca sa va mentineti sanatosið§ 
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>Un somn suficient de lung va dorescð¤</span>
              <br></br>
              <span></span>
              <br></br>
              <span>&quot;Why we sleep - Mattew Walker&quot;</span>
            </span>
          </div>
        </div>
      </main>
      <Footer rootClassName="rootClassName6"></Footer>
    </div>
  )
}

export default BlogDespreSomn
