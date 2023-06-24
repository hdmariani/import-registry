import styles from './componentStyles.module.css'

type Product = {
  name:string,
  price:number,
  quantity:number
}


export default function ProductRow({ product }: {product: Product} ){
  return (
    <>
      <div className={styles.productRow}>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.quantity}</div>
      </div>
    </>
  )
}