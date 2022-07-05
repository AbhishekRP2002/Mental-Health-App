import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'navi-text'
  },
  {
    title: 'About Us',
    path: '/aboutus',
    icon: <IoIcons.IoIosPaper />,
    cName: 'navi-text'
  },
  {
    title: " It's OK to Share !",
    path: '/chatspace',
    icon: <IoIcons.IoMdChatbubbles />,
    cName: 'navi-text'
  },
  {
    title: 'Book Appointment',
    path: '/book-appointment',
    icon: <FaIcons.FaHandsHelping />,
    cName: 'navi-text'
  },
  {
    title: 'Log In',
    path: '/login',
    icon: <AiIcons.AiOutlineLogin />,
    cName: 'navi-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'navi-text'
  }
];
