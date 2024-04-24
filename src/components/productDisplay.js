import ImageLoader from '@/components/imagecontaier';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
export default function ProductDisplay({props,size,desc,name,url}) {
    return(
    <Link href={`${url}`}>
        <button className='hover:scale-110 duration-500'>
            <Card className='w-4/5 p-5 mx-2 md:mx-10 bg-gray-100'>
            <CardBody>
                <ImageLoader props={props} size={size}/>
                <Divider className='mt-3 bg-slate-700'/>
                <div className="flex flex-col items-center justify-center pt-3">
                    <span className=' font-light text-black text-2xl'>{name}</span>
                    <Divider className='bg-gray-400 w-2/6'></Divider>
                    <span className='text-small font-light text-black pt-5'>Rs.{desc}</span>
                </div>
            </CardBody>
            <CardFooter>

            </CardFooter>
        </Card>
        </button>
        </Link>
    )
}   