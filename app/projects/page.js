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
                    <p>PROJECTS</p>
                    <p> Hi, my name is <span className={styles.name}>Jenners Acevedo</span>, a software developer with experience in mobile.</p>
                    <p>I've been building stuff on the web for the last 4 years, working with clients across various countries and industries.</p>
                    <p>My focus is on creating strong, lasting solutions for the world. I would like to be part of the team that changes the world and creates innovation every day.</p>
                    <p>I'm a <span className={styles.role}>Full Stack Developer with experience in mobile</span>.</p>
                    <p>Work</p>
                    <p>Now I'm working</p>
                </div>
            </main>
            <footer className={styles.footerMain}>
                <Footer />
            </footer>
        </div>
    )
}
