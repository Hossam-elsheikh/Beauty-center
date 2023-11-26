import React from "react";
import Image from "next/image";
import contact from "../../public/contact.svg";
import Link from "next/link";
import { GrUserManager } from "react-icons/gr";
import { LiaFileContractSolid } from "react-icons/lia";
import { TbSocial } from "react-icons/tb";
import { RiUserVoiceLine } from "react-icons/ri";
import { FiPieChart } from "react-icons/fi";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineQueryStats } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { RiServiceLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { Tooltip } from 'react-tooltip'

const Contact = () => {
  return (
    <div className="p-1 p-md-5" dir="rtl">
      <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
        <h3>تواصل مع القسم المختص</h3>
        <p>قم بالضفط على القسم لإرسال أيميل مباشر له</p>
        <div className="d-flex flex-wrap p-5 gap-4 justify-content-center">
          <Link className="mail" href="mailto:info@beauty-centeer.com">
            <p>إدارة المنصة</p>
            <GrUserManager />
          </Link>
          <Link className="mail" href="mailto:affiliate@beauty-centeer.com">
            <p>عقد الشراكات</p>
            <LiaFileContractSolid />
          </Link>
          <Link className="mail" href="mailto:marketing@beauty-centeer.com">
            <p>التسويق</p>
            <TbSocial />
          </Link>
          <Link className="mail" href="mailto:marketer@beauty-centeer.com">
            <p>قسم المسوقين والمؤثرين</p>
            <RiUserVoiceLine />
          </Link>
          <Link className="mail" href="mailto:wholesale@beauty-centeer.com">
            <p>مبيعات الجملة</p>
            <FiPieChart />
          </Link>
          <Link className="mail" href="mailto:affservice@beauty-centeer.com">
            <p>رعاية الشركاء</p>
            <RiCustomerService2Line />
          </Link>
          <Link className="mail" href="mailto:sales@beauty-centeer.com">
            <p>المبيعات</p>
            <MdOutlineQueryStats />
          </Link>

          <Link className="mail" href="mailto:Logistics@beauty-centeer.com">
            <p>الخدمات اللوجيستية</p>
            <SlEnergy />
          </Link>
          <Link className="mail" href="mailto:care@beauty-centeer.com">
            <p>رعاية العملاء</p>
            <RiServiceLine />
          </Link>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column flex-xl-row justify-content-center gap-5 py-5">
        <div className="d-flex flex-column gap-3 justify-content-center align-items-center cont_form">
          <h2 className="text_p">ارسل رسالتك الآن</h2>
          <form
            action=""
            className="d-flex flex-column gap-3 align-items-center justify-content-center pr-5"
          >
            <input
              className="form-control"
              type="text"
              name="fName"
              placeholder="الاسم بالكامل"
            />
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
            />
            <input
              className="form-control"
              type="tel"
              name="tel"
              dir="rtl"
              placeholder="رقم الهاتف"
            />
            <input
              className="form-control"
              type="text"
              name="msgTitle"
              placeholder="عنوان الرسالة"
            />
            <select className="form-select" aria-label="Default select example">
              <option disabled selected>
                الغرض من الرسالة
              </option>
              <option value="1">طلبات الأون لاين</option>
              <option value="2">المنتجات والعروض</option>
              <option value="3">استفسار عام</option>
              <option value="3">شكوى</option>
              <option value="3">
                مبيعات الشركات والدوائر الحكومية (مبيعات الجملة)
              </option>
            </select>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="محتوى الرسالة"
            ></textarea>
            <div class="mb-3">
              <label for="formFile" class="form-label mb-1">
                قم بإرافق ملف او صورة إن وجد
              </label>
              <input
                name="file"
                className="form-control"
                type="file"
                id="formFile"
              />
            </div>
            <button className="btn clr_p text-white">إرسال الرسالة</button>
          </form>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Image className="img-fluid" src={contact} />
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column p-1 py-4 p-md-5 justify-content-center align-items-center gap-4">
        <h3>تابعنا على منصات التواصل الاجتماعي</h3>
        <div className="d-flex gap-3 justify-content-center">
          <Link data-tooltip-id="facebook" data-tooltip-content="Facebook" href="/" className="social">
            <FaFacebook />
          </Link>
          <Link data-tooltip-id="whatsapp" data-tooltip-content="Whatsapp" href="/" className="social">
            <IoLogoWhatsapp />
          </Link>
          <Link data-tooltip-id="insta" data-tooltip-content="Instagram" href="/" className="social">
            <RiInstagramFill />
          </Link>
          <Link data-tooltip-id="twitter" data-tooltip-content="Twitter" href="/" className="social">
            <FaTwitter />
          </Link>
          <Link data-tooltip-id="tiktok" data-tooltip-content="TikTok" href="/" className="social">
            <IoLogoTiktok />
          </Link>
          <Link data-tooltip-id="youtube" data-tooltip-content="Youtube" href="/" className="social">
            <IoLogoYoutube />
          </Link>
          <Tooltip id="facebook" />
          <Tooltip id="whatsapp" />
          <Tooltip id="instagram" />
          <Tooltip id="twitter" />
          <Tooltip id="tiktok" />
          <Tooltip id="youtube" />

        </div>
      </div>
    </div>
  );
};

export default Contact;
