import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'

function MyApp({
    Component,
    pageProps: { session, ...pageProps }
}: AppProps) {

    return (
        <div className="font-sans">
            <nav>
                <Navbar />
            </nav>
            <main>
                <Component {...pageProps} />
            </main>

            <footer>
            </footer>
        </div>
    )

}

export default MyApp