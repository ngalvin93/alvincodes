import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

const name = 'Alvin Ng';

export default function Navbar () {
    return (
        <div className={styles.navbarContainer}>
            <Image
                className={styles.profileImage}
                priority
                src='/images/profile.jpg'
                height={200}
                width={200}
                alt={name}
            />
            <h1 className={styles.myName}>Alvin Ng</h1>
            {/* <div className={styles.navItems}>
                <a>Portfolio</a>
                <a>About</a>
                <a>Contact</a>
            </div> */}
            <div className={styles.myBio}>
                <p>Hello, I&apos;m <strong>Alvin</strong>. I&apos;m currently a software engineer at <a href='https://michealthcare.com/'>Medical Informatics Corp</a>. Take a look around and reach out to me if you have any questions.</p>
            </div>
        </div>
    )
}