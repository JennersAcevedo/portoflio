'use client'
import React, { useState } from 'react';
import styles from "@/styles/switchButton.module.css";
import { setCookie } from "cookies-next";

const SwitchButton = ({ defaultChecked }) => {
  const [isOn, setIsOn] = useState(defaultChecked);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    handlerCookie();
   
  };

  const handlerCookie = async (req, res) => {
    if (isOn) {
      setCookie("language",'ESP')
      window.location.href = '/ESP';
    }else{
      setCookie("language",'EN')
      window.location.href = '/';
    }
    
  };

  return (
    <div className={`${styles.switchContainer} ${isOn ? styles.switchOn : styles.switchOff}`} onClick={toggleSwitch}>
     <div className={`${styles.switchTrack} ${isOn  ? styles.flagUs : styles.flagEs}`}>
      <div className={styles.switchThumb}>
        <label className={styles.switchLabel}>
          {isOn ? 'EN' : 'ES'}
        </label>
      </div>
    </div>
  </div>
  );
};

export default SwitchButton;
