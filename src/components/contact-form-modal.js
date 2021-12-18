import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './contact-form-modal.module.css'

const ContactFormModal = (props) => {
  return (
    <div
      role="dialog"
      data-type="ContactFormModal"
      className={` ${projectStyles['modal-container']} ${
        projectStyles['animation-slide-in-down-phone']
      } ${projectStyles['animation-fade-in']} ${styles[props.rootClassName]} `}
    >
      <div
        data-state="view"
        className={` ${projectStyles['modal-content-container']} ${projectStyles['max-content-container']} `}
      >
        <div className={styles['Top-Bar']}>
          <div className={styles['container']}>
            <img
              alt="image"
              src="/playground_assets/logo%20secundar-05.svg"
              className={styles['image']}
            />
          </div>
          <div
            data-action="closeContactFormModal"
            className={styles['close-modal']}
          >
            <svg
              viewBox="0 0 1024 1024"
              className={projectStyles['modal-close-icon']}
            >
              <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
              <path d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"></path>
            </svg>
          </div>
        </div>
        <div className={styles['Description']}>
          <span
            className={` ${styles['text']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
          >
            Completeaza acest formular pentru a ma contacta.
          </span>
        </div>
        <form
          id="contactform"
          enctype="application/x-www-form-urlencoded"
          className={styles['form']}
        >
          <input
            type="text"
            name="subject"
            required="true"
            autoFocus="true"
            form-field="true"
            placeholder="Subiect"
            className={` ${projectStyles['form-input']} ${projectStyles['input']} `}
          />
          <input
            type="email"
            name="email"
            required="true"
            form-field="true"
            placeholder="Email"
            className={` ${projectStyles['form-input']} ${projectStyles['input']} `}
          />
          <textarea
            name="text"
            rows="3"
            form-field="true"
            placeholder="Mesaj"
            className={` ${projectStyles['form-input']} ${projectStyles['input']} `}
          ></textarea>
          <div className={styles['container1']}>
            <input
              type="checkbox"
              checked="true"
              className={styles['checkbox']}
            />
            <label className={styles['text1']}>
              Ma abonez la newsletter-ul, Coach Vali Ignat
            </label>
          </div>
          <div className={styles['container2']}>
            <input
              type="checkbox"
              checked="true"
              className={styles['checkbox1']}
            />
            <label className={styles['text2']}>
              Sunt de acord cu politicile de confidentialitate, termenii si
              conditiile prezente pe acest site
            </label>
          </div>
          <div className={styles['container3']}>
            <button
              name="submit"
              type="submit"
              data-action="sendContactForm"
              className={` ${styles['submit-btn']} ${projectStyles['button-Text']} ${projectStyles['animated-btn']} ${projectStyles['button-Text']} `}
            >
              Trimite
            </button>
          </div>
        </form>
      </div>
      <div
        data-state="loading"
        className={` ${styles['Loading']} ${projectStyles['modal-content-container']} ${projectStyles['max-content-container']} `}
      >
        <svg
          viewBox="0 0 1024 1024"
          className={` ${styles['icon3']} ${projectStyles['animation-rotate-clockwise']} `}
        >
          <path d="M512 0c-278.748 0-505.458 222.762-511.848 499.974 5.92-241.864 189.832-435.974 415.848-435.974 229.75 0 416 200.576 416 448 0 53.020 42.98 96 96 96s96-42.98 96-96c0-282.77-229.23-512-512-512zM512 1024c278.748 0 505.458-222.762 511.848-499.974-5.92 241.864-189.832 435.974-415.848 435.974-229.75 0-416-200.576-416-448 0-53.020-42.98-96-96-96s-96 42.98-96 96c0 282.77 229.23 512 512 512z"></path>
        </svg>
        <span
          className={` ${styles['text3']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
        >
          In curs de trimitere...
        </span>
      </div>
      <div
        data-state="success"
        className={` ${styles['Success']} ${projectStyles['modal-content-container']} ${projectStyles['max-content-container']} `}
      >
        <svg viewBox="0 0 1024 1024" className={styles['icon5']}>
          <path d="M864 128l-480 480-224-224-160 160 384 384 640-640z"></path>
        </svg>
        <span
          className={` ${styles['text4']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
        >
          Email trimis.
        </span>
      </div>
      <div
        data-state="error"
        className={` ${styles['Error']} ${projectStyles['modal-content-container']} ${projectStyles['max-content-container']} `}
      >
        <svg viewBox="0 0 1024 1024" className={styles['icon7']}>
          <path d="M554 554v-256h-84v256h84zM554 726v-86h-84v86h84zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
        </svg>
        <span
          className={` ${styles['text5']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
        >
          Error. Mail-ul nu a fost trimis!
        </span>
      </div>
    </div>
  )
}

ContactFormModal.defaultProps = {
  rootClassName: '',
}

ContactFormModal.propTypes = {
  rootClassName: PropTypes.string,
}

export default ContactFormModal
