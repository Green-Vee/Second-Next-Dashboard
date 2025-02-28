import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";

const NavBar = async () => { 
  const session = await auth();
  
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        ThunderMedia
      </Link>
      <Links session={session} />
    </div>
  );
};

export default NavBar;
