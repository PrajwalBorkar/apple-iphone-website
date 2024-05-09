import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue cursor-pointer">
              {" "}
              Find an Apple Store{" "}
            </span>{" "}
            or Other retailer near you.
          </p>
          <p className="font-semibold text-gray text-xs ">
            Or call 00000-123-4567
          </p>
          <div className="bg-neutral-700 my-5 h-[1px] w-full" />
          <div className="flex flex-row flex-col md:items-center justify-between">
            <p className="font-semibold text-gray text-xs ">
              Copyright @ 2024 Apple inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
