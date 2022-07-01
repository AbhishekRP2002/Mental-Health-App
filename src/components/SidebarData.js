import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/aboutus',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Your Safe Space',
    path: '/chatspace',
    icon: <IoIcons.IoMdChatbubbles />,
    cName: 'nav-text'
  },
  {
    title: 'Book Appointment',
    path: '/book-appointment',
    icon: <FaIcons.FaHandsHelping />,
    cName: 'nav-text'
  },
  {
    title: 'Log In',
    path: '/login',
    icon: <AiIcons.AiOutlineLogin />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
