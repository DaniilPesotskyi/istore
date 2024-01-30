"use client";

import css from "./Header.module.css";

import { SettingsDocument } from "../../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicDocument } from "@prismicio/client";

import clsx from "clsx";
import React from "react";
import Link from "next/link";

import {
  PhoneIcon,
  TabletIcon,
  WatchIcon,
  DesktopIcon,
  HeadphonesIcon,
} from "@/components/icons/devices";

interface IProps {
  settings: SettingsDocument<string>;
  locales: (PrismicDocument<Record<string, any>, string, string> & {
    lang_name: string;
  })[];
  lang: string;
}

const localeLabels: { [key: string]: string } = {
  "en-us": "Eng",
  "uk-ua": "Укр",
};

const Header: React.FC<IProps> = ({ settings, locales, lang }) => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.navigation}>
          <ul className={css.navigationList}>
            {settings.data.navigation.map((i, index) => (
              <React.Fragment key={index}>
                <li>
                  <PrismicNextLink
                    field={i.link}
                    className={css.navigationLink}
                  >
                    {i.label}
                  </PrismicNextLink>
                </li>
                <div className={css.dot}></div>
              </React.Fragment>
            ))}
            {locales.map(
              (locale) =>
                locale.lang !== lang && (
                  <PrismicNextLink
                    key={locale.lang}
                    href={locale.url as string}
                    locale={locale.lang}
                    aria-label={`Change language to ${locale.lang_name}`}
                    className={css.langChanger}
                  >
                    {lang === "uk-ua" ? <UkraineIcon /> : <AmericaIcon />}
                    {localeLabels[lang] || ""}
                  </PrismicNextLink>
                )
            )}
          </ul>
        </nav>
      </div>
      <div className={css.main}>
        <div className={clsx(css.container, css.flexContainer)}>
          <AppleIcon className={css.logo} />
          <ul className={css.productsNavigation}>
            <li>
              <Link href="/" className={css.productsLink}>
                <PhoneIcon className={css.productsIcon} />
                IPhone
              </Link>
            </li>
            <li>
              <Link href="/" className={css.productsLink}>
                <TabletIcon className={css.productsIcon} />
                IPad
              </Link>
            </li>
            <li>
              <Link href="/" className={css.productsLink}>
                <DesktopIcon className={css.productsIcon} />
                Mac
              </Link>
            </li>
            <li>
              <Link href="/" className={css.productsLink}>
                <WatchIcon className={css.productsIcon} />
                Watch
              </Link>
            </li>
            <li>
              <Link href="/" className={css.productsLink}>
                <HeadphonesIcon className={css.productsIcon} />
                {lang === "uk-ua" ? "Навушники" : "Headphones"}
              </Link>
            </li>
          </ul>
          <button className={css.basketBtn} type="button">
            <BasketIcon className={css.basketIcon} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
    >
      <path d="M28 34H13c-8-9-7-21 2-22l5 2 6-2c3 0 5 1 6 3-5 3-4 10 1 12l-5 7zm-8-22c0-4 3-7 6-7 1 4-4 8-6 7z"></path>
    </svg>
  );
}

function BasketIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
    >
      <path strokeLinecap="round" d="M6 8h5l1 2 1 3"></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M29 29H13s0 0 0 0a2 2 0 01-1-2s0 0 0 0v-1a3 3 0 013-2s0 0 0 0h9"
      ></path>
      <path
        strokeLinecap="round"
        d="M24 24h-9l-3-4v-1c-1-3-2-4-1-5l6-1h9l6 1c1 1 0 3-2 6l-1 1-2 3h-3z"
      ></path>
      <path d="M28 35a2 2 0 100-3 2 2 0 000 3zm-13 0a2 2 0 100-3 2 2 0 000 3z"></path>
    </svg>
  );
}

function UkraineIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" fill="none">
      <mask
        id="a"
        width="13"
        height="10"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M0 0h13v10H0z"></path>
      </mask>
      <g mask="url(#a)">
        <path
          fill="#3195F9"
          fillRule="evenodd"
          d="M0 0v10h13V0H0z"
          clipRule="evenodd"
        ></path>
        <mask
          id="b"
          width="13"
          height="10"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M0 0v10h13V0H0z"
            clipRule="evenodd"
          ></path>
        </mask>
        <g mask="url(#b)">
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="M0 5v5h13V5H0z"
            clipRule="evenodd"
          ></path>
        </g>
      </g>
    </svg>
  );
}

function AmericaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" fill="none">
      <mask
        id="a"
        width="13"
        height="10"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M0 0h13v10H0z"></path>
      </mask>
      <g mask="url(#a)">
        <path
          fill="#E31D1C"
          fillRule="evenodd"
          d="M0 0h13v10H0V0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M0 1v1h13V1H0zm0 2h13H0zm0 2V4h13v1H0zm0 1v1h13V6H0zm0 2h13H0zm0 2V9h13v1H0z"
          clipRule="evenodd"
        ></path>
        <path fill="#2E42A5" d="M0 0h7v6H0z"></path>
        <path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M1 2h1-1 1v1H1V2v1h1-1l1 1H1v1h1V4l1 1H2h1l1-1H3h1v1h1V4h1-1l1 1h1-1l1-1H6V3h1-1 1-1V2v1-1h1L6 1h1-1V0v1H5h1v1L5 1v1-2L4 1v1-1 1H3V1h1-1V0v1H2h1L2 2V1v1-1H1V0v2zm5 1H5h1L5 2v1h1zM5 3H4v1h1V3zM3 4H2l1-1v1zm1-1H3h1-1l1-1v1zM2 3h1-1V2v1zm3-1v1-1L4 3V2h1zM3 2H2v1h1V2v1-1z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}