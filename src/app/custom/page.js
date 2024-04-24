import Nav from "@/components/navbar"
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Custiomization(){
    
    return(
        <>
        <Nav></Nav>
        <Card shadow="none" className="bg-gray-200 m-4">
        <Card className="m-8 p-8 bg-white" shadow="sm" >
            <Image src="/custom/banner1.png"></Image>
        </Card>
        <Card className="m-8 p-8 bg-white" shadow="sm">
            <Image src="/custom/custom1.png"></Image>
        </Card>
        <Card className="m-8 p-8 bg-white" shadow="sm">
            <Image src="/custom/custom2.png"></Image>
        </Card>
        <Card className="m-8 p-8 bg-white" shadow="sm">
            <Image src="/custom/custom3.png"></Image>
        </Card>
        <Card className="m-8 p-8 bg-white" shadow="sm">
            <Image src="/custom/custom4.png"></Image>
        </Card>
        <Card className="m-8 p-8 bg-white" shadow="sm">
            <Image src="/custom/custom5.png"></Image>
        </Card>
        <Card className="m-8 p-8 bg-white" shadow="sm">
            <Image src="/custom/custom6.png"></Image>
        </Card>
        </Card>
        <Card shadow="none" className="bg-gray-200 m-4">
        <Card className="m-8 p-8 bg-white" shadow="sm">
            <Image src="/custom/banner2.png"></Image>
        </Card>
        <Card className="m-8 p-8 bg-white" shadow="sm">
            <Image src="/custom/utitled1.png"></Image>
        </Card>
        <Card className="m-8 p-8 bg-white" shadow="sm">
            <Image src="/custom/utitled2.png"></Image>
        </Card>
        <Card className="m-8 p-8 bg-white" shadow="sm">
            <Image src="/custom/utitled3.png"></Image>
        </Card>
        </Card>
        <Card className="flex justify-center items-center bg-white py-10" shadow="none"> 
            <CardBody className="w-3/6 flex flex-row gap-10 items-center justify-center"> 
                <a href="https://wa.me/message/3M73X7QMNJWVC1"><Button className="hover:scale-105 w-fit " variant="shadow" color="success" ><FaWhatsapp  size={30}/>Whatsapp</Button></a>
                <a href="mailto:trichup20@gamil.com"><Button className="hover:scale-105 w-fit" variant="shadow" color="warning"><SiGmail size={30}/>Email</Button>
                </a>
            </CardBody>
        </Card>
        </>
    )
}