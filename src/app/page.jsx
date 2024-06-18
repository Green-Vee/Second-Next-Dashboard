import Image from 'next/image';
import styles from './home.module.css'
import Link from 'next/link';


const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>  
      <h1 className={styles.title}>Creative Thoughts Agency</h1>
      <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim atque quisquam doloribus perspiciatis </p>

      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <Link href="/contact" className={styles.button}>Contact</Link>
      </div>

      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg} />
      </div>

    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" className={styles.heroImg} fill />
    </div>
  </div>;
};

export default Home;