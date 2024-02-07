import Image from 'next/image'
import styles from '@/styles/home.module.css'
import Navbar from '@/components/navbar'

const imgStyle = {
  borderRadius: '50%',
  border: '10px solid #CBCBCB',
}
export default function Home() {
  const imageStyle = {
    borderRadius: '50%',
    border: '3px solid #fff',
  }
  const projectStyle = {
    borderRadius: '10%',
    border: '3px solid #fff',
  }
  return (
    <div>
      <div className={styles.container}>
      <Navbar />
      </div>
      <main className={styles.main}>
        <div className={styles.description}>
          <Image
            src="/profiles.jpg"
            width={50}
            height={50}
            alt="Picture of the author"
            style={imageStyle}
          />
          <span className={styles.social}><a href='https://linktr.ee/jenners_dev'> @jenners_dev</a> </span>
          <p> Hi, my name is <span className={styles.name}>Jenners Acevedo</span></p>
          <p>I'm a <span className={styles.role}>Full Stack Developer with experience in mobile</span>.</p>
        </div>
        <section className={styles.projects}>
          <div className={styles.tittle}>
            PROJECTS
          </div>
          <div className={styles.project}>
            <Image
              src="/adm-dev-back.png"
              width={100}
              height={100}
              alt="Picture of the author"
              style={projectStyle}
            />
            <h2>Project 1</h2>
            <p>This project is to manage the developers and businesses of a company that sells its services to freelance businesses and developers.</p>
            <a href="#">See Code</a>
          </div>
          <div className={styles.project}>
            <Image
              src="/adm-dev-back.png"
              width={100}
              height={100}
              alt="Picture of the author"
              style={projectStyle}
            />
            <h2>Proyecto 1</h2>
            <p>Descripción del Proyecto 1. Puedes agregar más detalles aquí.</p>
            <a href="#">See Code</a>
          </div>
        </section>
      </main>
      <footer>
        <p>Designed by: Jenners Acevedo</p>
      </footer>
    </div>
  )
}
