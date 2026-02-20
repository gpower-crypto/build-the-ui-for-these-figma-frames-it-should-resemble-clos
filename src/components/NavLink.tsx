
import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, active = false }) => {
  return (
    <Link to={to} className="relative text-500 text-[12px] font-medium uppercase tracking-wider group">
      {children}
      {active && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-500"></div>
      )}
    </Link>
  );
};

export default NavLink;
