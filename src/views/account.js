import React from 'react'

import { Helmet } from 'react-helmet'

import DashboardHeader from '../components/dashboard-header'
import styles from './account.module.css'

const Account = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Account - Valentin Ignat PT</title>
        <meta property="og:title" content="Account - Valentin Ignat PT" />
        <meta
          property="og:description"
          content="Hello there, how are you?\nWe can put here whatever message we want!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/3a2f6895-526e-403a-884d-eca828114341?org_if_sml=1"
        />
      </Helmet>
      <div className={styles['Sidebar']}>
        <DashboardHeader
          logo_src="2483ef27-3e92-4bfd-934f-815186ae3c1a"
          rootClassName="rootClassName"
        ></DashboardHeader>
      </div>
      <div className={styles['MainContent']}>
        <div className={styles['container1']}>
          <div className={styles['menu']}>
            <svg viewBox="0 0 1024 1024" className={styles['menu-icon']}>
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div className={styles['container2']}>
            <span className={styles['text']}>
              <span>
                Mesaj promotional cu ceva discount pe care il ai in shop/Citatul
                motivational al zilei etc
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
