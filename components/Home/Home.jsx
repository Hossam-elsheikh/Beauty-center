import Image from "next/image";
import img from "../../public/main.svg";
import logo from "../../public/logocolored.svg";
import q from "../../public/q.svg";
import ui from "../../public/ui.svg";
import stats from "../../public/stats.svg";
import marketing from "../../public/marketing.svg";
import customer from "../../public/customer.svg";
import quality from "../../public/quality.svg";
import pay from "../../public/pay.svg";
import stock from "../../public/stock.svg";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useRef } from "react";
import Freq from "./Freq";

const Main = () => {
  const about = useRef();
  const services = useRef();
  const questions = useRef();
  const top = useRef();

  const serv = [
    {
      title: "واجهة مستخدم مميزة",
      description:
        "تقدم منصتنا مجموعة من المميزات المهمة لأصحاب المتاجر الذين يبيعون منتجاتهم من خلالها ، حيث توفر واجهة سهلة الاستخدام وجذابة تجعل عرض المنتجات وتصفحها تجربة سلسة للمتسوقين .",
      img: ui,
    },
    {
      title: "تحليلات وإحصاءات متقدمة",
      description:
        "توفير بيانات دقيقة وتحليلات لأصحاب المتاجر حول أداء منتجاتهم، وسلوك المستخدمين، واتجاهات السوق لمساعدتهم في اتخاذ القرارات الأفضل.",
      img: stats,
    },
    {
      title: "التسويق والترويج",
      description:
        "إمكانية ترويج المنتجات من خلال حملات إعلانية مدفوعة أو عروض خاصة للمستخدمين والعملاء المحتملين.",
      img: marketing,
    },
    {
      title: "دعم فني ومساعدة",
      description:
        "تقديم دعم فني متخصص ومساعدة فورية لأصحاب المتاجر لحل أي مشاكل تقنية أو استفسارات تتعلق بالمنصة.",
      img: customer,
    },

    {
      title: "نظام دفع آمن وسهل",
      description:
        " توفير وسائل دفع متنوعة وآمنة للعملاء وضمان عمليات الدفع السلسة والموثوقة.",
      img: pay,
    },
    {
      title: "إدارة المخزون والطلبات",
      description:
        "أدوات لإدارة المخزون بكفاءة ومتابعة الطلبات وعمليات الشحن بشكل موحد وسهل.",
      img: stock,
    },
  ];
  return (
    <div>
      <div ref={top} className="clr_p py-5" dir="rtl">
        <div
          className="container-fluid section  p-5 d-flex flex-column flex-lg-row justify-content-between align-items-center gap-5 position-relative"
          id="home"
        >
          <Image src={img} className="img-fluid" />
          <div className="d-flex bg-light flex-column justify-content-center gap-2 shadow p-3 rounded-3 py-4">
            <h1 className="text_p">بيوتي سنتر</h1>
            <p className="text_s" style={{ fontSize: "1.3rem" }}>
              مرحبًا بك في هذا الموقع الرائع والمتعدد التجار، حيث يجتمع العديد
              من الفرص التسويقية والتسوقية في مكان واحد لتلبية احتياجاتك
              ورغباتك. يعتبر هذا الموقع وجهة شاملة للمستهلكين وأصحاب الأعمال على
              حد سواء، حيث يقدم مجموعة متنوعة من المنتجات والخدمات.
            </p>
          </div>
          <IoIosArrowDropdownCircle
            onClick={() => about.current.scrollIntoView({ behavior: "smooth" })}
            color="white"
          />
        </div>
      </div>
      <div id="about_us" className=" py-5 px-5" dir="rtl" ref={about}>
        <div className="container-fluid flex-column flex-lg-row d-flex align-items-center section p-0 p-md-5 gap-5 position-relative">
          <div className="d-flex clr_p flex-column gap-3 shadow p-3 rounded-3 py-4">
            <h1 className="text-light">متجر بيوتي سنتر</h1>
            <p className=" text-light" style={{ fontSize: "1.2rem" }}>
              هو إحدى أكبر المتاجر الرائدة بالمملكة العربية السعودية في مجال
              تجارة الجملة والتجزئة في كل المستلزمات النسائية ويهتم بجمال وأناقة
              المرأة العربية .
            </p>
            <p className=" text-light" style={{ fontSize: "1.2rem" }}>
              {" "}
              العلامة التجارية المعروفة في المملكة العربية السعودية والتي يثق
              بها العملاء لجعل هذه العلامة التجارية قوية في الوطن العربي لتخصصها
              في الأنشطة التجارية المختلفة بالإضافة إلى النشاط الرئيسي.{" "}
            </p>
            <Image src={q} className="q_mark d-none d-md-block" />
          </div>

          <div className="d-flex  align-items-center justify-content-center">
            <Image
              className="img-fluid"
              src={quality}
              style={{ width: "700px" }}
            />
          </div>
          <IoIosArrowDropdownCircle
            onClick={() =>
              services.current.scrollIntoView({ behavior: "smooth" })
            }
            color="rgb(247, 109, 132)"
          />
        </div>
      </div>
      <div id="services" className=" py-5 px-5 clr_p" dir="rtl" ref={services}>
        <h1 className="text-center text-light mb-3">خدماتنا</h1>
        <div className="container-fluid flex-wrap flex-lg-nowrap d-flex align-items-center section p-0 p-md-5 gap-5 position-relative">
          <div className="row  d-flex flex-column flex-md-row justify-content-center">
            {serv.map((s) => (
              <div className="bg-light my-3 m-md-4 col-12 col-lg-5 text-center shadow rounded-3 p-3 gap-3 d-flex flex-column flex-md-row justify-content-center align-items-center">
                <div className="d-flex flex-column gap-2">
                  <h5 className="text_p">{s.title}</h5>
                  <p>{s.description}</p>
                </div>
                <Image
                  className="img-fluid"
                  style={{ width: "40%" }}
                  src={s.img}
                />
              </div>
            ))}
          </div>
          <IoIosArrowDropdownCircle color="white" />
        </div>
      </div>
      <div id="questions" className="p-0 py-5 p-md-5" dir="rtl" ref={questions}>
        <Freq />
      </div>
    </div>
  );
};

export default Main;
