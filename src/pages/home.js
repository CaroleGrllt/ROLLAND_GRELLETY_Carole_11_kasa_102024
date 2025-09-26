import Accomodations from '../accomodation.json'

import Header        from '../components/header'
import Footer        from '../components/footer'
import Banner        from '../components/banner'
import Card          from '../components/card'

import cover         from '../assets/img/home_banner.png'


export default function Home () {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <section className='home_banner'>
                    <Banner 
                    background={cover}
                    alt="Cliff landscape"
                    title= 'Chez vous, partout et ailleurs'
                    />
                </section>
                <section className="cards_container">
                {Accomodations.map(accomodation => {
                    return <Card
                        key={accomodation.id}
                        id={accomodation.id}
                        image={accomodation.cover}
                        name={accomodation.title}
                    />
                })}
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}