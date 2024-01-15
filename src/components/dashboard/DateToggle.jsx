import React from "react";

const data = ["Today", "Weekly", "Monthly"];

const DateToggle = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <div className="">
      <ul className="flex rounded-md px-2 py-1 bg-white justify-center items-center gap-1">
        {data.map((data, index) => (
          <li key={index}>
            <button
              onClick={() => setSelected(index)}
              className={`text-[14px] px-1 rounded-sm ${
                selected === index
                  ? "text-white bg-[#29b6f6]"
                  : "text-[#29b6f6]"
              } font-semibold`}
            >
              {data}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DateToggle;
