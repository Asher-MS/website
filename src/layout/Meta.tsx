import React from 'react'

import { NextSeo } from 'next-seo'
import Head from 'next/head'

import { Config } from '../utils/Config'

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" key="charset" />
      <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
      <meta property="og:title" content="Jina AI" />
      <meta name="author" content="Jina AI" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Jina AI" />
      <meta property="og:image" content="https://jina.ai/assets/images/jina_banner_new.png" />
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:image" content="https://jina.ai/assets/images/jina_banner_new.png" />
      <meta property="twitter:title" content="Jina AI" />
      <meta name="twitter:site" content="@JinaAI_" />
      <meta name="twitter:creator" content="@Jina AI" />
      <link
        rel="apple-touch-icon"
        href={`${process.env.baseUrl}/apple-touch-icon.png`}
        key="apple"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${process.env.baseUrl}/favicon-16x16.png`}
        key="icon16"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${process.env.baseUrl}/favicon-32x32.png`}
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${process.env.baseUrl}/favicon-96x96.png`}
        key="icon96"
      />
      <link rel="icon" href={`${process.env.baseUrl}/favicon.ico`} key="favicon" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet"></link>
    </Head>
    <NextSeo
      title={props.title}
      description={props.description}
      canonical={props.canonical}
      openGraph={{
        title: props.title,
        description: props.description,
        url: props.canonical,
        locale: Config.locale,
        site_name: Config.site_name
      }}
    />
  </>
)

export default Meta
