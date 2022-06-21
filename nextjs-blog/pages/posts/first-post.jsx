import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);

export default function FirstPost() {
    return (
      <>
        <Head>
          <title>First Post</title>
        </Head>
        
        <h1>First Post</h1>
        <YourComponent />
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </>
    );
  }