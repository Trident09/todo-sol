import '@solana/wallet-adapter-react-ui/styles.css'
import Head from 'next/head'
import { WalletConnectProvider } from '../components/WalletConnectProvider'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Todo App</title>
            </Head>
            <main>
                <WalletConnectProvider>
                    <Component {...pageProps} />
                </WalletConnectProvider>
            </main>
        </>
    )
}

export default MyApp
