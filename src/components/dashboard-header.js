import React from 'react'

import PropTypes from 'prop-types'

import styles from './dashboard-header.module.css'

const DashboardHeader = (props) => {
  return (
    <div
      className={` ${styles['dashboard-header']} ${
        styles[props.rootClassName]
      } `}
    >
      <div className={styles['container']}>
        <img alt="image" src={props.logo_src} className={styles['logo']} />
        <div className={styles['container1']}></div>
      </div>
      <div className={styles['container2']}>
        <div className={styles['container3']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM140.571 804.571h742.857c-102.286-115.429-152-272-152-475.429 0-73.714-69.714-182.857-219.429-182.857s-219.429 109.143-219.429 182.857c0 203.429-49.714 360-152 475.429zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"></path>
          </svg>
          <div className={styles['container4']}>
            <span className={styles['text']}>{props.count}</span>
          </div>
        </div>
        <div className={styles['container5']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
            <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
          </svg>
          <div className={styles['container6']}></div>
        </div>
      </div>
    </div>
  )
}

DashboardHeader.defaultProps = {
  logo_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  count: '3',
  rootClassName: '',
}

DashboardHeader.propTypes = {
  logo_src: PropTypes.string,
  count: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default DashboardHeader
