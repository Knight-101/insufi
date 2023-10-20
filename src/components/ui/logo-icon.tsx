import Image from '@/components/ui/image';
import AnchorLink from '@/components/ui/links/anchor-link';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import { useIsDarkMode } from '@/lib/hooks/use-is-dark-mode';
import lightLogo from '@/assets/images/logo-icon.svg';
import newLogo from '@/assets/images/logo_website_dark.png';

const Logo: React.FC<React.SVGAttributes<{}>> = (props) => {
  const isMounted = useIsMounted();
  const { isDarkMode } = useIsDarkMode();

  return (
    <div className="flex cursor-pointer outline-none" {...props}>
      <span className="relative flex overflow-hidden">
        {isMounted && (
          <Image src={newLogo} alt="ReAssure" priority />
        )}
        {/* {isMounted && !isDarkMode && (
          <Image src={lightLogo} alt="Criptic" priority />
        )} */}
      </span>
    </div>
  );
};

export default Logo;
