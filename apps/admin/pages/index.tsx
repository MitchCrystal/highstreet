import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Button from '../components/Button';

const inter = Inter({ subsets: ['latin'] });

const menuItems = [
  {
    id: 'Sign Up',
    name: 'Sign Up',
    href: '/sign-up',
  },
  {
    id: 'Sign In',
    name: 'Sign In',
    href: '/sign-in',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi Street</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-[calc(100vh-0px)] relative overflow-hidden">
        <div className="absolute top-2 right-2 z-20">
          <Link href={`/auth/sign-in`}>
            <Button size="xl" appearance="homepage" type="button">
              My Account
            </Button>
          </Link>
        </div>
        <div className=" flex mx-5 sm:mx-10 absolute z-20 top-[15%]  sm:font-normal text-white text-3xl sm:text-6xl md:text-7xl lg:text-8xl">
          Say hi... to
          <img
            src={'/histreet-yellow-square.png'}
            alt="Hi Street"
            className="w-9 sm:w-[120px] sm:pr-2 ml-3 mr-1 sm:ml-9 sm:mr-0"
          />
          HiStreet
        </div>
        <h2 className="mx-5 sm:mx-10 absolute z-20 top-[25%] xl:top-[30%] sm:text-2xl md:text-3xl lg:text-4xl text-white">
          Probably the UK&apos;s finest customisable storefront for your
          business
        </h2>
        <h2 className="mx-5 sm:mx-10 absolute z-[70] text-sm top-[70%] xl:top-[65%] sm:text-2xl md:text-3xl lg:text-4xl text-white bg-opacity-50 bg-black p-4 sm:p-10 w-28 sm:w-3/6">
          Name your store and also set the contact email address!
        </h2>
        <img
          src={'/k8-wl8zWRwoQtE-unsplash.jpg'}
          alt={'Hi Street'}
          className="sm:w-[100vw] object-cover h-full"
        />
        <div className="absolute top-[40%] z-20 mx-5 sm:mx-10">
          <Link href={`/auth/sign-up`}>
            <Button size="xxl" appearance="homepage" type="button">
              Sign Up Now
            </Button>
          </Link>
        </div>
        <div className="absolute top-0 bg-black bg-opacity-40 h-full w-full z-10"></div>
        <p className="absolute bottom-0 text-white text-xs sm:text-base">
          Photo by Luca Vavassori on Unsplash
        </p>
        <img
          src={'/custom_product.png'}
          alt={'Custom Store'}
          className="w-[55vw] sm:w-[30vw] absolute bottom-28 right-[-20px] sm:bottom-80 sm:right-[-70px] z-40 border-black border"
        />
        <img
          src={'/custom_store.png'}
          alt={'Custom Store'}
          className="w-[55vw] sm:w-[30vw] absolute bottom-8 right-8 sm:bottom-20 sm:right-20 z-50 border-black border"
        />
        <img
          src={'/custom_products.png'}
          alt={'Custom Store'}
          className="w-[30vw] sm:w-[10vw] absolute bottom-2 right-2 2xl:bottom-[10px] 2xl:right-[10px] z-[60] border-black border"
        />
        {/* <div className="z-20 h-0 w-0 bottom-0 right-0 absolute border-solid border-t-[0px] border-l-[370px] sm:border-l-[640px] border-b-[200px] sm:border-b-[400px] border-r-[0px] border-t-transparent border-l-transparent border-b-white border-r-transparent"></div> */}
      </div>
      {/* <div className="h-[208px] bg-gray-800"></div> */}
    </>
  );
}
