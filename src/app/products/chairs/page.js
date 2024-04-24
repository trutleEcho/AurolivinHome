import Nav from "@/components/navbar"
import Footer from "@/components/homepage/footer"
import ProductDisplay from "@/components/productDisplay"
import ProductPage from "@/components/products/productPage"
import {  PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export default async function chairs(){
    const data = await prisma.product.findMany(
        {
            where:{
                catagoryId: 1
            },
            include:{
                catagory:true
            }
        }
    )
    return(
        <>
        <Nav></Nav>
            <section className="px-2 my-8 md:mx-36 md:my-20 flex flex-row flex-wrap border justify-center"> 
                
                {data.map((item)=>(
                            <div className=" flex justify-center py-5" key={item.id}>
                                <ProductDisplay props={`${item.image}`}  name={item.ProductName} desc={item.ProductPrice} size={300} url={`./chairs/${item.id}`}/>
                            </div>
                    ))
                }
            </section>
        <Footer></Footer>
        </>
    )
}