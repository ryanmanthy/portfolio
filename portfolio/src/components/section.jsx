import React from 'react';

const Section = ({ header, experiences }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold">{header}</h2>
      <hr className="w-[750px] border-t-2 border-black mt-2 mb-4" />
      <ul className="list-none">
        {experiences.map((experience, index) => (
          <li key={index} className="text-lg mb-2">
            {experience}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section;
