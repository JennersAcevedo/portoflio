import Image from 'next/image'
import styles from '@/styles/home.module.css'
import ProjectCard from '@/components/cards'
import Footer from '@/components/footer'
import React from "react";
import SwitchButton from '@/components/switchButton'
// import { cookies } from 'next/headers'
import NavbarEsp from '@/components/navbarEsp'

export default async function Home() {
//   const  cookieStore = cookies()
//   const theme = cookieStore.get('language')
//   console.log(theme)
  const imageStyle = {
    borderRadius: '50%',
    border: '3px solid #fff',
  }
  const projects = [
    {
      tittle: 'Developer portal - BackEnd',
      description: 'Este proyecto es el responsable de manejar los desarrolladores y comercios que implementan los servicios de una compañia que procesa pagos. Este es el backend de el proyecto. - NODE.JS (Nest.js)',
      imageURL: '/portal-back.png',
      urlProject: "https://github.com/Jenners20/adm-dev-back"
    },

    {
      tittle: 'Stocks - Backend',
      description: 'Este proyecto es el responsable the manejar el inventario, las compras y las ventas de una compañia. NODE.JS (Nest.js)',
      imageURL: '/stocks-back.png',
      urlProject: "https://github.com/Jenners20/portfolio"
    },
    {
      tittle: 'Developer portal - FrontEnd',
      description: 'Este proyecto es el responsable de manejar los desarrolladores y comercios que implementan los servicios de una compañia que procesa pagos. Este es el backend de el proyecto. Este es el FrontEnd REACT (Next.js)',
      imageURL: '/portal-front.png',
      urlProject: "https://github.com/Jenners20/adm-dev-frontend"
    },
    {
      tittle: 'Stocks - Frontend',
      description: 'Este proyecto es el responsable the manejar el inventario, las compras y las ventas de una compañia. REACT (Next.js)',
      imageURL: '/stocks-front.png',
      urlProject: "https://github.com/Jenners20/portfolio"
    },
  ];



  return (
    <div>
      <div className={styles.container}>
        <NavbarEsp />
      </div>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.headers}>
            <div className={styles.profile}>
              <Image
                 src="/profiles.jpeg"
                width={70}
                height={70}
                alt="Picture of the author"
                style={imageStyle}
              />
              <span className={styles.social}><a href='https://linktr.ee/jenners_dev'> @jenners_dev</a> </span>
            </div>
            <div className={styles.switch}>
              <SwitchButton  defaultChecked={false}/>
            </div>
          </div>


          <p> Hola, mi nombre es <span className={styles.name}>Jenners Acevedo</span></p>
          <p>Soy un <span className={styles.role}>Full Stack Developer</span>.</p>
        </div>
        <div className={styles.tittle}>
          PROYECTOS
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