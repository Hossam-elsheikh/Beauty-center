import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { questions } from "./questions";
import { MdOutlineNoteAlt } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdOutlineDevicesOther } from "react-icons/md";

const Freq = () => {
  const [activeSet, setActiveSet] = useState("من نحن");
  const icons = [
    { title: "question", icon: <FaQuestion className="d-none d-md-block" size="35px"/> },
    { title: "terms", icon: <MdOutlineNoteAlt className="d-none d-md-block"  size="35px"/> },
    { title: "safety", icon: <AiOutlineSafety className="d-none d-md-block"  size="35px"/> },
    { title: "connect", icon: <GoProjectSymlink className="d-none d-md-block"  size="35px"/> },
    { title: "complain", icon: <RiCustomerServiceFill className="d-none d-md-block"  size="35px"/> },
    { title: "other", icon: <MdOutlineDevicesOther className="d-none d-md-block"  size="35px"/> },
  ];
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center gap-2">
      <h2 className="text-center mb-3" style={{ fontWeight: "700" }}>
        الاسئلة الشائعة
      </h2>
      <div className="d-flex flex-row flex-md-column w-100 w-md-75 border p-3 gap-2">
        <ul className="d-flex flex-column q_list flex-md-row p-2 justify-content-center text-center">
          {questions.map((set) => (
            <li
              onClick={() => setActiveSet(set.title)}
              style={{ width: "160px", height: "100px", cursor: "pointer" }}
              className={`d-flex p-2 flex-column gap-2 align-items-center justify-content-center clr_p text-light ${
                set.title === activeSet && "activeQ"
              }`}
            >
              {icons
                .filter((icon) => icon.title === set.icon)
                .map((icon) => (
                  <>{icon.icon}</>
                ))}
              <p>{set.title}</p>
            </li>
          ))}
        </ul>
        <div style={{height:'400px', overflowY:'scroll'}} className="d-flex flex-column gap-2 p-4" dir="rtl ">
          {questions
            .find((set) => set.title == activeSet)
            .questions.map((q, index) => (
              <div className="pb-3 d-flex gap-2 flex-column " style={{borderBottom:'1px solid rgb(197, 197, 197)'}}>
                <p class="d-inline-flex gap-1">
                  <a
                    className="btn btn-light w-100"
                    data-bs-toggle="collapse"
                    href={`#${q.code + index}`}
                    role="button"
                    aria-expanded="false"
                    style={{textAlign: 'right'}}
                    aria-controls={`${q.code + index}`}
                  >
                    {q.q}
                  </a>
                </p>
                <div className="collapse" id={`${q.code + index}`}>
                  <div className="card card-body">
                    {q.a?.map((a)=><p className="my-1">{a}</p>)}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Freq;
