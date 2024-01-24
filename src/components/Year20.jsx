import { year_2020 } from "../data/years";

const Year20 = () => {
  return (
    <div className="dates">
      {year_2020.map((data) => {
        return (
          <div key={data.id} className="date">
            <span className="venu-date">{data.date}</span>
            <span className="venu">{data.venue}</span>
            <span className="country">
              {data.city},{data.coutry}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Year20;
