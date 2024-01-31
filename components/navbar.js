import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faHouse,
  faPhone,
  faUser
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {


  return (
    <div 
    className={styles.list}
    >
    
      <ul>
        <li>
          <Link id={styles.link} href="/">
            {/* <FontAwesomeIcon icon={faHouse} /> Home */}
            Home
          </Link>
        </li>
        <li>
          <Link id={styles.link} href="/about">
            {/* <FontAwesomeIcon icon={faUser} />  */}
            About me
          </Link>
        </li>
        <li>
          <Link id={styles.link} href="/project">
            {/* <FontAwesomeIcon icon={faBriefcase} />  */}
            Projects
          </Link>
        </li>
        <li>
          <Link id={styles.link} href="/contact">
            {/* <FontAwesomeIcon icon={faPhone} />  */}
            Contact me
          </Link>
        </li>
      </ul>
    </div>
  );
}