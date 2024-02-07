import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image";

export default function Navbar() {
  const imageStyle = {
    borderRadius: '50%',
    border: '3px solid #fff',
  }

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