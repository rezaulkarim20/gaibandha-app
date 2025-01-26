import { useState } from "react";
import Banner from "./Banner";
import Header from "./Header";
import Searce from "./Searce";
import Upjilalist from "./Upjilalist";

const GAIBANDHA = [
  {
    id: 1,
    title: "Gaibandha Sadar Upazila",
    Area: "324.05 square kilometers",
    Population: "499,196 (as of the 2022 census)",
    AdministrativeUnits: "1 Municipality (Gaibandha)",
    Union: "13 Union Parishads",
    KeyFeatures:
      "The district headquarters is located here. It includes historical sites and notable schools like Gaibandha Government Boys' High School (established in 1885).",
    isPremium: false,
  },
  {
    id: 2,
    title: "Gobindaganj Upazila",
    Area: "460.42 square kilometers",
    Population: 543144,
    AdministrativeUnits: "1 Municipality ",
    Union: "17 Union Parishads",
    KeyFeatures:
      "Largest Upazila in Gaibandha in terms of area. It has agricultural significance and includes the Gobindaganj Multilateral High School (established in 1912).",
    isPremium: false,
  },
  {
    id: 3,
    title: "Palashbari Upazila",
    Area: "185.24 square kilometers",
    Population: 267438,
    AdministrativeUnits: "1 Municipality",
    Union: "8 Union Parishads",
    KeyFeatures:
      "Known for its cultural activities and Palashbari S.M. Pilot High School (established in 1911).",
    isPremium: false,
  },
  {
    id: 4,
    title: "Sadullapur Upazila",
    Area: "230.12 square kilometers",
    Population: 313628,
    AdministrativeUnits: "0 Municipality",
    Union: "11 Union Parishads ",
    KeyFeatures:
      "Famous for its agricultural contributions and vibrant local bazaars.",
    isPremium: true,
  },
  {
    id: 5,
    title: "Sundarganj Upazila",
    Area: "362.04 square kilometers",
    Population: 380422,
    AdministrativeUnits: "1 Municipality",
    Union: " 15 Union Parishads",
    KeyFeatures:
      "Located along the Teesta River, known for fishing and riverine culture.",
    isPremium: false,
  },
  {
    id: 6,
    title: "Phulchhari Upazila",
    Area: "115.60 square kilometers",
    Population: 132332,
    AdministrativeUnits: "0 Municipality",
    Union: "7 Union Parishads ",
    KeyFeatures:
      "It is a low-lying area prone to flooding, with agricultural lands as its primary resource.",
    isPremium: true,
  },
  {
    id: 7,
    title: "Saghata Upazila",
    Area: "225.95 square kilometers",
    Population: 225012,
    AdministrativeUnits: "kplio,",
    Union: "10 Union Parishads ",
    KeyFeatures:
      "Located along the Teesta River, known for fishing and riverine culture.",
    isPremium: false,
  },
];

const OurDistrict = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [CheckPremium, setCheckPremium] = useState(false);
  const onChecker = () => {
    setCheckPremium(!CheckPremium);
  };
  return (
    <div className="mx-auto p-6">
      <Header />
      <Banner />
      <Searce
        CheckPremium={CheckPremium}
        onChecker={onChecker}
        searchTerm={searchTerm}
        onSearchUpjila={setSearchTerm}
      />
      <Upjilalist
        searchTerm={searchTerm}
        CheckPremium={CheckPremium}
        upjilas={GAIBANDHA}
      />
    </div>
  );
};

export default OurDistrict;
