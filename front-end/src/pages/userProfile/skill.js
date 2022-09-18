import React from 'react';

const Skills = (props) => {
  const { icon, desc } = props;
  return (
    <React.Fragment>
      <div className="flex gap-x-4">
        {icon}
        {desc}
      </div>
    </React.Fragment>
  );
};

export default Skills;
