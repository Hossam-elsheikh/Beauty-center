import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

const Footer = () => {
  return (
    <div
      className="clr_p d-flex flex-column flex-md-row p-5 gap-5 align-items-center flex-wrap justify-content-between"
      dir="rtl"
    >
      <Link className="d-flex" href="/">
        <Image
          style={{ height: "65px", width: "auto" }}
          src={logo}
          alt="logo"
        />
      </Link>
      <div className="d-flex flex-column gap-2 text-center">
        <div className="d-flex align-items-center gap-2 text-light">
          <FaLocationDot />
          <p>المملكة العربية السعودية</p>
        </div>
        <div className="d-flex align-items-center gap-2 text-light">
          <FaPhone />
          <p>+966530852675</p>
        </div>
        <div className="d-flex align-items-center gap-2 text-light">
          <IoMail />
          <Link href="mailto:+care@beauty-centeer.com">
            +care@beauty-centeer.com
          </Link>
        </div>
      </div>
      <div className="d-flex flex-column gap-2 text-center">
        <Link href="/#home">عن بيوتي سنتر</Link>
        <Link href="/#services">خدماتنا</Link>
        <Link href="/#questions">الاسئلة الشائعة</Link>
      </div>
      <div className="d-flex flex-column gap-2 text-center">
        <Link href="/seller">كن شريكاً</Link>
        <Link href="/contact">تواصل معنا</Link>
      </div>
      <div className="d-flex flex-column gap-2 text-center ">
        <h5 className="text-light">قم بتحميل التطبيق</h5>
        <Link
          href="/seller"
          className="d-flex gap-3 bg-light text_p justify-content-center align-items-center  p-2 border rounded "
        >
          <h6>جوجل بلاي</h6>
          <FaGooglePlay />
        </Link>
        <Link
          href="/seller"
          className="d-flex bg-light text_p justify-content-center gap-3 align-items-center  p-2 border rounded "
        >
          <h6>آبل ستور</h6>
          <GrAppleAppStore />
        </Link>
      </div>
      <div className="d-flex flex-column gap-2 text-center" style={{maxWidth:'350px'}}>
        <h5 className="text-light">وسائل الدفع</h5>
        <div className="d-flex gap-2 flex-wrap justify-content-center">
        <img
        className="bg-light p-1 rounded"
          style={{ height: "25px", width: "auto" }}
          src='https://beauty-t-center.com/_/assets/front-end/img/8.png'
          alt="logo"
        />
        <img
        className="bg-light p-1 rounded"
          style={{ height: "25px", width: "auto" }}
          src='https://beauty-t-center.com/_/assets/front-end/img/7.png'
          alt="logo"
        />
        <img
        className="bg-light p-1 rounded"
          style={{ height: "25px", width: "auto" }}
          src='https://beauty-t-center.com/_/assets/front-end/img/6.png'
          alt="logo"
        />
        <img
        className="bg-light p-1 rounded"
          style={{ height: "25px", width: "auto" }}
          src='https://beauty-t-center.com/_/assets/front-end/img/5.png'
          alt="logo"
        />
        <img
        className="bg-light p-1 rounded"
          style={{ height: "25px", width: "auto" }}
          src='https://beauty-t-center.com/_/assets/front-end/img/4.png'
          alt="logo"
        />
        <img
        className="bg-light p-1 rounded"
          style={{ height: "25px", width: "auto" }}
          src='https://beauty-t-center.com/_/assets/front-end/img/3.png'
          alt="logo"
        />
        <img
          style={{ height: "25px", width: "auto" }}
          className="rounded bg-light"

          src='data:image/png;base64,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'
          alt="logo"
        />
        <img
          style={{ height: "25px", width: "auto" }}
          className="rounded bg-light"
          src='https://i.postimg.cc/3NKsvd24/tam.png'
          alt="logo"
        />
        </div>
      </div>
    </div>
  );
};

export default Footer;
