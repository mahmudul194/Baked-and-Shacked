import React from 'react';
import { Croissant } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-6 w-6' }) => {
  return <Croissant className={className} />;
};

export default Logo;