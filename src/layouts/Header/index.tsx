import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import { CloseIcon, MenuIcon } from '@components/Common/icons';
import { Drawer } from '@components/Common';
import useScroll from '@hooks/useScroll';

import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from '@hooks';

const menuList = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/about',
    label: 'About Us',
  },
  {
    link: '/services',
    label: 'Services',
  },
  {
    link: '/blogs',
    label: 'Blog',
  },
  // {
  //   link: '/pages',
  //   label: 'Pages',
  // },
  {
    link: '/contact',
    label: 'Contact',
  },
];

export const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [showLinkDrawer, setShowLinkDrawer] = useState(false);

  const scroll = useScroll();
  const { isMobile } = useWindowSize();

  const handleClick = () => {
    setShowLinkDrawer((prevState) => !prevState);
  };

  const handleClose = () => setShowLinkDrawer(false);

  return (
    <header
      className={classnames(
        'w-full relative md:absolute left-0 top-0',
        'transition-all duration-500 z-[1030] px-6 md:px-12 border-b border-[#FFFFFF1A]',
        styles.siteHeader,
        scroll > 100 && !isMobile && '!fixed bg-white !border-b-0 shadow-md'
      )}
    >
      <div className="h-full flex items-center w-full justify-between">
        <Link
          href="/"
          className={classnames('flex items-center gap-2 text-primary md:text-white', {
            'text-primary': scroll > 100,
          })}
        >
          <img src="/assets/images/logo-full.svg" />
        </Link>
        <div className="hidden w-full md:flex justify-end items-center space-x-6">
          {menuList.map((menu) => (
            <a
              key={menu.label}
              href={menu.link}
              className={classnames(
                'text-white text-4.5 transition-all flex items-center py-9 font-semibold hover:text-primary border-b-[3px] border-transparent hover:border-primary',
                { '!text-primary !border-primary': currentRoute === menu.link },
                { '!py-5 text-primary-dark': scroll > 100 }
              )}
            >
              {menu.label}
            </a>
          ))}
        </div>
        <div className="flex md:hidden justify-end items-center h-16">
          <i
            className={classnames('cursor-pointer hover:text-white z-[60] header-link')}
            onClick={handleClick}
          >
            {showLinkDrawer ? (
              <CloseIcon size={30} />
            ) : (
              <MenuIcon size={30} className="text-primary pt-1" />
            )}
          </i>
        </div>
        <Drawer open={showLinkDrawer} isFullWidth handleClose={handleClose} hideCloseButton={true}>
          <div className="section-content">
            <div className="main-menu pt-[120px] sm:pt-[100px] flex flex-col items-start text-primary text-right">
              {menuList.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  className={classnames(
                    'py-2 text-2xl font-bold transition-all duration-300 leading-tight',
                    'hover:text-red'
                  )}
                  onClick={() => setShowLinkDrawer(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
};
