import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink';
import { FC } from 'react';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];


export const Navbar: FC = () => {
  return (
    <nav className={ styles['menu-container'] }>
      {
        menuItems.map(({ text, href }, index) => <ActiveLink key={ index } text={ text } href={ href } />)
      }
    </nav>
  );
}
