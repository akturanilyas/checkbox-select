import { SVGProps } from 'react';

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg width='24' height='24' viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fill='currentColor'
      d='m13.8 12.2-3.9-4c.6-.8 1.1-2 1.1-3.1 0-2.8-2.3-5-5-5-2.8 0-5 2.3-5 5 0 2.8 2.2 5 5 5 .8 0 1.7-.2 2.3-.5l3.9 4.3c.2.2.6.2.8 0l.8-.8c.3-.3.3-.7 0-.9zM6 8.1c-1.7 0-3-1.4-3-3 0-1.7 1.4-3 3-3s3 1.4 3 3-1.4 3-3 3z'
      fillRule='evenodd'
    />
  </svg>
);

export default SvgSearch;
