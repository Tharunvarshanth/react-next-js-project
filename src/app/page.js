"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [userId, setUserId] = useState("1");

  useEffect(() => {
    setUserId("2");
  }, []);
  return <main className={styles.main}>{userId}</main>;
}
