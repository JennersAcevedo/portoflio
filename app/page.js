import Image from 'next/image'
import styles from '@/styles/home.module.css'
import Navbar from '@/components/navbar'
import ProjectCard from '@/components/cards'

// const imgStyle = {
//   borderRadius: '50%',
//   border: '10px solid #CBCBCB',
// }
export default function Home() {
  const imageStyle = {
    borderRadius: '50%',
    border: '3px solid #fff',
  }
  // const projectStyle = {
  //   borderRadius: '10%',
  //   border: '3px solid #fff',
  // }
  const projects = [
    {
      tittle: 'Developer portal - BackEnd',
      description: 'This project is responsible for managing the developers and merchants that implement the services of a company that is a payment processor. This is the backend of that project.',
      imageURL: '/adm-dev-back.png',
      urlProject:"/about"
    },
    {
      tittle: 'Developer portal - FrontEnd',
      description: 'This project is responsible for managing the developers and merchants that implement the services of a company that is a payment processor. This is the frontend of that project.',
      imageURL: '/adm-dev-back.png',
      urlProject:""
    },
    {
      tittle: 'Portfolio (this project)',
      description: 'This is my portfolio. Is the one that you are seeing now.',
      imageURL: '/adm-dev-back.png',
      urlProject:""
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
        <section className={styles.projects}> 
          {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
        </section>
      </main>
      <footer>
        <p>Designed by: Jenners Acevedo</p>
      </footer>
    </div>
  )
}
