import Image from 'next/image'
import styles from '@/styles/home.module.css'
import Navbar from '@/components/navbar'

const imgStyle={
  borderRadius: '50%',
  border: '10px solid #CBCBCB',
}
export default function Home() {

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div>
          <p>Hi, my name is Jenners Acevedo</p>
          <Image
          style={imgStyle}
            src="/1.jpg"
            width={700}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </main>
      <footer>
        <p>Designed by: Jenners Acevedo</p>
      </footer>
    </div>
  )
}
