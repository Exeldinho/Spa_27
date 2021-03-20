import React from'react';
import '../style/styles.css';
import Footer from './components/footer.js'

export const AppPage = () => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
                <title>Work Field</title>
        </head>
        <body>
        <header>
            <a href="/">Logout</a>
        </header>

        <section>
            <article>
                Application main functionalities
            </article>
        </section>


        <Footer/>

        </body>
        </html>
    )
}