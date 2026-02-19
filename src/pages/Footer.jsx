import React from "react";
import { useTranslation } from "react-i18next";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import {
  FaApple,
  FaFacebook,
  FaGooglePlay,
  FaInstagram,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className="px-25 mt-30 max-md:px-4 max-md:mt-10">
      <ul className="flex justify-between max-md:flex-col max-md:gap-8 mb-5">
        <li className="flex flex-col gap-3.75">
          <p className="text-[14px] font-medium">{t("aboutus")}</p>
          <p className="text-[14px] text-[#8B8E99]">{t("deliverypoints")}</p>
          <p className="text-[14px] text-[#8B8E99]">{t("vacancies")}</p>
        </li>

        <li className="flex flex-col gap-3.75">
          <p className="text-[14px] font-medium">{t("users")}</p>
          <p className="text-[14px] text-[#8B8E99]">{t("contactus")}</p>
          <p className="text-[14px] text-[#8B8E99]">{t("faq")}</p>
        </li>

        <li className="flex flex-col gap-3.75">
          <p className="text-[14px] font-medium">{t("entrepreneurs")}</p>
          <p className="text-[14px] text-[#8B8E99]">{t("seller_cabinet")}</p>
          <p className="text-[14px] text-[#8B8E99]">
            {t("access_seller_cabinet")}
          </p>
        </li>

        <li className="flex flex-col gap-3.75">
          <p className="text-[14px] font-medium">{t("download_app")}</p>
          <div className="flex gap-6.25 max-md:gap-5">
            <p className="flex gap-1.25 items-center">
              <FaApple size={24} />
              AppStore
            </p>
            <p className="flex gap-1.25 items-center">
              <FaGooglePlay size={24} />
              Google Play
            </p>
          </div>
        </li>
      </ul>

      <div
        className="flex items-center gap-10 justify-end mb-18.25
                  max-md:flex-col max-md:items-start max-md:gap-6 max-md:justify-start"
      >
        <div className="flex flex-col gap-3">
          <p className="text-[14px] font-medium">{t("uzum_social_media")}</p>
          <div className="flex gap-3">
            <FaInstagram size={32} />
            <FaTelegram size={32} className="text-[#2AABEE]" />
            <FaYoutube size={32} className="text-[#FF0000]" />
            <FaFacebook size={32} className="text-[#3B5998]" />
          </div>
        </div>

        <a href="#" className="max-md:self-end">
          <BiSolidRightTopArrowCircle className="-rotate-45 text-5xl text-[#7000FF]" />
        </a>
      </div>

      <hr className="text-[#8B8E99]" />

      <div
        className="flex justify-between items-center h-12.5
                  max-md:flex-col max-md:items-start max-md:gap-3 max-md:h-auto"
      >
        <div className="flex gap-5 max-md:flex-col max-md:gap-2">
          <p className="text-[14px] font-medium">{t("user_agreement")}</p>
          <p className="text-[14px] font-medium">{t("user_agreement")}</p>
        </div>

        <p className="text-[#8B8E99] text-[11px] max-md:text-left">
          {t("copyright")} &copy; 2024 {t("uzum")} {t("all_rights_reserved")}
        </p>
      </div>
    </div>
  );
}
