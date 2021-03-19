import React from'react';
import '../style/styles.css'

export const MainPage = () => {
return (
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
            <title>Spa_27</title>
            <link href="../style/styles.css" type="text/css" rel="stylesheet"/>
    </head>
    <body>
    <section>
        <div class="wrapper">

            <header class="page-header">
                <h1>Single Page Application</h1>
            </header>

            <main class="page-body">
                <nav>
                    <ul>
                        <li><a href="./MainPage.js">Home</a></li>
                        <li><a href="./AboutPage.js">About</a></li>
                    </ul>
                </nav>

                <div class="logger">
                    <h3>Enter to application</h3>
                    <div>
                        <input type="text" required name="login" placeholder="login" alt="login field"/>
                            <div>
                                <input type="password" required name="password" placeholder="password" alt="password field"/>
                                    <div>
                                        <button>Login</button>
                                    </div>
                            </div>
                    </div>
                </div>
                <div id="root">
                </div>
            </main>
            <footer class="page-footer">
                <em>©All right reserved by project_27</em>
            </footer>
        </div>
    </section>
    </body>
    </html>
)
}