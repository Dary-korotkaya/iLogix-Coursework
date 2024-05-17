import { memo, SVGProps } from 'react';

const Vector12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 779 837' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.45231 346.237C-13.4583 246.684 16.2391 227.807 47.5365 185.589C61.0581 167.35 62.495 143.404 55.1312 121.926C39.7724 77.1299 65.437 28.5793 111.819 19.0226C190.923 2.72376 283.869 -9.47503 315.323 10.0266C370.742 44.3866 465.325 181.302 504.857 189.061C544.39 196.82 648.644 171.09 732.076 189.061C847.718 213.97 704.367 318.528 764.959 496.609C793.045 579.154 447.59 766.686 389.215 824.691C330.84 882.697 192.292 707.572 166.06 699.443C161.507 698.033 159.904 690.631 160.931 679.265C169.541 584.06 153.475 449.883 72.5765 398.957C35.2378 375.452 8.20892 355.021 6.45231 346.237Z'
      fill='#6A93D0'
      fillOpacity={0.5}
    />
  </svg>
);

const Memo = memo(Vector12Icon);
export { Memo as Vector12Icon };
