import Footer from "@/components/homepage/footer";
import ImageLoader from "@/components/imagecontaier";
import Nav from "@/components/navbar";
import { Card, CardBody, CardHeader, Image, Button } from "@nextui-org/react";
import { Prisma, PrismaClient } from "@prisma/client";

import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const prisma = new PrismaClient()
export default async function BlogPost({ params }) {
  const data = await prisma.product.findMany(
    {
        where:{
            id:Number(params.route)
        }
    }
  )
  return (<>
  <Nav></Nav>
    <Card className=" m-12  bg-white">
    {data.map((things)=>(
      <Card key={things.id} className="bg-white text-black font-bold">
        <CardHeader className=" text-4xl pt-10 px-36 uppercase ">
            {things.ProductName}
        </CardHeader>
        <CardBody className="flex justify-center p-16 pt-5 w-full">
            <div className="flex flex-row flex-nowrap">
              <div className="w-2/5 flex flex-col items-center justify-center"><ImageLoader  props={things.image} size={300}></ImageLoader>
              <span className=" flex justify-center text-3xl pt-12">Rs.{things.ProductPrice}</span></div>
            <span className="w-3/5 ">
              <p className="font-thin p-5">{things.ProductDescription}</p> 
              <p className="pt-5 font-mono flex justify-center">{things.ProductDetails}</p>
              <p className=" p-12">Dimensions={things.ProductSpecification}</p>
              <div className="w-full flex justify-center items-center gap-10">
                <p>Enquire at:<br></br>(for further details)</p>
              <a href="https://wa.me/message/3M73X7QMNJWVC1"><Button className="hover:scale-105 " variant="shadow" color="success" ><FaWhatsapp  size={30}/>Whatsapp</Button></a>
                <a href="mailto:trichup20@gamil.com"><Button className="hover:scale-105" variant="shadow" color="warning"><SiGmail size={30}/>Email</Button></a>
            
              </div>
              </span>

            </div>
            
        </CardBody>
      </Card>
  ))}</Card>
  <Footer></Footer>
  </>)
 }