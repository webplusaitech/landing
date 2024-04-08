import React, { FC } from 'react';
import Link from 'next/link';

interface TopBannerProps {
  title: string;
  name: string;
}

const TopBanner: FC<TopBannerProps> = ({ title, name }) => {
  return (
    <div className="bg-header bg-primary py-12">
      <div className="py-12">
        <div className="container mx-auto md:pt-12 md:mt-12">
          <h1 className="text-white font-extrabold text-10 md:text-14 text-center">{title}</h1>
          <div className="flex items-center gap-2 justify-center text-white text-5">
            <Link href="/">Home</Link>
            <span className="w-4 h-4 rounded-full border-2 border-white"></span>
            <Link href="#">{name}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
