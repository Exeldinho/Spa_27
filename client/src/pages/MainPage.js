import React from'react';
import '../style/styles.css'
import Header from './components/header'
import Nav from './components/nav'
import Footer from './components/footer'
import Logger from "./components/logger";
import NameForm from "./components/NameForm";

export const MainPage = () => {
return (
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
            <title>Spa_27</title>
    </head>
    <body>
    <section>
        <div>
           <Header/>
            <main class="page-body">
                <Nav/>
                <Logger/>
                <NameForm/>
            </main>
          <Footer/>
        </div>
    </section>
    </body>
    </html>
)
}