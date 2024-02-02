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
        </div>
      </main>
      <footer>
        <p>Designed by: Jenners Acevedo</p>
      </footer>
    </div>
  )
}
