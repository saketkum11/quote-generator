/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import "../style/Card.css";
import "../style/Home.css";
import { addToBookmark } from "../slice/quoteSlice";
const Card = ({ randomQuote }) => {
  const { author, content } = randomQuote;
  const dispatch = useDispatch();
  const handleBookmark = (quote) => {
    dispatch(addToBookmark(quote));
  };
  return (
    <div className="card-content home-page-card">
      <p className="card-paragh">{content}</p>
      <p className="card-author">-{author}</p>
      <button
        className="card-bookmark-button"
        onClick={() => handleBookmark(randomQuote)}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="18" height="18" fill="#1E1E1E" />
          <g id="MacBook Pro 14&#34; - 1">
            <rect
              width="1512"
              height="982"
              transform="translate(-1015 -370)"
              fill="url(#paint0_linear_0_1)"
            />
            <rect
              id="Rectangle 1"
              x="-619"
              y="-217"
              width="773"
              height="263"
              rx="30"
              fill="#D05252"
            />
            <g id="bi:bookmark-plus-fill">
              <path
                id="Vector"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.25 17.4375V2.25C2.25 1.65326 2.48705 1.08097 2.90901 0.65901C3.33097 0.237053 3.90326 0 4.5 0L13.5 0C14.0967 0 14.669 0.237053 15.091 0.65901C15.5129 1.08097 15.75 1.65326 15.75 2.25V17.4375C15.7501 17.5352 15.7247 17.6312 15.6764 17.7161C15.6281 17.801 15.5585 17.8718 15.4745 17.9217C15.3905 17.9715 15.2949 17.9986 15.1973 18.0003C15.0996 18.002 15.0032 17.9783 14.9175 17.9314L9 14.7026L3.0825 17.9314C2.99681 17.9783 2.90038 18.002 2.80272 18.0003C2.70505 17.9986 2.60951 17.9715 2.5255 17.9217C2.44149 17.8718 2.37191 17.801 2.3236 17.7161C2.2753 17.6312 2.24993 17.5352 2.25 17.4375ZM9.5625 5.0625C9.5625 4.91332 9.50324 4.77024 9.39775 4.66475C9.29226 4.55926 9.14918 4.5 9 4.5C8.85082 4.5 8.70774 4.55926 8.60225 4.66475C8.49676 4.77024 8.4375 4.91332 8.4375 5.0625V6.75H6.75C6.60082 6.75 6.45774 6.80926 6.35225 6.91475C6.24676 7.02024 6.1875 7.16332 6.1875 7.3125C6.1875 7.46168 6.24676 7.60476 6.35225 7.71025C6.45774 7.81574 6.60082 7.875 6.75 7.875H8.4375V9.5625C8.4375 9.71168 8.49676 9.85476 8.60225 9.96025C8.70774 10.0657 8.85082 10.125 9 10.125C9.14918 10.125 9.29226 10.0657 9.39775 9.96025C9.50324 9.85476 9.5625 9.71168 9.5625 9.5625V7.875H11.25C11.3992 7.875 11.5423 7.81574 11.6477 7.71025C11.7532 7.60476 11.8125 7.46168 11.8125 7.3125C11.8125 7.16332 11.7532 7.02024 11.6477 6.91475C11.5423 6.80926 11.3992 6.75 11.25 6.75H9.5625V5.0625Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="1641"
              y1="93"
              x2="-759"
              y2="982"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0528007" stopColor="#5E2AB3" />
              <stop offset="1" stopColor="#161E6C" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export { Card };
