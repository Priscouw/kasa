import React from "react";

const Tagname = ({ tagnames }) => {
  return (
    <ul className="tagnamesContainer">
      {tagnames.map((tagname, index) => (
        <li className="tagname" key={index}>
          {tagname}
        </li>
      ))}
    </ul>
  );
};

export default Tagname;
