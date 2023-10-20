import { useRouter } from 'next/router';
import Image from '@/components/ui/image';
import AnchorLink from '@/components/ui/links/anchor-link';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import { useIsDarkMode } from '@/lib/hooks/use-is-dark-mode';
import lightLogo from '@/assets/images/logo.svg';
import darkLogo from '@/assets/images/logo_website_dark.png';
import routes from '@/config/routes';
import { LAYOUT_OPTIONS } from '@/lib/constants';

export default function Logo() {
  const router = useRouter();
  const {
    query: { layout },
  } = router;
  const isMounted = useIsMounted();
  const { isDarkMode } = useIsDarkMode();
  return (
    <AnchorLink
      href={{
        pathname: routes.home,
        ...(layout !== LAYOUT_OPTIONS.MODERN &&
          layout !== undefined && {
          query: {
            layout,
          },
        }),
      }}
      className="flex w-54 mt-10 outline-none sm:w-38 4xl:w-64"
    >
      <span className="relative flex overflow-hidden">
        {isMounted && (
          <Image src={darkLogo} alt="Criptic" priority />
        )}
      </span>
    </AnchorLink>
  );
}
