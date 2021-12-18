import React from 'react'

import BtnSecondary from './btn-secondary'
import projectStyles from '../style.module.css'
import styles from './blog-article.module.css'

const BlogArticle = () => {
  return (
    <div className={styles['Article']}>
      <img
        alt="image"
        src="/playground_assets/image%206%20%5B2%5D-800w.png"
        className={styles['image']}
      />
      <div className={styles['container']}>
        <span
          className={` ${styles['text']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
        >
          <span>V-ati intrebat vreodata de ce dormim?ð´</span>
          <br></br>
          <span>
            Daca l-as cita pe Mattew Walker, v-as spune ca somnul este cel mai
            bun medicament natural pe care il puteti oferi corpului vostru.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Nu v-ati intrebat niciodata de ce dormiti? Mai interesant este ca,
            probabil niciodata nu v-ati gandit de ce dormim o treime din
            intreaga noastra viata! Interesting.. huh?ð¤
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>Exista doi factori principali</span>
          <br></br>
          <span>care stabilesc momentele de somn si momentele de veghe.</span>
          <br></br>
          <span>
            Ambii influenteaza chiar in acest moment mintea si corpul.
          </span>
        </span>
        <BtnSecondary
          cta_text="Citeste mai mult"
          rootClassName="rootClassName"
        ></BtnSecondary>
      </div>
    </div>
  )
}

export default BlogArticle
