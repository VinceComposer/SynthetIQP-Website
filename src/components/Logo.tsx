// React is automatically imported by JSX transform
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  linkClassName?: string;
}

export default function Logo({ className = "h-8", linkClassName = "" }: LogoProps) {
  return (
    <Link to="/" className={`relative inline-flex items-center ${linkClassName}`}>
      <img
        src="https://synthetiqpartners.com/images/synthetiq-partners-ai-implementation-agency-logo.png"
        alt="SynthetIQ Partners - AI Implementation Agency"
        className={`${className} w-auto object-contain`}
      />
    </Link>
  );
}