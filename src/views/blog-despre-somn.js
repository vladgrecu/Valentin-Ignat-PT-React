import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './blog-despre-somn.module.css'

const BlogDespreSomn = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Blog - Despre Somn - Valentin Ignat PT</title>
        <meta
          property="og:title"
          content="Blog - Despre Somn - Valentin Ignat PT"
        />
        <meta
          property="og:description"
          content="Hello there, how are you?\nWe can put here whatever message we want!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0bb31403-1ba8-407c-9d80-4389cc611d8c/3a2f6895-526e-403a-884d-eca828114341?org_if_sml=1"
        />
      </Helmet>
    </div>
  )
}

export default BlogDespreSomn
