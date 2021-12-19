import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './carrousel-with-text.module.css'

const CarrouselWithText = (props) => {
  return (
    <div
      data-role="carrousel"
      className={` ${styles['Carrousel']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['Slider']}>
        <div
          className={` ${styles['Slides']} ${projectStyles['slides-container']} `}
        >
          <img
            alt="slide-1"
            src={props.slide_one_src}
            data-slide-index="0"
            className={` ${projectStyles['carrousel-slide']} ${projectStyles['slide-active']} ${projectStyles['animation-fade-in']} `}
          />
          <img
            alt="slide-1"
            src={props.slide_two_src}
            data-slide-index="1"
            className={` ${styles['Image1']} ${projectStyles['carrousel-slide']} ${projectStyles['animation-fade-in']} `}
          />
          <img
            alt="slide-1"
            src={props.slide_three_src}
            data-slide-index="2"
            className={` ${styles['Image2']} ${projectStyles['carrousel-slide']} ${projectStyles['animation-fade-in']} `}
          />
        </div>
        <div className={projectStyles['carrousel-controls-container']}>
          <div
            data-slide-index="0"
            className={projectStyles['carrousel-control-btn']}
          >
            <div
              className={` ${styles['BulletContent']} ${projectStyles['tl-bullet-active']} ${projectStyles['tl-bullet']} `}
            >
              <div
                className={` ${projectStyles['tl-inner-active']} ${projectStyles['inner-white']} `}
              ></div>
            </div>
            <div className={projectStyles['tl-bullet-inner']}></div>
          </div>
          <div
            className={` ${styles['Line']} ${projectStyles['tl-line']} `}
          ></div>
          <div
            data-slide-index="1"
            className={projectStyles['carrousel-control-btn']}
          >
            <div
              className={` ${styles['BulletContent1']} ${projectStyles['tl-bullet']} `}
            >
              <div className={projectStyles['inner-white']}></div>
            </div>
            <div className={projectStyles['tl-bullet-inner']}></div>
          </div>
          <div
            className={` ${styles['Line1']} ${projectStyles['tl-line']} `}
          ></div>
          <div
            data-slide-index="2"
            className={projectStyles['carrousel-control-btn']}
          >
            <div
              className={` ${styles['BulletContent2']} ${projectStyles['tl-bullet']} `}
            >
              <div className={projectStyles['inner-white']}></div>
            </div>
            <div className={projectStyles['tl-bullet-inner']}></div>
          </div>
        </div>
      </div>
      <div className={styles['Text-Container']}>
        <span
          data-slide-index="0"
          className={` ${projectStyles['carrousel-text']} ${projectStyles['slide-active']} ${projectStyles['animation-fade-in']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
        >
          {props.slide_one_text}
        </span>
        <span
          data-slide-index="1"
          className={` ${projectStyles['carrousel-text']} ${projectStyles['animation-fade-in']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
        >
          {props.slide_two_text}
        </span>
        <span
          data-slide-index="2"
          className={` ${projectStyles['carrousel-text']} ${projectStyles['animation-fade-in']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
        >
          {props.slide_three_text}
        </span>
      </div>
    </div>
  )
}

CarrouselWithText.defaultProps = {
  slide_two_text:
    'Praesent nec lobortis dolor. Vestibulum scelerisque purus nisi, eu sollicitudin tellus fringilla at. In eget enim et lectus sollicitudin mattis. In vestibulum massa sit amet egestas facilisis. Integer porta augue sit amet diam dignissim suscipit. Ut sit amet pellentesque sapien. Praesent a molestie elit.',
  slide_one_text:
    'Praesent nec lobortis dolor. Vestibulum scelerisque purus nisi, eu sollicitudin tellus fringilla at. In eget enim et lectus sollicitudin mattis. In vestibulum massa sit amet egestas facilisis. Integer porta augue sit amet diam dignissim suscipit. Ut sit amet pellentesque sapien. Praesent a molestie elit.In 2019 m-am hotarat sa fac o schimbare legata de ce tip de miscare sa fac. Pana atunci mergeam la clase de Zumba si Pilates si devenise cam monoton, vroiam ceva mai challenging asa ca m-am dus la o sala cu total alt fel de clase. Acolo l-am cunoscut pe Vali, care facea clasele de HIIT. Mergeam si la alte clase cateodata, dar cel mai des la Vali, pentru ca energia si buna lui dispozitie (inca)e molipsitoare!  In 2020, dupa ce am tot auzit de la prieteni/prietene ca au apelat la un antrenor personal mi-am zis sa incerc si eu(pentru prima oara), si a urmat: "Vali, ai un loc si pentru mine la Personal Training". Si m-a primit! Decizia asta a fost motivata de cat de mult mi-a placut la clasele lui si de ce om fain este. De-atunci orele de PT au fost din ce in ce mai faine si pentru ca incepeam sa progresez, dar si pentru ca incepeam sa descopar tot mai multe lucruri bune despre Vali. Pentru mine Vali e un antrenor complet: se intereseaza de obiectivele fiecaruia si lucreaza cu fiecare pe baza obiectivelor, e atent permanent la cum execut exercitiile/miscarile si are rabdare sa explice ce vrea sa zica de cate ori e nevoie pana inteleg, isi motiveaza alegerile legate de exercitii, imi raspunde la orice intrebare am, ma motiveaza prin felul lui de a fi si prin faptul ca se bucura si el cu mine cand progresez, e foarte implicat, se documenteaza continuu, m-a invatat sa ma descurc si singura in sala, si bonus pentru cititori: are si simtul umorului! :D Din 2020 pana azi: am devenit mai puternica, am mai multa incredere in mine, sunt mult mai activa si fac asta cu placere, simt ca sunt in cea mai buna forma a mea de pana acum, si-n plus sunt mai bogata ca l-am cunoscut pe Vali si pe colegii de echipa.  Multumesc inca o data, Vali!In 2019 m-am hotarat sa fac o schimbare legata de ce tip de miscare sa fac. Pana atunci mergeam la clase de Zumba si Pilates si devenise cam monoton, vroiam ceva mai challenging asa ca m-am dus la o sala cu total alt fel de clase. Acolo l-am cunoscut pe Vali, care facea clasele de HIIT. Mergeam si la alte clase cateodata, dar cel mai des la Vali, pentru ca energia si buna lui dispozitie (inca)e molipsitoare!  In 2020, dupa ce am tot auzit de la prieteni/prietene ca au apelat la un antrenor personal mi-am zis sa incerc si eu(pentru prima oara), si a urmat: "Vali, ai un loc si pentru mine la Personal Training". Si m-a primit! Decizia asta a fost motivata de cat de mult mi-a placut la clasele lui si de ce om fain este. De-atunci orele de PT au fost din ce in ce mai faine si pentru ca incepeam sa progresez, dar si pentru ca incepeam sa descopar tot mai multe lucruri bune despre Vali. Pentru mine Vali e un antrenor complet: se intereseaza de obiectivele fiecaruia si lucreaza cu fiecare pe baza obiectivelor, e atent permanent la cum execut exercitiile/miscarile si are rabdare sa explice ce vrea sa zica de cate ori e nevoie pana inteleg, isi motiveaza alegerile legate de exercitii, imi raspunde la orice intrebare am, ma motiveaza prin felul lui de a fi si prin faptul ca se bucura si el cu mine cand progresez, e foarte implicat, se documenteaza continuu, m-a invatat sa ma descurc si singura in sala, si bonus pentru cititori: are si simtul umorului! :D Din 2020 pana azi: am devenit mai puternica, am mai multa incredere in mine, sunt mult mai activa si fac asta cu placere, simt ca sunt in cea mai buna forma a mea de pana acum, si-n plus sunt mai bogata ca l-am cunoscut pe Vali si pe colegii de echipa.  Multumesc inca o data, Vali!In 2019 m-am hotarat sa fac o schimbare legata de ce tip de miscare sa fac. Pana atunci mergeam la clase de Zumba si Pilates si devenise cam monoton, vroiam ceva mai challenging asa ca m-am dus la o sala cu total alt fel de clase. Acolo l-am cunoscut pe Vali, care facea clasele de HIIT. Mergeam si la alte clase cateodata, dar cel mai des la Vali, pentru ca energia si buna lui dispozitie (inca)e molipsitoare!  In 2020, dupa ce am tot auzit de la prieteni/prietene ca au apelat la un antrenor personal mi-am zis sa incerc si eu(pentru prima oara), si a urmat: "Vali, ai un loc si pentru mine la Personal Training". Si m-a primit! Decizia asta a fost motivata de cat de mult mi-a placut la clasele lui si de ce om fain este. De-atunci orele de PT au fost din ce in ce mai faine si pentru ca incepeam sa progresez, dar si pentru ca incepeam sa descopar tot mai multe lucruri bune despre Vali. Pentru mine Vali e un antrenor complet: se intereseaza de obiectivele fiecaruia si lucreaza cu fiecare pe baza obiectivelor, e atent permanent la cum execut exercitiile/miscarile si are rabdare sa explice ce vrea sa zica de cate ori e nevoie pana inteleg, isi motiveaza alegerile legate de exercitii, imi raspunde la orice intrebare am, ma motiveaza prin felul lui de a fi si prin faptul ca se bucura si el cu mine cand progresez, e foarte implicat, se documenteaza continuu, m-a invatat sa ma descurc si singura in sala, si bonus pentru cititori: are si simtul umorului! :D Din 2020 pana azi: am devenit mai puternica, am mai multa incredere in mine, sunt mult mai activa si fac asta cu placere, simt ca sunt in cea mai buna forma a mea de pana acum, si-n plus sunt mai bogata ca l-am cunoscut pe Vali si pe colegii de echipa.  Multumesc inca o data, Vali!',
  slide_two_src: '/playground_assets/2-600w.jpg',
  slide_one_src: '/playground_assets/0-600w.jpg',
  slide_three_text:
    'Praesent nec lobortis dolor. Vestibulum scelerisque purus nisi, eu sollicitudin tellus fringilla at. In eget enim et lectus sollicitudin mattis. In vestibulum massa sit amet egestas facilisis. Integer porta augue sit amet diam dignissim suscipit. Ut sit amet pellentesque sapien. Praesent a molestie elit.',
  slide_three_src: '/playground_assets/1-600w.jpg',
  rootClassName: '',
}

CarrouselWithText.propTypes = {
  slide_two_text: PropTypes.string,
  slide_one_text: PropTypes.string,
  slide_two_src: PropTypes.string,
  slide_one_src: PropTypes.string,
  slide_three_text: PropTypes.string,
  slide_three_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CarrouselWithText
