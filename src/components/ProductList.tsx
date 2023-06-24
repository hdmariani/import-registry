import ProductRow from "./ProductRow";

type Product = {
  name: string,
  price: number,
  quantity:number
}

export default function ProductList( { productList }: { productList:Product[]} ){
  return (
    <>
    <div>
      {productList.map(product => <ProductRow product={product}/>)}
    </div>
    </>
  )
}