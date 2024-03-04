import Image from 'next/image'
import styles from '@/styles/about.module.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Home() {
    const imageStyle = {
        borderRadius: '5%',
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
                        
                    </div>
                    <p>ABOUT JENNERS</p>
                    <div className={styles.body}>
                    <p> Hi, my name is <span className={styles.name}>Jenners Acevedo</span>. I'm a software developer with experience in mobile.</p>
                    <p>I've been building stuff on the web for the last 4 years, working with clients across various countries and industries.</p>
                    <p>My focus is on creating strong, lasting solutions for the world. I would like to be part of the team that changes the world and creates innovation every day.</p>
                    <p>Experience</p>
                    <p>I have 4 years of experience working with Node.js and React.</p>
                    <p>I have 3 years of experience working with payment processors as CardNet and Stripe.</p>
                    <p>Also I have experience working with C# and Python.</p>
                    <p>Content Creator</p>
                    <p>I love creating content related to code and software development on social media as <a href='/tik tok'>Tik Tok</a>, <a href='/instagram'>Instagram</a> and <a href='/YouTube'>YouTube</a>.</p>
                    <p>Hobbies</p>
                    <p>I'm passionate about going to the gym and Watching some movies. I'm a fan of Greek mythology and I like all the content related to that (books, movies, series, etc.).</p>
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
