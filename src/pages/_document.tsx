import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="WinGamo ISO Downloads." />
          <meta name="keywords" content="WinGamo, wingamo, wingamodevs, wgd, windows"/>
          <meta name="copyright" content="Copyright © 2023 WinGamo Devs. All rights reserved." />
          <meta name="author" content="Adolo" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.wingamo.ga" />
          <meta property="og:title" content="WinGamo Downloads" />
          <meta property="og:description" content="WinGamo ISO Downloads" />
          <meta property="og:image" content="https://cdn.discordapp.com/attachments/861217887489753092/1072848122641924167/wingamodevs.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.wingamo.ga" />
          <meta property="twitter:title" content="WinGamo Downloads" />
          <meta property="twitter:description" content="WinGamo ISO Downloads" />
          <meta property="twitter:image" content="https://cdn.discordapp.com/attachments/861217887489753092/1072848122641924167/wingamodevs.png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          {siteConfig.googleFontLinks.map(link => (
            <link key={link} rel="stylesheet" href={link} />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
