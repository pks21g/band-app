import { year_2022 } from "../../data/years";

const Year22 = () => {
  return (
    <div className="dates">
      {year_2022.map((data) => {
        return (
          <div key={data.id} className="date">
            <span className="venu-date">{data.date}</span>
            <span className="venu">{data.venue}</span>
            <span className="country">
              {data.city},{data.country}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Year22;
