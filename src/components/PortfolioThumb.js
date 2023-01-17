import Image from 'next/image';
import styles from '../styles/PortfolioThumb.module.css';

export default function PortfolioThumb(props) {
    return (
        <div className={styles.container}>
            <Image
                className={styles.thumbnail}
                src='/images/react-battleship/bs-progress.jpg'
                width={900}
                height={600}
                alt='React Battleship'
            />
            <div className={styles.title}>{props.name}</div>
        </div>
    )
}
