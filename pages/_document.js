import Document,{Header,Mein,NextScript, Head} from'next/document'
import{ServerStyleSheet} from 'styled-components'
import 'style/global-style';

export default class SiteDocument extends Document{
  render(){
    const sheet =new ServerStyleSheet()
    const main = sheet.collectStyles(<Mein/>)
    const stylesTags =sheet.getStyleElement() 
    return (
      <html>
        <Head>
         <meta charSet="utf-8" />
         <meta name = "viewport" content="initial-scale=1.0,width=device-width"/>
         {stylesTags}   
        </Head>
        <body>
          <div className="root">
            {main}  
          </div>
          <NextScript/>  
        </body>  
      </html>  
    )
  }
}