import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './results-card.module.css'

const ResultsCard = (props) => {
  return (
    <div
      className={` ${styles['ResultsCard']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <span
          className={` ${styles['text']} ${projectStyles['content-Bold']} `}
        >
          {props.name}
        </span>
        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
          <path d="M298 426h428l-214 214z"></path>
        </svg>
        <span
          className={` ${styles['text1']} ${projectStyles['content-Regular']} `}
        >
          {props.text}
        </span>
      </div>
    </div>
  )
}

ResultsCard.defaultProps = {
  name: 'Nume',
  rootClassName: '',
  image_alt: 'image',
  text: 'Am inceput sa lucrez cu Vali de aproximativ 7 luni, mergand la clasele de HIIT pe care le sustine la sala, iar de 4 luni facem si antrenamente personale. M-a atras profesionalismul lui si implicarea de care da dovada, seriozitatea si felul lui de a te binedispune dupa o zi mai incarcata la birou. Asadar il recomand cu toata increderea! Multumesc Vali ca mi-ai oferit sansa sa lucrez cu tine!',
  image_src: '/playground_assets/andra-300h.png',
}

ResultsCard.propTypes = {
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default ResultsCard
