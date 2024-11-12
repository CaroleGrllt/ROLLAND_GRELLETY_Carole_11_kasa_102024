import Apropos       from '../about.json'

import Header        from '../components/header'
import Footer        from '../components/footer'
import Banner        from '../components/banner'
import Collapse      from '../components/collapse'

import cover         from '../assets/img/about_banner.png'


export default function About () {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <section className='about_banner'>
                    <Banner 
                    background={cover}
                    alt="Mountains landscape"
                    />
                </section>
                <section className='about_collapses'>
                {Apropos.map((about, key) => {
                        return <Collapse
                        key={"about-"+key}
                        title={about.title}
                        description={about.description}
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