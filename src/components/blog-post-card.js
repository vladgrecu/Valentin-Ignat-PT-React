import React from 'react'

import PropTypes from 'prop-types'

import BtnSecondary from './btn-secondary'
import projectStyles from '../style.module.css'
import styles from './blog-post-card.module.css'

const BlogPostCard = (props) => {
  return (
    <div
      className={` ${styles['BlogPostCard']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['container']}>
        <img
          alt={props.Image_alt}
          src={props.Image_src}
          className={styles['Image']}
        />
      </div>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <span className={styles['text']}>{props.data}</span>
        </div>
        <h1 className={` ${styles['text01']} ${projectStyles['h2']} `}>
          {props.titlu}
        </h1>
        <span
          className={` ${styles['text02']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
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
            Ambii influenteaza chiar in acest moment mintea si corpul...
          </span>
        </span>
        <div className={styles['Btn']}>
          <BtnSecondary
            cta_text="citeste mai mult"
            rootClassName="rootClassName5"
          ></BtnSecondary>
        </div>
      </div>
    </div>
  )
}

BlogPostCard.defaultProps = {
  titlu: 'Despre somn',
  rootClassName: '',
  Image_src: '32c17edd-9f19-4bfe-a142-2aa31c74a1c9',
  data: '24 dec 2021',
  Image_alt: 'descriere imagine',
}

BlogPostCard.propTypes = {
  titlu: PropTypes.string,
  rootClassName: PropTypes.string,
  Image_src: PropTypes.string,
  data: PropTypes.string,
  Image_alt: PropTypes.string,
}

export default BlogPostCard
