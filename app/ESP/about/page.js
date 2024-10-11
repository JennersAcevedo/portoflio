import Image from 'next/image'
import styles from '@/styles/about.module.css'
import Footer from '@/components/footer'
import NavbarEsp from '@/components/navbarEsp'

export default function Home() {
    const imageStyle = {
        borderRadius: '5%',
        border: '3px solid #fff',
    }

    return (
        <div>
            <div className={styles.container}>
                <NavbarEsp />
            </div>
            <main className={styles.main}>
                <div className={styles.description}>
                    <div className={styles.profile}>
                        <Image
                            src="/colorProfile.jpg"
                            width={250}
                            height={255}
                            alt="Picture of the author"
                            style={imageStyle}
                        />
                        
                    </div>
                    <p>SOBRE MI</p>
                    <div className={styles.body}>
                    <p> Hola, mi nombre es <span className={styles.name}>Jenners Acevedo</span>. Soy un desarrollador de software Full Stack con experiencia en desarrollo de aplicaciones mobiles.</p>
                    <p>He estado creando soluciones en la web durante los últimos 5 años para clientes de diversos paises e industrias.</p>
                    <p>Me enfoco en crear soluciones sólidas, duraderas y escalables. Me gustaría ser parte de el equipo que cambia el mundo y innova día tras día.</p>
                    <p>Experiencia</p>
                    <p>Tengo más 4 años de experiencia trabajando con Node.js y React.</p>
                    <p>Tengo más 3 años de experiencia trabajando con procesadores de pagos como CardNet y Stripe.</p>
                    <p>Tengo experiencia trabajando con C# y Python.</p>
                    <p>Creador de Contenido</p>
                    <p>Me gusta crear contenido relacionado con la programacion y el desarrollo de software en mis redes sociales como: <a href='/tik tok'>Tik Tok</a>, <a href='/instagram'>Instagram</a> y <a href='/YouTube'>YouTube</a>.</p>
                    <p>Hobbies</p>
                    <p>En mi tiempo libre me gusta ir al gimnasio y ver peliculas. Soy fanático de la mitología griega y me gusta todo su contenido relacionado(libros, series, peliculas, etc.).</p>
                    </div>
                    <br/>
                </div>
            </main>
            <footer className={styles.footerMain}>
                <Footer />
            </footer>
        </div>
    )
}