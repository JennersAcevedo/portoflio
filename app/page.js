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
  const projects = [
    {
      tittle: 'Developer portal - BackEnd',
      description: 'This project is responsible for managing the developers and merchants that implement the services of a company that is a payment processor. This is the backend of that project. - NODE.JS (NESTJS)',
      imageURL: '/portal-back.png',
      urlProject: "https://github.com/Jenners20/adm-dev-back"
    },
   
    {
      tittle: 'Stocks - Backend',
      description: 'This project is responsible for managing the stocks of a company also sells and purchases. - Nodejs (NESTJS)',
      imageURL: '/stocks-back.png',
      urlProject: "https://github.com/Jenners20/portfolio"
    },
    {
      tittle: 'Developer portal - FrontEnd',
      description: 'This project is responsible for managing the developers and merchants that implement the services of a company that is a payment processor. This is the frontend of that project. - REACT (NEXTJS)',
      imageURL: '/portal-front.png',
      urlProject: "https://github.com/Jenners20/adm-dev-frontend"
    },
    {
      tittle: 'Stocks - Frontend',
      description: 'This project is responsible for managing the stocks of a company also sells and purchases. - REACT (NEXTJS)',
      imageURL: '/stocks-front.png',
      urlProject: "https://github.com/Jenners20/portfolio"
    },
  ];
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
              width={70}
              height={70}
              alt="Picture of the author"
              style={imageStyle}
            />
            <span className={styles.social}><a href='https://linktr.ee/jenners_dev'> @jenners_dev</a> </span>
          </div>
          <p> Hi, my name is <span className={styles.name}>Jenners Acevedo</span></p>
          <p>I'm a <span className={styles.role}>Full Stack Developer with experience in mobile</span>.</p>
        </div>
        <div className={styles.tittle}>
          PROJECTS
        </div>
        <section id='projects' className={styles.projects}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </section>
      </main>
      <footer className={styles.footerMain}>
        <Footer />
      </footer>
    </div>
  )
}
