import React from "react";

const BgWhiteMain = () => {
  return (
    <svg
      width="423"
      height="441"
      viewBox="0 0 423 441"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_37_358)">
        <path
          d="M4 337.695L41.5199 55.5321C50.4988 34.2465 58.4995 24.4931 85.0431 13.5078C168.926 5.63801 236.871 3.95855 350.684 0C380.017 8.8112 397.61 13.5281 412.217 55.5321C415.7 169.345 419.367 250.574 418.971 324.938C417.772 357.978 410.418 371.127 384.452 384.222C227.097 413.091 140.987 428.655 67.0335 433C22.4371 419.114 4.3272 399.961 4 337.695Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_37_358"
          x="0"
          y="0"
          width="423"
          height="441"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_37_358"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_37_358"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BgWhiteMain;
