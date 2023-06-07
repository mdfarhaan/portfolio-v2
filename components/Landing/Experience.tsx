import { useRef, useState } from "react";
import { Heading, Section } from "../Shared";
import { HiOutlineExternalLink } from "react-icons/hi";
import { CgClose, CgMathPlus } from "react-icons/cg";

const Card = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { data, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
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
            <h2 className="text-3xl font-bold">{data.name}</h2>
            <a href={data.link} target="_blank">
              <HiOutlineExternalLink
                color="#fff"
                size={20}
                className="ml-2 cursor-pointer"
              />
            </a>
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
          <ul className="list-disc ml-5 mb-5 font-normal leading-5 text-lg">
            {data.description.map((item, index) => (
              <li key={index} className="my-2">
                {item}
              </li>
            ))}
          </ul>
          {data.skills.map((item) => (
            <span
              key={item}
              className="px-4 py-[3px] mx-1 text-md font-medium bg-secondary rounded"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experienceList = [
    {
      name: "Settyl",
      link: "https://settyl.com/",
      duration: "Dec 2021 - Present",
      position: "Frontend Developer",
      description: [
        "Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque sodales laoreet. vel luctus justo. Nulla aliquet blandit odio, posuere gravida ",
      ],
      skills: ["ReactJs", "React Native", "Flutter"],
    },
  ];

  return (
    <Section>
      <Heading title="Experience" />

      <div className="w-[90%] my-10">
        {experienceList.map((item, idx) => (
          <Card idx={idx} data={item} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
