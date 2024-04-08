import React, { useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { ArrowDownIcon, CloseIcon, ContactIcon, MenuIcon } from '@components/Common/icons';
import { Button, Drawer } from '@components/Common';

import styles from './styles.module.css';
import useScroll from '@hooks/useScroll';

const menuList = [
  {
    link: '/',
    label: 'Home',
    children: [
      {
        label: 'Item 1',
        link: '#',
      },
      {
        label: 'Item 2',
        link: '#',
      },
      {
        label: 'Item 3',
        link: '#',
      },
      {
        label: 'Item 4',
        link: '#',
      },
      {
        label: 'Item 5',
        link: '#',
      },
    ],
  },
  {
    link: '/about',
    label: 'About Us',
  },
  {
    link: '/pages',
    label: 'Pages',
    children: [
      {
        label: 'Item 1',
        link: '#',
      },
      {
        label: 'Item 2',
        link: '#',
      },
      {
        label: 'Item 3',
        link: '#',
      },
      {
        label: 'Item 4',
        link: '#',
      },
      {
        label: 'Item 5',
        link: '#',
      },
    ],
  },
  {
    link: '/services',
    label: 'Services',
    children: [
      {
        label: 'Item 1',
        link: '#',
      },
      {
        label: 'Item 2',
        link: '#',
      },
      {
        label: 'Item 3',
        link: '#',
      },
      {
        label: 'Item 4',
        link: '#',
      },
      {
        label: 'Item 5',
        link: '#',
      },
    ],
  },
  {
    link: '/blog',
    label: 'Blog',
    children: [
      {
        label: 'Item 1',
        link: '#',
      },
      {
        label: 'Item 2',
        link: '#',
      },
      {
        label: 'Item 3',
        link: '#',
      },
      {
        label: 'Item 4',
        link: '#',
      },
      {
        label: 'Item 5',
        link: '#',
      },
    ],
  },
  {
    link: '/shop',
    label: 'Shop',
    children: [
      {
        label: 'Item 1',
        link: '#',
      },
      {
        label: 'Item 2',
        link: '#',
      },
      {
        label: 'Item 3',
        link: '#',
      },
      {
        label: 'Item 4',
        link: '#',
      },
      {
        label: 'Item 5',
        link: '#',
      },
    ],
  },
  {
    link: '/contact',
    label: 'Contact',
    children: [
      {
        label: 'Item 1',
        link: '#',
      },
      {
        label: 'Item 2',
        link: '#',
      },
      {
        label: 'Item 3',
        link: '#',
      },
      {
        label: 'Item 4',
        link: '#',
      },
      {
        label: 'Item 5',
        link: '#',
      },
    ],
  },
];

export const Header = () => {
  const [showLinkDrawer, setShowLinkDrawer] = useState(false);

  const scroll = useScroll();

  const handleClick = () => {
    setShowLinkDrawer((prevState) => !prevState);
  };

  const handleClose = () => setShowLinkDrawer(false);

  return (
    <header
      className={classnames(
        'w-full h-22.5',
        'transition-all duration-500 z-[1030] bg-white pr-10',
        styles.siteHeader,
        scroll > 100 && 'fixed top-0'
      )}
    >
      <div className="h-full flex items-center w-full justify-between">
        <div className="h-full z-20 px-10 inline-flex justify-center items-center">
          <Link href="/" passHref className="w-35">
            <img className="" src="/assets/images/services/logo.png" alt="Truer Consulting" />
          </Link>
        </div>
        <div className="hidden w-full h-full md:flex justify-end items-center space-x-5">
          {menuList.map((menu) => (
            <li key={menu.label} className="relative list-none group h-full flex items-center">
              <a
                href={menu.link}
                className="text-black-100 text-sm transition-all flex items-center px-4 py-2 font-semibold hover:text-blue-dark uppercase gap-2"
              >
                {menu.label}
                {menu.children && <ArrowDownIcon size={15} />}
              </a>
              {menu.children && (
                <div className="group-hover:block dropdown-menu absolute hidden h-auto top-22.5">
                  <ul className="top-0 w-48 bg-blue-dark shadow">
                    {menu.children.map((submenu, index) => (
                      <li
                        className={classnames(
                          'px-6 py-3 border-b border-white',
                          index === menu.children.length - 1 && 'border-b-0'
                        )}
                        key={submenu.label}
                      >
                        <a
                          className="block text-white text-base hover:text-blue-200 cursor-pointer"
                          href={submenu.link}
                        >
                          {submenu.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
          <div className="flex items-center gap-3">
            <ContactIcon />
            <div>
              <p className="text-4">Free Consultancy</p>
              <a
                href="tel:+0099807804"
                className="font-bold text-primary-dark hover:text-blue-dark trnasition-all duration-300"
              >
                +00 9800 7804
              </a>
            </div>
          </div>
        </div>
        <div className="flex md:hidden justify-end items-center h-16">
          <i
            className={classnames('cursor-pointer hover:text-white z-[60] header-link')}
            onClick={handleClick}
          >
            {showLinkDrawer ? (
              <CloseIcon size={30} />
            ) : (
              <MenuIcon size={30} className="text-primary-dark" />
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
