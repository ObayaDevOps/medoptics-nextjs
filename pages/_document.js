// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../components/utils/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
        <meta name="description" content="Med-Optics Ltd Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/medoptics-logo-mini-square.jpeg"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" 
        rel="stylesheet" />
        </Head>
        
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <script src="//code.tidio.co/zxhbheqqtbhgavio2x1ynt8xbq10qgg7.js" async></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}