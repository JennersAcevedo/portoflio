import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import 'bootstrap/dist/css/bootstrap.css'

export default function Navbar() {


  return (
    <div 
    className={styles.list}
    >
    
      <ul>
        <li>
          <Link id={styles.link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link id={styles.link} href="/about">
            About me
          </Link>
        </li>
        <li>
          <Link id={styles.link} href="/project">
            Projects
          </Link>
        </li>
        <li>
          <Link id={styles.contact} href="/contact">
            Contact me
          </Link>
        </li>
      </ul>
    </div>
  );
}