
import { useRef, useState } from 'react';
import styles from './componentStyles.module.css'
import ProductList from './ProductList';

type Product = {name:string, price:number, quantity: number};
const initialProduct = {name:'', price:0, quantity:0};


export default function ImportForm() {
  let formRef = useRef<HTMLFormElement>(null);

  let [productList, setProductList] = useState<Product[]>([initialProduct])

  const getProductValues = () => {
    let product:Product = initialProduct;
    product.name = formRef?.current?.productName.value,
    product.price = +formRef?.current?.price.value,
    product.quantity = +formRef.current?.quantity.value
    return product
 }

 const addProductHandler = () => {
  let newProduct = getProductValues();
  setProductList([...productList, newProduct])
 };
  return (
    <>
      <form ref={formRef}className={styles.importForm}>
        <h2>Informações do pedido</h2>
        <label htmlFor='shipping'>Frete</label>
        <input
          id='shipping'
        />
        <label htmlFor='taxes'>Impostos</label>
        <input
          id='taxes'
        />
        <label htmlFor='productName'>Nome do Produto</label>
        <input
          id='productName'
          placeholder="Nome do produto"
        />
        <label htmlFor='price'>Preço do Produto</label>
        <input
          id='price'
        />
        <label htmlFor='quantity'>Quantidade</label>
        <input
          id='quantity'
        />
      </form>
      <button onClick={addProductHandler}>Adicionar Produto</button>
      <ProductList productList={productList}/>
    </>
  );
}