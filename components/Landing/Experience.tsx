import { useRef, useState } from "react";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { CgClose, CgMathPlus } from "react-icons/cg";
import { Heading, Section } from "../Shared";
import { experience } from "../helper/data";

const Card = (props) => {
  const answerElRef: any = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { data, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0]?.offsetHeight;
    setState(!state);

    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden text-white "
      key={idx}
      onClick={handleOpenAnswer}
    >
      <div className="border-2 border-blue-500 rounded p-5 bg-secondary">
        <div className="flex justify-between items-center">
          <span className="flex items-center">
            <h2 className="text-3xl font-semibold">{data.name}</h2>
            {data.link && (
              <Link href={data.link} target="_blank">
                <HiOutlineExternalLink
                  color="#fff"
                  size={20}
                  className="ml-2 cursor-pointer"
                />
              </Link>
            )}
          </span>
          <p className="text-lg font-medium">{data.duration}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-normal leading-1">{data.position}</p>
          {state ? (
            <CgClose size={20} className="ml-2 cursor-pointer" />
          ) : (
            <CgMathPlus size={20} className="ml-2 cursor-pointer" />
          )}
        </div>
      </div>

      <div
        ref={answerElRef}
        className="duration-300 "
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div className="bg-blue-500 rounded p-5 text-white">
          <ul className="list-disc ml-5 mb-5 font-normal leading-5 text-xl">
            {data.description.map((item, index) => (
              <li key={index} className="my-2">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap">
            {data.skills.map((item) => (
              <span
                key={item}
                className="px-4 w-fit py-[3px] mx-1 mt-1 text-sm lg:text-md font-medium bg-secondary rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <Section id="experience-section">
      <Heading title="Experience" />

      <div className="w-[90%] my-10">
        {experience.map((item, idx) => (
          <Card idx={idx} key={idx} data={item} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
