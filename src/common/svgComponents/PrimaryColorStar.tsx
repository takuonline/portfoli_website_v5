import * as React from "react";

const PrimaryColorStar = (props: { viewBox: string; scaleFactor?: number }) => {
  const scaleFactor = props.scaleFactor ?? 1;

  return (
    <svg
      width={158 * scaleFactor}
      height={160 * scaleFactor}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={props.viewBox}
    >
      <path
        d="M74.705 2.402a6 6 0 0 1 8.59 0l4.94 5.063A6 6 0 0 0 95.13 8.68l6.374-3.068a6 6 0 0 1 8.071 2.937l2.91 6.447a6 6 0 0 0 6.065 3.502l7.038-.703a6 6 0 0 1 6.58 5.52l.53 7.054a6 6 0 0 0 4.501 5.365l6.855 1.747a6 6 0 0 1 4.294 7.438l-1.914 6.81a5.999 5.999 0 0 0 2.395 6.58l5.844 3.986a6 6 0 0 1 1.491 8.459l-4.128 5.743a6 6 0 0 0 0 7.004l4.128 5.743a6 6 0 0 1-1.491 8.46l-5.844 3.984a6 6 0 0 0-2.395 6.582l1.914 6.809a5.999 5.999 0 0 1-4.294 7.438l-6.855 1.747a5.998 5.998 0 0 0-4.501 5.365l-.53 7.053a6 6 0 0 1-6.58 5.521l-7.038-.703a6 6 0 0 0-6.065 3.502l-2.91 6.447a6 6 0 0 1-8.071 2.937l-6.374-3.068a6.002 6.002 0 0 0-6.897 1.216l-4.94 5.063a6 6 0 0 1-8.589 0l-4.94-5.063a6.002 6.002 0 0 0-6.896-1.216l-6.373 3.068a6 6 0 0 1-8.072-2.937l-2.91-6.447a6 6 0 0 0-6.065-3.502l-7.038.703a6 6 0 0 1-6.58-5.521l-.53-7.053a6 6 0 0 0-4.501-5.365l-6.855-1.747a6 6 0 0 1-4.294-7.438l1.915-6.809a6.001 6.001 0 0 0-2.396-6.582l-5.844-3.985a6 6 0 0 1-1.491-8.459l4.128-5.743a6 6 0 0 0 0-7.004l-4.128-5.743a6 6 0 0 1 1.491-8.46L9.17 58.31a6 6 0 0 0 2.396-6.58L9.65 44.92a6 6 0 0 1 4.294-7.438l6.855-1.747A6 6 0 0 0 25.3 30.37l.53-7.053a6 6 0 0 1 6.58-5.521l7.038.703a6 6 0 0 0 6.065-3.502l2.91-6.447a6 6 0 0 1 8.072-2.937l6.373 3.068a6 6 0 0 0 6.897-1.216l4.94-5.063Z"
        fill="#E7FA71"
      />
    </svg>
  );
};

export default PrimaryColorStar;
