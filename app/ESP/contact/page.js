import Image from 'next/image'
import styles from '@/styles/contact.module.css'
import Footer from '@/components/footer'
import NavbarEsp from '@/components/navbarEsp'

export default function Home() {
    const imageStyle = {
        borderRadius: '10%',
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
                            src="/profiles.jpeg"
                            width={310}
                            height={300}
                            alt="Picture of the author"
                            style={imageStyle}
                        />
                    </div>
                    <p>Contáctame</p>

                    <p>Puedes contactarme vía mis redes sociales: </p>
                    <div className={styles.social}>
                    <a href='https://www.linkedin.com/in/jenners-acevedo-berg-031a73201/'>Linkedin</a>
                    <br/>
                    <a href='https://www.instagram.com/jenners.dev/'>Instagram</a>
                    <br/>
                    <a href='https://www.tiktok.com/@jenners.dev'>TikTok</a>
                    </div>
                   
                </div>
            </main>
            <footer className={styles.footerMain}>
                <Footer />
            </footer>
        </div>
    )
}
