import ProductRow from "./ProductRow";
import styles from "../componentStyles.module.css"

type Product = {
  name: string,
  price: number,
  quantity:number
}

export default function ProductList( { productsArray }:{ productsArray:Product[] } ){

   return (
    <>
    <div className={styles.productList}>
      <div>
        <span>Nome</span>
        <span>Preço (US$)</span>
        <span>Quantidade</span>
        <span>Preço sugerido por peça (R$)</span>
      </div>
      {productsArray?.map((product,index) => <ProductRow key={index} product={product}/>)}
    </div>
    </>
  )
}