import React from 'react';
import Skills from './skill';
import { BsAlarmFill } from 'react-icons/bs';
const SkillsCategory = (props) => {
  const { category } = props;
  return (
    <div className="mb-10">
      <h3 className="font-bold text-slate-500 mb-3">{category}</h3>
      <Skills icon={<BsAlarmFill />} desc="react" />
    </div>
  );
};

export default SkillsCategory;
