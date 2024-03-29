import React from "react";

export default function Papers({
  title,
  user,
  img
}: {
  title: string;
  img: string;
  user: string;
}) {
  if (user === "admin") {
    return (
      <div className="w-full flex flex-col items-center">
        <img
          className="w-60 h-60"
          src={img}
          alt="img"
        />
        <div className=" flex w-full items-center justify-center gap-3">
          <h2 className="text-black text-3xl font-bold font-['Josefin Sans']">
            {title}
          </h2>
          <svg
            width="29"
            height="21"
            viewBox="0 0 29 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5005 14.3182C16.7319 14.3182 18.5409 12.6087 18.5409 10.5C18.5409 8.39128 16.7319 6.68182 14.5005 6.68182C12.269 6.68182 10.4601 8.39128 10.4601 10.5C10.4601 12.6087 12.269 14.3182 14.5005 14.3182Z"
              fill="#0F172A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.121229 9.7958C2.12426 4.10545 7.80406 0 14.5012 0C21.1952 0 26.8728 4.10164 28.8783 9.78785C29.0404 10.2474 29.0406 10.7446 28.8788 11.2042C26.8757 16.8946 21.1959 21 14.4988 21C7.80482 21 2.12719 16.8984 0.12167 11.2122C-0.040406 10.7526 -0.0405602 10.2554 0.121229 9.7958ZM21.5712 10.5C21.5712 14.1903 18.4055 17.1818 14.5005 17.1818C10.5954 17.1818 7.42977 14.1903 7.42977 10.5C7.42977 6.80973 10.5954 3.81818 14.5005 3.81818C18.4055 3.81818 21.5712 6.80973 21.5712 10.5Z"
              fill="#0F172A"
            />
          </svg>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full flex flex-col items-center">
        <img
          className="w-60 h-60"
          src={img}
          alt="img"
        />
        <div className=" flex w-full items-center justify-center gap-3">
          <h2 className="text-black text-3xl font-bold font-['Josefin Sans']">
            {title}
          </h2>
          <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.2312 0.768845C19.206 -0.256282 17.544 -0.256282 16.5189 0.768845L15.3617 1.926L19.074 5.63831L20.2312 4.48116C21.2563 3.45603 21.2563 1.79397 20.2312 0.768845Z"
            fill="#0F172A"
          />
          <path
            d="M18.0134 6.69897L14.301 2.98666L2.15021 15.1375C1.53342 15.7543 1.08003 16.515 0.831012 17.351L0.0312318 20.0359C-0.0473882 20.2998 0.024959 20.5856 0.219688 20.7803C0.414418 20.9751 0.700205 21.0474 0.964133 20.9688L3.64902 20.169C4.48499 19.92 5.24574 19.4666 5.86253 18.8498L18.0134 6.69897Z"
            fill="#0F172A"
          />
        </svg>
          <svg
            width="29"
            height="21"
            viewBox="0 0 29 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5005 14.3182C16.7319 14.3182 18.5409 12.6087 18.5409 10.5C18.5409 8.39128 16.7319 6.68182 14.5005 6.68182C12.269 6.68182 10.4601 8.39128 10.4601 10.5C10.4601 12.6087 12.269 14.3182 14.5005 14.3182Z"
              fill="#0F172A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.121229 9.7958C2.12426 4.10545 7.80406 0 14.5012 0C21.1952 0 26.8728 4.10164 28.8783 9.78785C29.0404 10.2474 29.0406 10.7446 28.8788 11.2042C26.8757 16.8946 21.1959 21 14.4988 21C7.80482 21 2.12719 16.8984 0.12167 11.2122C-0.040406 10.7526 -0.0405602 10.2554 0.121229 9.7958ZM21.5712 10.5C21.5712 14.1903 18.4055 17.1818 14.5005 17.1818C10.5954 17.1818 7.42977 14.1903 7.42977 10.5C7.42977 6.80973 10.5954 3.81818 14.5005 3.81818C18.4055 3.81818 21.5712 6.80973 21.5712 10.5Z"
              fill="#0F172A"
            />
          </svg>
        </div>
      </div>
    );
  }
}
