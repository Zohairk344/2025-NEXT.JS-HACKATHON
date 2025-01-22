import React from 'react';
import Header from '@/components/header';
import Image from 'next/image';
import Icon from '@/public/Meubel_House_Logos-05.svg';
import Search_Icon from '@/public/icons_search.svg';
import Footer from '@/components/footer';

const Blog = () => {
  return (
    <div className='poppins'>
      <Header />

      {/* Hero Section */}
      <div className='hero relative h-64 md:h-96'>
        <Image src="/shop_1.svg" alt='' fill className='object-cover' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
          <Image src={Icon} alt="" width={80} height={80} className='mb-2' />
          <h1 className='text-4xl md:text-5xl font-bold'>Blog</h1>
          <div className='flex flex-row pt-6'>
            <h1 className='text-lg font-medium'>Home </h1>
            <Image src="/right_arrow.svg" alt="" width={10} height={10} className="ml-2" />
            <h1 className='text-lg ml-2 font-light'> Blog</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8'>
        {/* Left Side (Blog Posts) */}
        <div className='w-full md:w-2/3'>
          {/* Blog Post 1 */}
          <div className='mb-16'>
            <Image src="/rectangle_68.svg" alt='' width={1000} height={500} className='w-full' />
            <div className='flex flex-row mt-6'>
              <Image src="/person.svg" alt='' width={20} height={20} className='mr-3' />
              <p className='text-lg text-[#9F9F9F]'>Admin</p>
              <Image src="/calender.svg" alt='' width={20} height={20} className='mr-3 ml-10' />
              <p className='text-lg text-[#9F9F9F]'>14 Oct 2022</p>
              <Image src="/tag.svg" alt='' width={20} height={20} className='mr-3 ml-10' />
              <p className='text-lg text-[#9F9F9F]'>Wood</p>
            </div>

            <h1 className='text-2xl md:text-3xl font-medium mt-10'>Going all-in with millennial design</h1>
            <p className='text-[#9F9F9F] mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
              Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>

            <h1 className='text-lg mt-14'>Read more</h1>
            <div className='my-2 w-24'>
              <Divider />
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className='mb-16'>
            <Image src="/rectangle_67.svg" alt='' width={1000} height={500} className='w-full' />
            <div className='flex flex-row mt-6'>
              <Image src="/person.svg" alt='' width={20} height={20} className='mr-3' />
              <p className='text-lg text-[#9F9F9F]'>Admin</p>
              <Image src="/calender.svg" alt='' width={20} height={20} className='mr-3 ml-10' />
              <p className='text-lg text-[#9F9F9F]'>14 Oct 2022</p>
              <Image src="/tag.svg" alt='' width={20} height={20} className='mr-3 ml-10' />
              <p className='text-lg text-[#9F9F9F]'>Handmade</p>
            </div>

            <h1 className='text-2xl md:text-3xl font-medium mt-10'>Exploring new ways of decorating</h1>
            <p className='text-[#9F9F9F] mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
              Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>

            <h1 className='text-lg mt-14'>Read more</h1>
            <div className='my-2 w-24'>
              <Divider />
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className='mb-16'>
            <Image src="/rectangle_66.svg" alt='' width={1000} height={500} className='w-full' />
            <div className='flex flex-row mt-6'>
              <Image src="/person.svg" alt='' width={20} height={20} className='mr-3' />
              <p className='text-lg text-[#9F9F9F]'>Admin</p>
              <Image src="/calender.svg" alt='' width={20} height={20} className='mr-3 ml-10' />
              <p className='text-lg text-[#9F9F9F]'>14 Oct 2022</p>
              <Image src="/tag.svg" alt='' width={20} height={20} className='mr-3 ml-10' />
              <p className='text-lg text-[#9F9F9F]'>Handmade</p>
            </div>

            <h1 className='text-2xl md:text-3xl font-medium mt-10'>Handmade pieces that took time to make</h1>
            <p className='text-[#9F9F9F] mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
              Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>

            <h1 className='text-lg mt-14'>Read more</h1>
            <div className='my-2 w-24'>
              <Divider />
            </div>
          </div>

          {/* Pagination */}
          <div className='flex flex-row justify-center gap-4 my-16'>
            <button className='w-16 h-16 bg-[#B88E2F] rounded-xl text-white'>1</button>
            <button className='w-16 h-16 bg-[#F9F1E7] rounded-xl'>2</button>
            <button className='w-16 h-16 bg-[#F9F1E7] rounded-xl'>3</button>
            <button className='w-24 h-16 bg-[#F9F1E7] rounded-xl'>Next</button>
          </div>
        </div>

        {/* Right Side (Sidebar) */}
        <div className='w-full md:w-1/3 mt-12 md:mt-0'>
          {/* Search Bar */}
          <div className='w-full h-16 border-2 rounded-xl flex items-center justify-end pr-4'>
            <Image src={Search_Icon} alt='' width={20} height={20} />
          </div>

          {/* Categories */}
          <h1 className='text-2xl font-medium mt-14'>Categories</h1>
          <div className='text-lg text-[#9F9F9F] flex flex-row justify-between mt-6'>
            <h1>Crafts</h1>
            <p>2</p>
          </div>
          <div className='text-lg text-[#9F9F9F] flex flex-row justify-between mt-6'>
            <h1>Design</h1>
            <p>8</p>
          </div>
          <div className='text-lg text-[#9F9F9F] flex flex-row justify-between mt-6'>
            <h1>Handmade</h1>
            <p>7</p>
          </div>
          <div className='text-lg text-[#9F9F9F] flex flex-row justify-between mt-6'>
            <h1>Interior</h1>
            <p>1</p>
          </div>
          <div className='text-lg text-[#9F9F9F] flex flex-row justify-between mt-6'>
            <h1>Wood</h1>
            <p>6</p>
          </div>

          {/* Recent Posts */}
          <h1 className='text-2xl font-medium mt-14'>Recent Posts</h1>
          <div className='flex flex-row mt-6'>
            <Image src="/rectangle_65.svg" alt='' width={100} height={100} className='rounded-lg' />
            <div className='flex flex-col ml-4'>
              <h1 className='text-lg'>Going all-in with millennial design</h1>
              <p className='text-[#9F9F9F] mt-2'>03 Aug 2022</p>
            </div>
          </div>
          <div className='flex flex-row mt-6'>
            <Image src="/rectangle_64.svg" alt='' width={100} height={100} className='rounded-lg' />
            <div className='flex flex-col ml-4'>
              <h1 className='text-lg'>Exploring new ways of decorating</h1>
              <p className='text-[#9F9F9F] mt-2'>03 Aug 2022</p>
            </div>
          </div>
          <div className='flex flex-row mt-6'>
            <Image src="/rectangle_63.svg" alt='' width={100} height={100} className='rounded-lg' />
            <div className='flex flex-col ml-4'>
              <h1 className='text-lg'>Handmade pieces that took time to make</h1>
              <p className='text-[#9F9F9F] mt-2'>03 Aug 2022</p>
            </div>
          </div>
          <div className='flex flex-row mt-6'>
            <Image src="/rectangle_62.svg" alt='' width={100} height={100} className='rounded-lg' />
            <div className='flex flex-col ml-4'>
              <h1 className='text-lg'>Modern home in Milan</h1>
              <p className='text-[#9F9F9F] mt-2'>03 Aug 2022</p>
            </div>
          </div>
          <div className='flex flex-row mt-6'>
            <Image src="/rectangle_61.svg" alt='' width={100} height={100} className='rounded-lg' />
            <div className='flex flex-col ml-4'>
              <h1 className='text-lg'>Colorful office redesign</h1>
              <p className='text-[#9F9F9F] mt-2'>03 Aug 2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className='bg-[#FAF3EA] py-16'>
        <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8'>
          <div className='flex flex-row items-center'>
            <Image src="/trophy1.svg" alt='' width={70} height={70} />
            <div className='ml-4'>
              <h1 className='text-2xl font-semibold'>High Quality</h1>
              <h2 className='text-xl text-[#898989] font-medium mt-2'>crafted from top materials</h2>
            </div>
          </div>
          <div className='flex flex-row items-center'>
            <Image src="/tick.svg" alt='' width={70} height={70} />
            <div className='ml-4'>
              <h1 className='text-2xl font-semibold'>Warranty Protection</h1>
              <h2 className='text-xl text-[#898989] font-medium mt-2'>Over 2 years</h2>
            </div>
          </div>
          <div className='flex flex-row items-center'>
            <Image src="/free_ship.svg" alt='' width={70} height={70} />
            <div className='ml-4'>
              <h1 className='text-2xl font-semibold'>Free Shipping</h1>
              <h2 className='text-xl text-[#898989] font-medium mt-2'>Order over 150 $</h2>
            </div>
          </div>
          <div className='flex flex-row items-center'>
            <Image src="/support.svg" alt='' width={70} height={70} />
            <div className='ml-4'>
              <h1 className='text-2xl font-semibold'>24 / 7 Support</h1>
              <h2 className='text-xl text-[#898989] font-medium mt-2'>Dedicated support</h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const Divider = () => {
  return <hr style={{ borderTop: "3px solid lightgrey" }}></hr>;
};

export default Blog;