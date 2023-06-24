'use client'
import ImportForm from '@/components/ImportForm'
import styles from './page.module.css'



type Product = {
  name:string,
  price: number,
  quantity:number
}
type ProductsArray = Array<Product>

const mockProduct = {
  name: "teste",
  price: 23,
  quantity: 2
}




export default function Home() {
  return (
    <>
      <ImportForm/>
    </>
  )
}