import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './register-modal.module.css'

const RegisterModal = (props) => {
  return (
    <div
      data-type="RegisterModal"
      className={` ${projectStyles['modal-container']} ${
        projectStyles['animation-slide-in-down-phone']
      } ${projectStyles['animation-fade-in']} ${styles[props.rootClassName]} `}
    >
      <div
        className={` ${projectStyles['modal-content-container']} ${projectStyles['max-content-container']} `}
      >
        <div className={styles['main-element']}>
          <div className={styles['Top-Bar']}>
            <div className={styles['container1']}>
              <h1 className={projectStyles['modal-header']}>Creeaza cont</h1>
            </div>
            <div
              data-action="closeRegisterModal"
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
          <form
            enctype="application/x-www-form-urlencoded"
            className={styles['form']}
          >
            <input
              type="text"
              name="prenume"
              required="true"
              autoFocus="true"
              placeholder="Prenume"
              className={` ${projectStyles['form-input']} ${projectStyles['input']} `}
            />
            <input
              type="text"
              name="nume"
              required="true"
              placeholder="Nume"
              className={` ${projectStyles['form-input']} ${projectStyles['input']} `}
            />
            <input
              type="email"
              required="true"
              placeholder="Email"
              className={` ${projectStyles['form-input']} ${projectStyles['input']} `}
            />
            <input
              type="password"
              name="password"
              required="true"
              placeholder="Password"
              className={` ${projectStyles['form-input']} ${projectStyles['input']} `}
            />
            <div data-action="registerUser" className={styles['container2']}>
              <button
                name="submit"
                type="submit"
                data-action="registerUser"
                className={` ${styles['submit-btn']} ${projectStyles['button-Text']} ${projectStyles['animated-btn']} ${projectStyles['button-Text']} `}
              >
                creeaza
              </button>
            </div>
            <span data-action="showLoginModal" className={styles['text1']}>
              <span className={styles['text2']}>
                {' '}
                Ai deja cont? Login
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className={styles['text3']}>aici</span>
              <span className={styles['text4']}>.</span>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

RegisterModal.defaultProps = {
  rootClassName: '',
}

RegisterModal.propTypes = {
  rootClassName: PropTypes.string,
}

export default RegisterModal
