import { Link }      from "react-router-dom";

import Header        from '../components/header'
import Footer        from '../components/footer'


export default function Error () {
    return (
        <>
            <header className="header">
                <Header />
            </header>
            <main>
                <section className="error">
                    <div className="container">
                        <div className="error-404">
                            <span>404</span>
                        </div>
                        <div className="error-message">
                            <p>Oups ! La page que vous demandez n'existe pas.</p>
                        </div>
                        <div className="error-back">
                            <Link to={"/"}> Retourner sur la page d’accueil</Link>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}