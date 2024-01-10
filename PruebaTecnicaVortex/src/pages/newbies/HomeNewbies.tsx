import React from "react";
import NavBar from "../../components/NavBar";
import Papers from "../../components/Papers";
import Experts from "../../components/Experts";

interface PapersInfo {
  title: string;
  img: string;
}
interface ExpertInfo {
  name: string;
  stars: number;
}
export default function HomeNewbies() {
  const papers: PapersInfo[] = [
    {
      title: "Lorem Ipsum",
      img: "https://imgv2-1-f.scribdassets.com/img/document/455509058/original/2e9ed625cb/1696310360?v=1",
    },
    {
      title: "Lorem Ipsum",
      img: "https://imgv2-1-f.scribdassets.com/img/document/455509058/original/2e9ed625cb/1696310360?v=1",
    },
    {
      title: "Lorem Ipsum",
      img: "https://imgv2-1-f.scribdassets.com/img/document/455509058/original/2e9ed625cb/1696310360?v=1",
    },
  ];
  const experts: ExpertInfo[] = [
    {
      name: "Experto 1",
      stars: 5,
    },
    {
      name: "Experto 2",
      stars: 4,
    },

    {
      name: "Experto 3",
      stars: 3,
    },

    {
      name: "Experto 4",
      stars: 2,
    },

    {
      name: "Experto 5",
      stars: 1,
    },
  ];
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex justify-around">
        <div>
          <div className="w-full flex justify-between my-10  ">
            <h2 className="text-2xl font-bold ">Papers</h2>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 3.1875C9.37157 3.1875 3.1875 9.37157 3.1875 17C3.1875 24.6284 9.37157 30.8125 17 30.8125C24.6284 30.8125 30.8125 24.6284 30.8125 17C30.8125 9.37157 24.6284 3.1875 17 3.1875ZM18.0625 12.75C18.0625 12.1632 17.5868 11.6875 17 11.6875C16.4132 11.6875 15.9375 12.1632 15.9375 12.75V15.9375H12.75C12.1632 15.9375 11.6875 16.4132 11.6875 17C11.6875 17.5868 12.1632 18.0625 12.75 18.0625H15.9375V21.25C15.9375 21.8368 16.4132 22.3125 17 22.3125C17.5868 22.3125 18.0625 21.8368 18.0625 21.25V18.0625H21.25C21.8368 18.0625 22.3125 17.5868 22.3125 17C22.3125 16.4132 21.8368 15.9375 21.25 15.9375H18.0625V12.75Z"
                fill="#0F172A"
              />
            </svg>
          </div>
         <div>
         {papers.map((p) => (
            <Papers user={""} title={p.title} img={p.img} />
          ))}
         </div>
        </div>
        <div className="w-3/5">
          <h2 className="text-2xl font-bold my-10">Expertos Disponibles</h2>
          <div className="flex flex-col h-full gap-16">
            {" "}
            {experts.map((ex) => (
              <Experts name={ex.name} stars={ex.stars} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
