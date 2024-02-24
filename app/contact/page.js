import Image from 'next/image'
import styles from '@/styles/home.module.css'
import Navbar from '@/components/navbar'
import ProjectCard from '@/components/cards'
import Footer from '@/components/footer'

export default function Home() {
    const imageStyle = {
        borderRadius: '50%',
        border: '3px solid #fff',
    }

    return (
        <div>
            <div className={styles.container}>
                <Navbar />
            </div>
            <main className={styles.main}>
                <div className={styles.description}>
                    <div className={styles.profile}>
                        <Image
                            src="/profiles.jpg"
                            width={300}
                            height={300}
                            alt="Picture of the author"
                            style={imageStyle}
                        />
                        <span className={styles.social}><a href='https://linktr.ee/jenners_dev'> @jenners_dev</a> </span>
                    </div>
                    <p>Contact me</p>

                    <p>You can send me a messages on my social medias</p>
                    <p>Linkedin</p>
                    <p>Instagram</p>
                    <p>Email</p>
                    <p>TikTok</p>
                </div>
            </main>
            <footer className={styles.footerMain}>
                <Footer />
            </footer>
        </div>
    )
}
