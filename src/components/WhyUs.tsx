import React, { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useTranslation } from "next-i18next";

type WhyUsProps = {
  name: string;
  location: string;
};

const WhyUs = ({ name, location }: WhyUsProps) => {
  const [size, setSize] = useState(0);
  const { t } = useTranslation();

  //choose the screen size
  const handleResize = () => {
    // Your code that uses window
    if (typeof window !== "undefined") {
      setSize(window.innerWidth);
    }
  };

  // create an event listener
  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const items = [
    {
      title: "serviceCovid19",
      icon: "/Coronavirus.png",
      link: "https://www.clinicsanmiguel.com/services/covid-19-testing",
    },
    {
      title: "serviceDiabetes",
      icon: "/Glucometer.png",
      link: "https://www.clinicsanmiguel.com/services/diabetes",
    },
    {
      title: "servicePrimaryCare",
      icon: "/Earth Care.png",
      link: "https://www.clinicsanmiguel.com/services/primary-care",
    },
    {
      title: "serviceInternalMedicine",
      icon: "/Pill.png",
      link: "https://www.clinicsanmiguel.com/services/internal-medicine",
    },
    {
      title: "serviceBloodWork",
      icon: "/Drop of Blood.png",
      link: "https://www.clinicsanmiguel.com/services/blood-work",
    },
    {
      title: "serviceWeightLoss",
      icon: "/Weight Kg.png",
      link: "https://www.clinicsanmiguel.com/services/weight-loss",
    },
  ];

  return (
    <div className="w-full min-h-[200px] bg-white flex items-center justify-center py-10">
      <div className="w-[95%] max-w-[1500px] flex flex-col gap-16 items-center">
        <h3 className="text-3xl font-semibold text-black leading-normal text-center">
          {t("whyChoose")} <span className="text-[#D01717]">{name}</span>{" "}
          {location}?
        </h3>
        <div className="w-full flex justify-between items-center pb-16">
          {/* <ChevronLeft className="text-[#525252]" size={50} /> */}

          {(size < 720
            ? items?.slice(0, 1)
            : size < 1200
            ? items?.slice(0, 3)
            : items
          ).map((item, index) => (
            <a href={item.link}>
              <div
                key={index}
                className="w-40 h-40 flex flex-col items-center cursor-pointer justify-center rounded-3xl gap-1 bg-[#D01717]"
              >
                <div className="w-[80px] h-[80px] rounded-full bg-none flex justify-center items-center">
                  <img src={item.icon} alt={item.title} className="w-[90%]" />
                </div>
                <p className="text-white font-">{t(item.title)}</p>
              </div>
            </a>
          ))}
          {/* <ChevronRight className="text-[#525252]" size={50} /> */}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
