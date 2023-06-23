import styles from './componentStyles.module.css'

export default function ImportForm() {
  return (
    <>
      <form className={styles.importForm}>
        <h2>Informações do pedido</h2>
        <label htmlFor='shipping'>
          Frete
        </label>
        <input
          id='shipping'
        />
        <label htmlFor='taxes'>
          Impostos
        </label>
        <input
          id='taxes'
        />
        <label htmlFor='product'>
          Produto
        </label>
        <input
          id='product'
          placeholder="Nome do produto"
        />
      </form>
    </>
  )
}