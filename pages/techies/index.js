import Link from 'next/link';
import styles from '../../styles/techies.module.css'
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    return {
        props:{techies: data}
    }
}
const Ninja = ({techies}) => {
    return (
        <div>
            <h1>Techies</h1> 
            {techies.map(techie => (
                <div key={techie.id}>
                    <Link href={`/techies/${techie.id}`}>
                    <a className={styles.single}>
                        <h3>{techie.name}</h3>
                    </a>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default Ninja;