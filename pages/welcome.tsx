import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Welcome.module.css';


const welcome = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const getCurrentDate = () => {
      const date = new Date();
      setCurrentDate(date.toDateString());
    };
    getCurrentDate();
  }, []);

return (
    <div className={styles['page']}>
      <p className={styles['greeting']}>Welcome to Next.js with TypeScript!</p>
      <p className={styles['date']}>{currentDate}</p>
    </div>
  );
};

export default welcome;
