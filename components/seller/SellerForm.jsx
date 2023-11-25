import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { aggContext } from "../Context/aggContext";

const SellerForm = () => {
  const router = useRouter();
  const { isShown, setIsShown } = useContext(aggContext);

  const questions = [
    {
      name: "حقوق الملكية الفكرية",
      questions: [
        {
          q: "هل يمكنك تقديم البانرات التسويقية التي ترغب ان تظهر لدينا او مقاطع الفيديو ويمكننا استخدامها والتعديل عليها ان لزم الامر ؟",
          n: 1,
        },
        {
          q: "هل لديكم مايمنع في استخدام الصور الخاصة بجميع منتجاتكم والتفاصيل الموضحه من قبلك ؟",
          n: 2,
        },
        {
          q: "هل لديكم مايمنع في استخدام الصور الخاصة بالاقسام الرئيسية والفرعية والداخليه الموجودة لديكم ؟",

          n: 3,
        },
        {
          q: "هل يمكننا استخدام البانرات التسويقية والترويجية الموجودة لديكم ان لزمت الحاجه ؟",

          n: 4,
        },
      ],
    },
    {
      name: "عرض المنتجات الخاصة بكم ",
      questions: [
        {
          n: 5,
          q: "هل تمنحنا صلاحية لعرض المنتجات الخاصة بك كشريك ؟	",
        },
        {
          n: 6,
          q: "هل لديك سياسات او معلومات يجب ارفاقه مع منتجاتك ؟	",
        },
        {
          n: 7,
          q: "هل ترغب في وضع بيانات معينه بجانب منتجاتك وضع الرابط ؟",
        },
        {
          n: 8,
          q: "هل لديكم منتجات حساسة وقابلة للكسر ؟	",
        },
      ],
    },
    {
      name: "سياسة الشحن",
      questions: [
        {
          n: 9,
          q: "هل جميع المنتجات بمستودعاتك ؟	 ",
        },
        {
          n: 10,
          q: "هل لديكم شحن لدول الخليج ؟	          ",
        },
        {
          n: 11,
          q: "هل لديكم شحن لدول العربية ؟",
        },
        {
          n: 12,
          q: "هل لديكم شحن دولي لجميع دول العالم ؟",
        },
        {
          n: 13,
          q: "هل هناك منتجات حصرية بمكان تواجد المتجر ولا يتم شحنها الى مناطق أخرى ؟",
        },
        {
          n: 14,
          q: "هل لديكم خاصية الشحن المجاني لمنتجاتكم وفق قيمة سعرية معينة ؟",
        },
        {
          n: 15,
          q: "هل تقومون بتغليف منتجاتكم بطريقة امنه ام يكتفى بتسليمها لشركة الشحن ؟",
        },
      ],
    },
    {
      name: "سياسة الاسترجاع والاستبدال",
      questions: [
        {
          n: 16,
          q: "هل جميع المنتجات قابلة للاسترجاع والاستبدال ؟	",
        },
      ],
    },
    {
      name: "العروض والتصفيات",
      questions: [
        {
          n: 17,
          q: "هل تملكون صفحة خاصة بالعروض والتصفيات ؟",
        },
        {
          n: 18,
          q: "هل يمكنكم منحنا عروض وخصومات على منتجاتكم بشكل حصري ؟",
        },
        {
          n: 19,
          q: "هل هناك مواسم او أوقات معينة للعروض والتصفيات الموسمية ؟",
        },
      ],
    },
    {
      name: "الولاء للشركة",
      questions: [
        {
          n: 20,
          q: "هل تملكون صفحة خاصة بالولاء خاصة بعملائكم ؟",
        },
        {
          n: 21,
          q: "هل يمكنكم الانضمام معنا بنقاط الولاء للعملاء وذلك بمنح نقاط خاصة بمنتجاتكم؟",
        },
        {
          n: 22,
          q: "هل هناك كوبونات خاصة يمكننا منحها لعملائكم عند شراء منتجاتكم ؟",
        },
      ],
    },
    {
      name: "مبيعات الجملة",
      questions: [
        {
          n: 23,
          q: "هل تملكون صفحة خاصة بمبيعات الجملة ؟",
        },
        {
          n: 24,
          q: "هل لديكم مايمنع في اضهار القيمة السعرية لمنتجاتكم بسعر الجملة ام لا ؟",
        },
        {
          n: 25,
          q: "هل يمكنكم إضافة المنتجات ضمن صفحة مبيعات الجملة لديكم ليتم ربطها لدينا ضمن مبيعات الجملة ام لا ؟	",
        },
      ],
    },
    {
      name: "شركات الشحن",
      questions: [
        {
          n: 26,
          q: "هل يمكنكم توصيل جميع الشحنات الخاصة بجميع الطلبات الى مستودعات شركة الشحن الخاصة بمنصة بيوتي سنتر ليتم تجميعها وتغليفها وارسالها للعميل قبل الساعة 11 صباحا ؟",
        },
        {
          n: 27,
          q: "هل يمكنكم دفع رسوم شهرية بمبلغ لا يتجاوز 200 ريال نظير استلام الشحنات من قبل منصة بيوتي سنتر وتسليمها لشركة الشحن ؟",
        },
        {
          n: 28,
          q: "هل لديكم حلول او مقترحات فيما يخص تجميع الشحنات وارسالها ؟",
        },
      ],
    },
    {
      name: "الضمان والجودة",
      questions: [
        {
          n: 29,
          q: "هل لديكم منتجات تحت بند ضمان الوكيل ؟",
        },
        {
          n: 30,
          q: "هل تمنحون ضمان على جميع منتجاتكم وتملكون ضمان خاص بكم ؟",
        },
        {
          n: 31,
          q: "هل جميع منتجاتكم اصلية وغير مقلدة ؟",
        },
        {
          n: 32,
          q: "هل يتم توضيح جودة المنتج ومواصفاته بشكل دقيق وجميع المنتجات مطابقة لصور المنتج المرفقه ؟",
        },
      ],
    },
    {
      name: "التحصيل والدفع",
      questions: [
        {
          n: 33,
          q: "هل يمكنكم عمل حساب رسمي خاص بمدفوعات الصادرة من قبل المنصة ويتم استخدامه بشكل حصري لمدفوعات للمنصة ؟",
        },
        {
          n: 34,
          q: "هل لديكم مرونه في تأخير قيمة منتجاتكم لمدة لا تزيد عن يومين في حال كان لدى شركة الدفع مايمنع في تحويل قيمة منتجاتكم ؟",
        },
      ],
    },
  ];
  return (
    <div className="container m-auto px-0 py-5 p-md-5" dir="rtl">
     
      <h2 className="text-center mb-4">انضم كبائع في منصة بيوتي سنتر</h2>
      <div className="border border-2 rounded p-4">
        <h4 className="mb-2">قبل أن تبدأ بملء الطلب : </h4>
        <p style={{ fontWeight: "500" }}>
          الرجاء الاطلاع على{" "}
          <span
            style={{
              color: "palevioletred",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => setIsShown(true)}
          >
            شروط وأحكام البائع
          </span>{" "}
          . سيتم نشر شروط البائع هذه على الموقع الالكتروني الخاص ببيوتي سنتر،
          وهي توضح الشروط التي بإمكانك كبائع الوصول واستخدام موقعنا والخدمات
          والتطبيقات، بما في ذلك تطبيقات الهاتف المتحرك لدينا وكذلك منتجاتك معنا
          للمشترين على الموقع. نود لفت نظرك الى ان شروط البائع هذه هي للمراجعة
          المبدئية فقط. وسيعتبر قبول شروط البائع هذه نافذاً فقط عندما يتم قبولها
          على موقعنا. بالإضافة إلى ذلك، تحتفظ ببيوتي سنتر بحق تعديل شروط البائع
          قبل ان يتم قبولها على الموقع .
        </p>
        
        <form className="mt-3">
          <h4 className="my-2"> البيانات الأساسية للشركة</h4>
          <fieldset>
            <input
              className="form-control  m-2"
              type="text"
              name="tradeName"
              placeholder="الاسم التجاري"
            />
            <input
              className="form-control  m-2"
              type="text"
              name="storeName"
              placeholder="اسم المتجر"
            />
            <input
              className="form-control  m-2"
              type="text"
              name="storeLocation"
              placeholder="مقر المتجر"
            />
            <input
              className="form-control  m-2"
              type="number"
              name="tradeNumber"
              placeholder="رقم السجل التجاري"
            />
            <input
              className="form-control  m-2"
              type="link"
              name="storeLink"
              placeholder="رابط المتجر"
            />
            <input
              className="form-control  m-2"
              type="number"
              name="validationNum"
              placeholder="رقم وثيقة التوثيق للتجارة اللإلكترونية"
            />
            <input
              className="form-control  m-2"
              type="number"
              name="taxNum"
              placeholder="الرقم الضريبي"
            />
            <input
              className="form-control  m-2"
              type="text"
              name="fieldOfInterest"
              placeholder="مجال النشاط"
            />
            <input
              className="form-control  m-2"
              type="text"
              name="compBranches"
              placeholder="فروع الشركة"
            />
            <input
              className="form-control  m-2"
              type="tel"
              dir="rtl"
              name="compCustomerServiceNum"
              placeholder="هاتف خدمة عملاء الشركة"
            />
            <input
              className="form-control  m-2"
              type="email"
              name="compCustomerServiceEmail"
              placeholder="الإيميل الإلكتروني لخدمة عملاء الشركة"
            />
          </fieldset>
          <h4 className="my-2">
            البيانات الرسمية والخاصة بمدير المتجر او المالك :
          </h4>
          <fieldset>
            <input
              className="form-control  m-2"
              type="text"
              name="FullOwnerName"
              placeholder="الاسم بالكامل"
            />
            <input
              className="form-control  m-2"
              type="email"
              name="ownerEmail"
              placeholder="البريد الإلكتروني"
            />
            <input
              className="form-control  m-2"
              type="tel"
              name="ownerTel"
              dir="rtl"
              placeholder="رقم الهاتف"
            />
          </fieldset>
          <h4 className="my-2">
            البيانات الرسمية الخاصة بالمنسق ومسئول سير العمل وتتبع الشحنات :
          </h4>
          <fieldset>
            <input
              className="form-control  m-2"
              type="text"
              name="FullManagerName"
              placeholder="الاسم بالكامل"
            />
            <input
              className="form-control  m-2"
              type="email"
              name="ManagerEmail"
              placeholder="البريد الإلكتروني"
            />
            <input
              className="form-control  m-2"
              type="tel"
              name="ManagerTel"
              dir="rtl"
              placeholder="رقم الهاتف"
            />
          </fieldset>
          <h4 className="my-2">
            الوكالات الخاصة بالشريك او البراندات العالمية :
          </h4>
          <fieldset>
            <input
              className="form-control  m-2"
              type="text"
              name="brandName"
              placeholder="اسم البراند"
            />
            <input
              className="form-control  m-2"
              type="text"
              name="bestSellingProduct"
              placeholder="منتجك الأكثر مبيعاً"
            />
            <input
              className="form-control  m-2"
              type="text"
              name="bestSellingCat"
              placeholder="الأقسام الفرعية الأكثر مبيعاً"
            />
            <input
              className="form-control  m-2"
              type="text"
              name="productsOrigin"
              placeholder="منشأ المنتجات"
            />
          </fieldset>
          <h4 className="my-2">عرض المنتجات الخاصة بكم</h4>
          <fieldset>
            <input
              className="form-control  m-2"
              type="number"
              name="productsCount"
              placeholder="عدد المنتجات"
            />
            <input
              className="form-control  m-2"
              type="number"
              name="categoriesCount"
              placeholder="عدد الأقسام الرئيسية"
            />
            <input
              className="form-control  m-2"
              type="number"
              name="subCategoriesCount"
              placeholder="عدد الأقسام الفرعية"
            />
            <input
              className="form-control  m-2"
              type="number"
              name="allCategoriesCount"
              placeholder="عدد الأقسام بشكل عام"
            />
            <textarea
              className="form-control"
              placeholder="اسماء الأقسام الرئيسية"
              name="categoriesNames"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </fieldset>
          <h4 className="my-2">برجاء الإجابة على الاسئلة الآتية بنعم او لا</h4>
          {questions.map((set) => (
            <>
              <h5 className="my-3">{set.name}</h5>
              {set.questions?.map((q) => (
                <>
                  <div className="d-flex align-items-center justify-content-between my-2">
                    <p>{q.q}</p>
                    <div className="d-flex gap-5 ">
                      <div
                        className="d-flex justify-content-center gap-2"
                        style={{ maxWidth: "100px" }}
                      >
                        <label htmlFor={`q${q.n}y`}>نعم</label>
                        <input
                          id={`q${q.n}y`}
                          checked
                          type="radio"
                          name={`q${q.n}`}
                        />
                      </div>
                      <div
                        className="d-flex justify-content-center gap-2"
                        style={{ maxWidth: "100px" }}
                      >
                        <label htmlFor={`q${q.n}n`}>لا</label>
                        <input id={`q${q.n}n`} type="radio" name={`q${q.n}`} />
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </>
          ))}
          <h4 className="my-2">مدخل البايانات </h4>
          <fieldset>
            <input
              className="form-control  m-2"
              type="text"
              name="fullFillerName"
              placeholder="الاسم بالكامل"
            />
            <input
              className="form-control  m-2"
              type="email"
              name="fullFillerEmail"
              placeholder="البريد الإلكتروني"
            />
            <input
              className="form-control  m-2"
              type="tel"
              name="fillerTel"
              dir="rtl"
              placeholder="رقم الهاتف"
            />
          </fieldset>
          <div className="d-flex align-items-center gap-2 py-3">
            <input id="check" type="checkbox" name="agreed" />
            <label htmlFor="check">أوافق على</label>
            <span
              style={{
                color: "palevioletred",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => setIsShown(true)}
            >
              شروط وأحكام البائع
            </span>{" "}
          </div>
          <button  type="submit" className="btn clr_p text-light">
            إرسال الطلب
          </button> 
          <p className="mt-3" style={{ fontWeight: "700" }}>
          اطلع على{" "}
          <span style={{ color: "palevioletred", textDecoration: "underline" }}>
            الاسئلة الشائعة
          </span>{" "}
          او{" "}
          <span style={{ color: "palevioletred", textDecoration: "underline" }}>
            تواصل معنا{" "}
          </span>{" "}
          إن كان لديك أي استفسار او تواجهك مشكلة في ملء الطلب.
        </p>
        </form>
      </div>
    </div>
  );
};

export default SellerForm;
