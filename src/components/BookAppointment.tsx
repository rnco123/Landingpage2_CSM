import React from "react";
import { User } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import dayjs from "dayjs";
type BookAppointmentProps = {
  bgUrl: string;
};

const BookAppointment = ({ bgUrl }: BookAppointmentProps) => {
  const { t } = useTranslation();
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [bookAppointment, setBookAppointment] = useState("");
  const [healthTreatment, setHealthTreatment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setHealthTreatment(event.target.value);
  };
  const handleChangeTime = (event: SelectChangeEvent) => {
    setTime(event.target.value);
  };

  const handleSubmit = async () => {
    console.log("in submit");
    try {
      // setItems([...items, newItem]);
      await addDoc(collection(db, "appointment"), {
        _phonenumber: phonenumber,
        _email: email,
        _bookAppointment: bookAppointment,
        _healthTreatment: healthTreatment,
        _date: date,
        _time: time,
      });
      console.log("submitted");
    } catch (err) {
      console.log("error in submit", err);
    }
  };
  const services = [
    { icon: "/Walking Skin Type 1.png", text: "walkInsWelcome" },
    { icon: "/Office.png", text: "clinicVisit" },
    { icon: "/Protect.png", text: "noInsuranceNeeded" },
    { icon: "/Language Skill.png", text: "bilingual" },
  ];
  return (
    <div className="w-full min-h-screen flex-items-center">
      <div className="w-full flex justify-center bg-[#D01717] py-20 h-[60vh]">
        <div className="w-[90%] max-w-[1350px] flex flex-col relative py-10">
          <div className="w-full flex justify-between">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <img src={service.icon} className="h-16 lg:h-20" alt="" />
                <span className="font-light text-white text-center text-[15px] md:text-base">
                  {t(service.text)}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full flex bg-white rounded-xl min-h-[40vh] absolute top-[70%] shadow-md">
            <div className="flex-[3] px-8 lg:px-16 py-12 flex flex-col justify-between gap-12">
              <h4 className="text-[#A71A1E] text-lg lg:text-xl font-extrabold">
                {t("quickAssessment")}
              </h4>
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#333333]">
                {t("bookAppointment")}
              </h2>
              <div className="w-full">
                <div className="flex w-full justify-between">
                  <div className="flex flex-col gap-10 w-1/2">
                    <div className="flex gap-2 items-start w-full">
                      <User size={30} />
                      <div className="flex flex-col w-full">
                        <span className="text-lg lg:text-xl font-bold text-[#333333]">
                          {t("phone")}
                        </span>
                        <input
                          type="text"
                          className="border-b-2 w-[90%] lg:w-[75%] text-black  outline-none p-1 border-[#D01717] font-medium text-sm lg:text-base"
                          placeholder={t("enterPhone")}
                          value={phonenumber}
                          onChange={(e: any) => {
                            setPhoneNumber(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 items-start w-full">
                      <User size={30} />
                      <div className="flex flex-col w-full">
                        <span className="text-lg lg:text-xl font-bold text-[#333333]">
                          {t("bookAppointment")}
                        </span>
                        <input
                          type="text"
                          className="border-b-2 w-[90%] lg:w-[75%] text-black  outline-none p-1 border-[#D01717] font-medium text-sm lg:text-base"
                          placeholder="Enter phone no. here"
                          value={bookAppointment}
                          onChange={(e: any) => {
                            setBookAppointment(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 items-start w-full">
                      <User size={30} />
                      <div className="flex flex-col w-full">
                        <span className="text-lg lg:text-xl font-bold text-[#333333]">
                          {t("date")}
                        </span>
                        {/* <input
                          type="text"
                          className="border-b-2 w-[90%] lg:w-[75%] text-black  outline-none p-1 border-[#D01717] font-medium text-sm lg:text-base"
                          placeholder={t("selectDate")}
                          value={date}
                          onChange={(e: any) => {
                            setDate(e.target.value);
                          }}
                        /> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker defaultValue={dayjs("2022-04-17")} />
                        </LocalizationProvider>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 w-1/2">
                    <div className="flex gap-2 items-start w-full">
                      <User size={30} />
                      <div className="flex flex-col w-full">
                        <span className="text-lg lg:text-xl font-bold text-[#333333]">
                          {t("email")}
                        </span>
                        <input
                          type="text"
                          className="border-b-2 w-[90%] lg:w-[75%] text-black  outline-none p-1 border-[#D01717] font-medium text-sm lg:text-base"
                          placeholder={t("enterEmail")}
                          value={email}
                          onChange={(e: any) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 items-start w-full">
                      <User size={30} />
                      <div className="flex flex-col w-full">
                        <span className="text-lg lg:text-xl font-bold text-[#333333]">
                          {t("healthTreatment")}
                        </span>
                        {/* <input
                          type="text"
                          className="border-b-2 w-[90%] lg:w-[75%] outline-none text-black  p-1 border-[#D01717] font-medium text-sm lg:text-base"
                          placeholder={t("selectTreatment")}
                          onChange={(e: any) => {
                            setHealthTreatment(e.target.value);
                          }}
                          value={healthTreatment}
                        /> */}
                        <FormControl variant="standard" sx={{ minWidth: 120 }}>
                          {/* <InputLabel id="demo-simple-select-standard-label">
                            selectTreatment
                          </InputLabel> */}
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={healthTreatment}
                            onChange={handleChange}
                            label="selectTreatment"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>DOT Physical</MenuItem>
                            <MenuItem value={20}>Family Medicine</MenuItem>
                            <MenuItem value={30}>Immigration Exams</MenuItem>
                            <MenuItem value={40}>School Physicals</MenuItem>
                            <MenuItem value={50}>EKG</MenuItem>
                            <MenuItem value={60}>Blood Work</MenuItem>
                            <MenuItem value={70}>STD Testing</MenuItem>{" "}
                            <MenuItem value={80}>Diabetes</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start w-full">
                      <User size={30} />
                      <div className="flex flex-col w-full">
                        <span className="text-lg lg:text-xl font-bold text-[#333333]">
                          {t("time")}
                        </span>
                        {/* <input
                          type="text"
                          className="border-b-2 w-[90%] lg:w-[75%] text-black outline-none p-1 border-[#D01717] font-medium text-sm lg:text-base"
                          placeholder={t("selectTime")}
                          onChange={(e: any) => {
                            setTime(e.target.value);
                          }}
                          value={time}
                        /> */}
                        <FormControl variant="standard" sx={{ minWidth: 80 }}>
                          {/* <InputLabel id="demo-simple-select-standard-label">
                            selectTreatment
                          </InputLabel> */}
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={time}
                            onChange={handleChangeTime}
                            label="selectTime"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>10am</MenuItem>
                            <MenuItem value={11}>11am</MenuItem>
                            <MenuItem value={12}>12am</MenuItem>
                            <MenuItem value={13}>1pm</MenuItem>
                            <MenuItem value={14}>2pm</MenuItem>
                            <MenuItem value={15}>3pm</MenuItem>
                            <MenuItem value={16}>4pm</MenuItem>
                            <MenuItem value={17}>5pm</MenuItem>
                            <MenuItem value={18}>6pm</MenuItem>
                            <MenuItem value={19}>7pm</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center pr-10">
                <button
                  className="py-4 px-16 text-white font-medium text-sm bg-[#D01717] rounded-lg"
                  onClick={handleSubmit}
                >
                  {t("submit")}
                </button>
              </div>
            </div>
            <div
              className="hidden lg:flex flex-[1.5] relative rounded-r-xl"
              style={{
                background: `url("${bgUrl}") no-repeat center`,
                backgroundSize: "cover",
              }}
            >
              <div className="w-full h-full bg-[#8C8C8C] opacity-[60%] absolute top-0 left-0"></div>
              <div className="h-full w-full flex flex-col gap-4 items-center justify-center pt-[25%]">
                <Image
                  src="/2433340 2.png"
                  width={100}
                  height={100}
                  alt="logo"
                  className="z-10"
                />
                <span className="text-white text-center text-3xl font-semibold z-10 w-1/2">
                  {t("clinicaSanMiguel")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[50vh] bg-[#F9F8F6]" />
    </div>
  );
};

export default BookAppointment;
