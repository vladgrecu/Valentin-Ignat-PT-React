import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './contact-form-modal1.module.css'

const ContactFormModal1 = (props) => {
  return (
    <div
      role="dialog"
      data-type="ContactFormModal"
      className={` ${styles['ContactFormModal']} ${projectStyles['animation-slide-in-down-phone']} ${projectStyles['animation-fade-in']} `}
    >
      <div
        className={` ${styles['max-content']} ${projectStyles['max-content']} `}
      >
        <div className={styles['main-element']}>
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
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
                <path d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"></path>
              </svg>
            </div>
          </div>
          <div className={styles['Description']}>
            <span
              className={` ${styles['text']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
            >
              âCompleteaza acest formular pentru a ma contacta
            </span>
            <span
              className={` ${styles['text1']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
            >
              *Completarea acestui formular dureaza maxim 2 minute
            </span>
          </div>
          <form className={styles['form']}>
            <input
              type="text"
              name="subject"
              required="true"
              autoFocus="true"
              placeholder="Subiect"
              className={` ${styles['textinput']} ${projectStyles['input']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
            />
            <input
              type="email"
              required="true"
              placeholder="Email"
              className={` ${styles['textinput1']} ${projectStyles['input']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
            />
            <textarea
              rows="3"
              placeholder="Mesaj"
              className={` ${styles['textarea']} ${projectStyles['input']} ${projectStyles['content-Bold']} ${projectStyles['content-bold-white']} `}
            ></textarea>
            <div className={styles['container1']}>
              <button
                name="submit"
                type="submit"
                data-action="closeContactFormModal"
                className={` ${styles['submit-btn']} ${projectStyles['animated-btn']} ${projectStyles['button-Text']} `}
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactFormModal1.defaultProps = {
  rootClassName: '',
}

ContactFormModal1.propTypes = {
  rootClassName: PropTypes.string,
}

export default ContactFormModal1
