import { motion, AnimatePresence } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import JourneyCard from "./JourneyCard";
import { allJourney } from "@/public/allJourney";
import AnimatedSection from "../AnimatedSection";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const JourneyCards = () => {
  const data = allJourney;
  

  return (
    <>
      <div className="w-full flex flex-col items-center">
        

        <div className="w-full">
          <div>
            {data.map((card, index) => {
              return <JourneyCard key={index} {...card} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyCards;
