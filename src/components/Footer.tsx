import styles from './componentStyles.module.css'

export default function Footer(){
    return (
        <>
          <footer className={styles.footer} > 
            <nav>
              <ul>
                <li>Contact us</li>
              </ul>
            </nav>
          </footer>
        </>
    )
}