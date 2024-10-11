import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import 'bootstrap/dist/css/bootstrap.css'
import React from "react";
export default function NavbarEsp() {
  return (
    <div 
    className={styles.list}
    >
      <ul>
        <li>
          <Link id={styles.link} href="/ESP">
            Inicio
          </Link>
        </li>
        <li>
          <Link id={styles.link} href="/ESP/about">
            Sobre mi
          </Link>
        </li>
        <li>
          <Link id={styles.link} href="https://github.com/JennersAcevedo">
            Proyectos
          </Link>
        </li>
        <li>
          <Link id={styles.contact} href="/ESP/contact">
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
}