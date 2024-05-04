import {Image} from "@nextui-org/react";
import {Card,CardHeader} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import Link from "next/link";
export default function FabricationPrducts(){
    return(
        <>
        <Card className="bg-white my-20 mx-20">
            <CardHeader className="text-black text-4xl pl-20 pt-16">Fabrictaions</CardHeader>
            <Divider className="bg-black ml-20"/>
        <section className=" h-fit w-full p-10 grid gap-10 grid-cols-6 grid-rows-8">
            <div className="row-span-8 col-span-3">
                <button><Link href="./custom"><Image radius="sm" src="./fabrication/staircaserailing.png"></Image></Link></button>
            </div>
            <div className="row-span-3 col-span-1">
                <button><Link href="./custom"><Image radius="sm" src="./fabrication/metalFacade.png"></Image></Link></button>
            </div>
            <div className="row-span-3 col-span-1">
                <button><Link href="./custom"><Image radius="sm" src="./fabrication/railing.png"></Image></Link></button>
            </div>
            <div className="row-span-3 col-span-1">
                <button><Link href="./custom"><Image radius="sm" src="./fabrication/roomPartition.png"></Image></Link></button>
            </div>
            <div className="row-span-6 col-span-3">
                <button><Link href="./custom"><Image radius="sm" src="./fabrication/metalCeiling.png"></Image></Link></button>
            </div>   


        </section>
        </Card>
        </>
    )
}