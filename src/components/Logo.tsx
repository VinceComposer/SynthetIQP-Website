import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  linkClassName?: string;
}

export default function Logo({ className = "text-2xl", linkClassName = "text-primary" }: LogoProps) {
  return (
    <Link to="/" className={`font-bold relative inline-flex items-center ${linkClassName}`}>
      <span className={`${className} tracking-tight`}>SynthetIQ Partners</span>
    </Link>
  );
}