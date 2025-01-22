import React from 'react'
import Header from '@/components/header'
import Image from 'next/image'
import Icon from '@/public/Meubel_House_Logos-05.svg'
import Footer from '@/components/footer'


const Contact = () => {
  return (
    <div className='poppins'>
        <Header/>
        <div className='hero'>
            <Image src="/shop_1.svg" alt='' fill={true} className='bg-img '/>
            <div className='flex flex-col items-center py-32'>
                <Image src={Icon} alt="" width={80} height={80} className='mb-2'/>
                <h1 className='text-5xl font-bold'>Contact</h1>
                <div className='flex flex-row pt-6'>
                    <h1 className='text-lg font-medium'>Home </h1>
                    <Image src="/right_arrow.svg" alt="" width={10} height={10} className="ml-2" />
                    <h1 className='text-lg ml-2 font-light'> Contact</h1>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-semibold mt-28'>Get In Touch With Us</h1>
            <p className='text-lg text-[#9F9F9F] mt-5 mx-[600px] text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
            Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        <div className='flex flex-row'>
            <div className='w-1/2'>
                <div className='flex flex-col'>
                    <div className='flex flex-row'>
                        <Image src="/location.svg" alt='' width={25} height={25} className='ml-64 mt-32'/>
                        <h1 className='text-2xl font-medium ml-10 mt-44'>Address</h1>
                    </div>
                    <p className='ml-80 mt-3 mr-96 text-lg'>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
                <div className='flex flex-col mt-14'>
                    <div className='flex flex-row'>
                        <Image src="/phone.svg" alt='' width={25} height={25} className='ml-64'/>
                        <h1 className='text-2xl font-medium ml-10 '>Phone</h1>
                    </div>
                    <p className='ml-80 mt-3 mr-96 text-lg'>Mobile: +(84) 546-6789</p>
                    <p className='ml-80 mt-1 mr-96 text-lg'>Hotline: +(84) 456-6789</p>
                </div>
                <div className='flex flex-col mt-14'>
                    <div className='flex flex-row'>
                        <Image src="/clock.svg" alt='' width={25} height={25} className='ml-64'/>
                        <h1 className='text-2xl font-medium ml-10 '>Working Time</h1>
                    </div>
                    <p className='ml-80 mt-3 mr-96 text-lg'>Monday-Friday: 9:00 - 22:00</p>
                    <p className='ml-80 mt-1 mr-96 text-lg'>Saturday-Sunday: 9:00 - 21:00</p>
                </div>  
            </div>
            <div className='w-1/2'>
                <div className='flex flex-col ml-16'>
                    <h1 className='mt-40 text-lg'>Your name</h1>
                    <input type="text" className='border border-[#9F9F9F] w-[500px] h-[75px] mt-6 rounded-xl pl-10' placeholder='Abc' />

                    <h1 className='mt-16 text-lg'>Email address</h1>
                    <input type="text" className='border border-[#9F9F9F] w-[500px] h-[75px] mt-6 rounded-xl pl-10' placeholder='Abc@def.com' />
                
                    <h1 className='mt-16 text-lg'>Subject</h1>
                    <input type="text" className='border border-[#9F9F9F] w-[500px] h-[75px] mt-6 rounded-xl pl-10' placeholder='This is an optional' />

                    <h1 className='mt-16 text-lg'>Message</h1>
                    <input type="text" className='border border-[#9F9F9F] w-[550px] h-[120px] mt-6 rounded-xl pl-10 pb-10' placeholder='Hi! i’d like to ask about' />

                    <button className='bg-[#B88E2F] w-60 h-16 rounded-md text-white mt-16 '>Submit</button>
                </div>
            </div>
        </div>

        <div className='bg-[#FAF3EA] py-28 flex flex-row pl-32 mt-32 mb-5'>
            <div className='flex flex-row'>
                <Image src="/trophy1.svg" alt='' width={70} height={70}/>
                <div className='ml-4'>
                    <h1 className='text-2xl font-semibold'>High Quality</h1>
                    <h2 className='text-xl text-[#898989] font-medium mt-2'>crafted from top materials</h2>
                </div>
            </div>
            <div className='flex flex-row ml-32'>
                <Image src="/tick.svg" alt='' width={70} height={70}/>
                <div className='ml-4'>
                    <h1 className='text-2xl font-semibold'>Warranty Protection</h1>
                    <h2 className='text-xl text-[#898989] font-medium mt-2'>Over 2 years</h2>
                </div>
            </div>
            <div className='flex flex-row ml-32'>
                <Image src="/free_ship.svg" alt='' width={70} height={70}/>
                <div className='ml-4'>
                    <h1 className='text-2xl font-semibold'>Free Shipping</h1>
                    <h2 className='text-xl text-[#898989] font-medium mt-2'>Order over 150 $</h2>
                </div>
            </div>
            <div className='flex flex-row ml-32'>
                <Image src="/support.svg" alt='' width={70} height={70}/>
                <div className='ml-4'>
                    <h1 className='text-2xl font-semibold'>24 / 7 Support</h1>
                    <h2 className='text-xl text-[#898989] font-medium mt-2'>Dedicated support</h2>
                </div>
            </div>
        </div>

        <Footer/>
        
    </div>
  )
}

export default Contact