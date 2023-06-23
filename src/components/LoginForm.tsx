import styles from './componentStyles.module.css'


export default function LoginForm(){
  return(
      <form className={styles.loginForm}>
          <label htmlFor="username">Usuário</label>
          <input
              type="text"
              id="username"
              name="username"
              required
          />
          <label htmlFor="password">Senha</label>
          <input
            type="text"
            id="password"
            name="password"
            required/>
      </form>
  )
}