import styles from './componentStyles.module.css'
import Link from 'next/link'

export default function Header(){
return (
    <>
      <header className={styles.header} > 
        <nav>
          <ul>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/new-import">New Import</Link></li>
            <li><Link href="/search-import">View Import</Link></li>
          </ul>
        </nav>
      </header>
    </>
)
}