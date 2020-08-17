import { Provider } from 'react-redux'
import { useStore } from '../store'
import applicationStore from "./framework/redux/ApplicationStore";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={applicationStore}>
            <Head>
        <title>dewMy page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        {/* <script src="https://apis.google.com/js/api.js"></script> */}
        <script src="https://apis.google.com/js/api.js"></script>

      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}
