import styles from './componentStyles.module.css'

export default function Main({
    props,
  }: {
    props: React.ReactNode
  }) {
    return (
       <main className={styles.main}>
        {props}
       </main> 
        )
}
