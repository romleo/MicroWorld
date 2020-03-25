// import Document, { Head, Main, NextScript } from 'next/document'
// import { ServerStyleSheet } from 'styled-components'
// import 'styles/global-styles'

// export default class SiteDocument extends Document {
//   render () {
//     const sheet = new ServerStyleSheet()
//     const main = <Main />
//     // const main = sheet.collectStyles(<Main />)
//     // const styleTags = sheet.getStyleElement()
//     return (
//       <html>
//         <Head>
//           <meta charSet='utf-8' />
//           <meta name='viewport' content='initial-scale=1.0, width=device-width' />
//           <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/sanitize.css/2.0.0/sanitize.min.css' />
//           <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.7.4/tachyons.min.css' />
//           {/* {styleTags} */}
//         </Head>
//         <body>
//           <div className='root'>
//             {main}
//           </div>
//           <NextScript />
//         </body>
//       </html>
//     )
//   }
// }
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}