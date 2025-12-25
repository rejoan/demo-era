import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1 className="text-center text-2xl/9 font-bold tracking-tight pb-10">Sharqia Development Authority</h1>
        <div className={styles.ctas}>
        <Link className={styles.primary} href="/login">Login</Link> 
        </div>
      </main>
    </div>
  );
}
