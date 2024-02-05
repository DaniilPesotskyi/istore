import { PrismicNextLink } from "@prismicio/next";
import { FooterDocument, SettingsDocument } from "../../../../prismicio-types";
import css from "./Footer.module.css";

interface IProps {
  settings: SettingsDocument<string>;
  footer: FooterDocument<string>;
  lang: string;
}

const Footer: React.FC<IProps> = ({ settings, footer, lang }) => {
  const year = new Date().getFullYear();
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.main}>
          <div>
            <PrismicNextLink
              className={css.logo}
              field={settings.data.homepage}
            >
              <AppleIcon className={css.logoIcon} />
              IStore
            </PrismicNextLink>
            <ul className={css.contacts}>
              <li className={css.contactsItem}>
                <span className={css.contactsLabel}>E-MAIL:</span>
                <a href={`mailto:${footer.data.email}`}>{footer.data.email}</a>
              </li>
              <li className={css.contactsItem}>
                <span className={css.contactsLabel}>
                  {lang === "uk-ua"
                    ? "ГОДИНИ ОБСЛУГОВУВАННЯ:"
                    : "SERVICE HOURS:"}
                </span>
                {footer.data.time}
              </li>
            </ul>
            <p className={css.delivery}>{footer.data.delivery}</p>
          </div>
          <div>
            <ul className={css.contactsList}>
              {footer.data.socials.map((i, index) => (
                <li key={index}>
                  <PrismicNextLink className={css.contactsLink} field={i.link}>
                    {i.icon === "instagram" && (
                      <InstagramIcon className={css.contactsIcon} />
                    )}
                    {i.icon === "facebook" && (
                      <FacebookIcon className={css.contactsIcon} />
                    )}
                    {i.icon === "tiktok" && (
                      <TiktokIcon className={css.contactsIcon} />
                    )}
                    {i.icon === "youtube" && (
                      <YoutubeIcon className={css.contactsIcon} />
                    )}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
            <ul className={css.payments}>
              <li>
                <MastercardIcon />
              </li>
              <li>
                <VisaIcon />
              </li>
            </ul>
          </div>
        </div>
        <div className={css.copy}>
          <span>
            {year}.{footer.data.copy_text}
          </span>
          <span>Developed by Danya Pesotskyi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function VisaIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="69"
      height="21"
      fill="none"
    >
      <path
        fill="#3362AB"
        d="M64 0h-4c-2 0-3 1-3 2l-9 19h6l1-3h8v3h5L64 0zm-7 13a353 353 0 003-7v2l2 6h-5v-1zm-8 1c0 4-4 7-10 7l-6-1 1-5v1l6 1 3-2-3-3c-2-1-5-2-5-5 0-4 4-7 10-7l5 1-1 4h-1l-4-1c-2 0-3 1-3 2s1 2 3 2c3 2 5 4 5 6z"
      ></path>
      <path fill="#F9B50B" d="M0 1V0h9l2 2 2 9C11 6 7 2 0 1z"></path>
      <path
        fill="#3362AB"
        d="M25 0l-9 21h-5L6 4c3 2 6 5 7 8l1 2 5-14h6zm2 0h6l-4 21h-5l3-21z"
      ></path>
    </svg>
  );
}

function MastercardIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="39"
      fill="none"
    >
      <path fill="#F9B50B" d="M65 20a20 20 0 11-39-1 20 20 0 0139 1z"></path>
      <path
        fill="#C8191C"
        d="M39 20v-4H27v-3h11l-1-2h-9l1-2h7l-2-2h-3l2-2c-4-3-8-5-14-5C9 0 0 9 0 20a20 20 0 0033 14l2-2h-4l-2-2h7l1-2h-9l-1-2h11l1-6z"
      ></path>
      <path
        fill="#fff"
        d="M26 24l1-1h-1v-4h1l1-2h-1v-2h-2l-2 8 2 2 1-1z"
      ></path>
      <path
        fill="#fff"
        d="M27 21c0 3 2 4 4 4h2v-2h-2c-2 0-2-2-2-2h4l1-2c0-1-1-3-3-3s-4 3-4 5zm4-3l1 2h-3l2-2zm13 6v-2l-2 1c-1 0-2-1-2-3s2-4 3-4l2 1v-2l-2-1c-3 0-5 2-5 6 0 3 1 5 4 5l2-1zm-29-8l-2 1-1 2 3-1 1 1h-1c-2 0-4 1-4 3s1 3 2 3l2-1v1h2l1-6c0-3-2-3-3-3zm1 5l-2 2-1-1 2-1h1z"
      ></path>
      <path
        fill="#fff"
        d="M20 25s3 0 3-3-3-2-3-3l2-1h1v-2h-2c-1 0-3 1-3 3s3 2 3 3l-1 1-2-1-1 2 3 1zm41-10v3l-2-1c-2 0-4 2-4 5 0 1 1 3 3 3l2-1v1h2l1-10h-2zm-1 5c0 1 0 3-2 3l-1-2c0-2 1-3 2-3l1 2zM4 25l1-8v8h2l2-8-1 8h2l2-10H9l-2 6v-6H4L2 25h2zm32 0c0-4 1-7 2-6l1-2h-1l-1 1v-1h-2l-1 8h2zm13-9l-3 1v2l2-1 1 1h-1c-1 0-3 1-3 3s1 3 2 3l2-1v1h2l1-6c0-3-3-3-3-3zm0 5l-1 2-1-1 2-1z"
      ></path>
      <path fill="#fff" d="M53 25c1-4 1-7 2-6l1-2-2 1v-1h-2l-1 8h2z"></path>
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        d="M3 15a3 3 0 01-2-2C0 11 0 3 2 2l1-1a105 105 0 0118 0l1 1v12l-1 1H3zm6-4l7-3-7-4v7z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="22"
      fill="none"
    >
      <path d="M19 5a5 5 0 01-5-5h-4v15a3 3 0 11-2-3V8a7 7 0 106 7V7l5 2V5z"></path>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
    >
      <path d="M11 2h5l2 1v1l1 2v8l-1 2v1l-2 1H5l-2-1v-1l-1-2V6l1-2V3l2-1h6zm0-2H6a6 6 0 00-4 2L1 3v11a6 6 0 001 4l2 2h11a6 6 0 004-2l1-1 1-3V6a6 6 0 00-2-4l-2-2h-6z"></path>
      <path d="M11 5c-3 0-6 2-6 5s3 5 6 5c2 0 5-2 5-5s-3-5-5-5zm0 8a3 3 0 110-6c1 0 3 1 3 3s-2 3-3 3zm5-7a1 1 0 100-3 1 1 0 000 3z"></path>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="23"
      fill="none"
    >
      <path d="M8 12h4V9H8V6l2-3h3V0h-3C6 0 4 2 4 6v3H1v3h3v11a14 14 0 004 0V12z"></path>
    </svg>
  );
}

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
