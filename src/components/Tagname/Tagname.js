import React from "react";

const Tagname = ({ tagnames }) => {
  return (
    <>
      {tagnames.map((tagname, index) => (
        <p className="tagname" key={index}>
          {tagname}
        </p>
      ))}
    </>
  );
};

export default Tagname;
