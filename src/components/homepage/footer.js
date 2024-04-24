import React from "react";
import { SlSocialFacebook,SlSocialGoogle,SlSocialInstagram,SlSocialLinkedin,SlSocialTwitter } from "react-icons/sl";
import { FaCcVisa,FaCcAmazonPay,FaCcApplePay,FaCcMastercard,FaCcPaypal } from "react-icons/fa";
import { Button, Link } from "@nextui-org/react";
export default function Footer(){
    return(<>
    <section className="bg-black h-72 flex w-full">
        <div className="h-full w-2/5 flex flex-col text-center ">
            <span className="w-full text-3xl py-6">Follow us</span>
            <div className=" flex justify-evenly">
            <Button isIconOnly variant="light" className="m-2 p-2" href="#"><SlSocialFacebook size={30}/></Button>
            <Button isIconOnly variant="light" className="m-2 p-2"><SlSocialGoogle size={30}/></Button>
            <Button isIconOnly variant="light" className="m-2 p-2"><Link href="https://www.instagram.com/aurolivin/"><SlSocialInstagram size={30}/></Link></Button>
            <Button isIconOnly variant="light" className="m-2 p-2"><SlSocialLinkedin size={30}/></Button>
            <Button isIconOnly variant="light" className="m-2 p-2"><SlSocialTwitter size={30}/></Button>
            </div>
        </div>
        <div className="h-full w-2/5 flex flex-col text-center ">
            <span className="w-full text-3xl py-6">Contacts us</span>
            <div>
                <span>
                    <span className="font-thin">OFFICE ADDRESS:</span><br/>
                    DSK Vishwa Rd, Opposite to Savitri garden,<br/>
                    Dhayari, Pune, Maharashtra 411041<br/><br/>
                    <span>Email  :  aurolivinhome@gmail.com</span><br/><br/>
                    <span>Mobile no: +91- 8600997774</span>
                </span>
            </div>
        </div>
        <div className="h-full w-2/5 flex flex-col text-center ">
            <span className="w-full text-3xl py-6">We accept</span>
            <div className="mx-36 flex gap-5">
            <FaCcAmazonPay size={50}/>
            <FaCcApplePay size={50}/>
            <FaCcVisa size={50}/>
            <FaCcMastercard size={50}/>
            <FaCcPaypal size={50}/>   
            </div>
        </div>

    </section>
    </>)
}