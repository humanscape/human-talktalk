import { useRouter } from 'next/router';
import Link from 'next/link';

import { version } from '../../../package.json';

interface ComputedPathname {
  [x: string]: string;
}

const computedPathname: ComputedPathname = {
  '/': '메인',
  '/result': '결과',
};

const PageHeader: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full py-6 bg-white border-b border-gray-300">
      <div className="flex flex-row items-center px-2 lg:px-4 mx-auto max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <Link href="/">
          <div className="flex flex-row items-center cursor-pointer">
            <img src="/Humanscape-Logo.png" className="w-8 h-8 object-fit" />
            <div className="text-xl antialiased font-bold tracking-wide ml-1">휴먼톡톡</div>
          </div>
        </Link>
        <div className="text-lg antialiased ml-2">{computedPathname[pathname] ?? ''}</div>
        <div className="flex flex-1" />
        <div className="text-gray-700 text-sm">
          {`v${version}`}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
