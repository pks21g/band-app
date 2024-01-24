import { useState } from "react";
import Year21 from "../components/Year21";
import Year20 from "../components/Year20";
import Year23 from "../components/Year23";
import Year22 from "../components/Year22";
import Year19 from "../components/Year19";

const Live = ({ props }) => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState("");
  const years = [];
  for (let i = currentYear; i >= 2019; i--) {
    years.push(i);
  }

  return (
    <div className="live">
      <h1 className="past-dates">PAST DATES</h1>
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        {years.map((year) => {
          return (
            <option value={year} key={year}>
              {year}
            </option>
          );
        })}
      </select>

      {year === "2019" && <Year19 />}
      {year === "2020" && <Year20 />}
      {year === "2021" && <Year21 />}
      {year === "2022" && <Year22 />}
      {year === "2023" && <Year23 />}
      {year === "2024" && <h2>No dates for {currentYear}</h2>}
    </div>
  );
};

export default Live;
