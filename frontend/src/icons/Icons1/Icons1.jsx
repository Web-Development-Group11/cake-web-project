import PropTypes from "prop-types";
import React from "react";

export const Icons1 = ({ color = "#47271C", className }) => {
  return (
    <svg
      className={`icons-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_569_1230)">
        <path
          className="path"
          d="M7.49999 18.3334C7.96023 18.3334 8.33332 17.9603 8.33332 17.5001C8.33332 17.0398 7.96023 16.6667 7.49999 16.6667C7.03975 16.6667 6.66666 17.0398 6.66666 17.5001C6.66666 17.9603 7.03975 18.3334 7.49999 18.3334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          className="path"
          d="M16.6667 18.3334C17.1269 18.3334 17.5 17.9603 17.5 17.5001C17.5 17.0398 17.1269 16.6667 16.6667 16.6667C16.2064 16.6667 15.8333 17.0398 15.8333 17.5001C15.8333 17.9603 16.2064 18.3334 16.6667 18.3334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path className="path" d="M19 5H5L6.5 13H17.5L19 5Z" fill={color} />
        <path
          className="path"
          d="M0.833344 0.833252H4.16668M4.16668 0.833252L6.40001 11.9916C6.47621 12.3752 6.68493 12.7199 6.98963 12.9652C7.29433 13.2104 7.67559 13.3407 8.06668 13.3333H16.1667C16.5578 13.3407 16.939 13.2104 17.2437 12.9652C17.5484 12.7199 17.7571 12.3752 17.8333 11.9916L19.1667 4.99992H5.00001L4.16668 0.833252Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_569_1230">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

Icons1.propTypes = {
  color: PropTypes.string,
};
