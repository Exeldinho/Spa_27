import React from'react';
import '../style/styles.css'
import Footer from "./components/footer.js";

export const AboutPage = () => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
                <title>About project</title>
        </head>
        <body>
        <header>
            <a href="/">Back to main page</a>
        </header>

        <section>
            <article>
                Description about application. Used technologies etc..
            </article>
        </section>

        <Footer/>

        </body>
        </html>
    )
}