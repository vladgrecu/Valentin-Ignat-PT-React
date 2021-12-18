import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './login-modal.module.css'

const LoginModal = (props) => {
  return (
    <div
      role="dialog"
      data-type="LoginModal"
      className={` ${projectStyles['modal-container']} ${
        projectStyles['animation-slide-in-down-phone']
      } ${projectStyles['animation-fade-in']} ${styles[props.rootClassName]} `}
    >
      <div
        className={` ${projectStyles['modal-content-container']} ${projectStyles['max-content-container']} `}
      >
        <div className={styles['main-element']}>
          <div className={styles['Top-Bar']}>
            <div className={styles['container']}>
              <h1 className={projectStyles['modal-header']}>contul meu</h1>
            </div>
            <div
              data-action="closeLoginModal"
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
              type="email"
              required="true"
              autoFocus="true"
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
            <div data-action="loginUser" className={styles['container1']}>
              <button
                name="submit"
                type="submit"
                data-action="loginUser"
                className={` ${styles['submit-btn']} ${projectStyles['button-Text']} ${projectStyles['animated-btn']} ${projectStyles['button-Text']} `}
              >
                login
              </button>
            </div>
            <span data-action="showRegisterModal" className={styles['text1']}>
              <span className={styles['text2']}>
                Nu ai cont? Creeaza unul
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

LoginModal.defaultProps = {
  rootClassName: '',
}

LoginModal.propTypes = {
  rootClassName: PropTypes.string,
}

export default LoginModal
