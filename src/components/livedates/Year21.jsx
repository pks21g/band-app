import { year_2021 } from "../../data/years";

const Year21 = () => {
  return (
    <div className="dates">
      {year_2021.map((data) => {
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

export default Year21;
