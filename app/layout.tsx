import Navbar from "./navbar";
import "../styles/globals.css";

const Layout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <html>
            <head>
                <title>Welcome to my portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="font-sans">
                <nav>
                    <Navbar/>
                </nav>
                <main>
                    {children}
                </main>

                <footer>
                </footer>
            </body>
        </html>
    )
}

export default Layout;