import React from 'react';
const skills = ['HTML', 'CSS', 'JS', 'React', 'Tailwind'];
const Skills = () => (
  <section className="py-20 px-6">
    <h2 className="text-4xl font-bold mb-6">ทักษะ</h2>
    <div className="flex flex-wrap gap-4">
      {skills.map(s => <span key={s} className="bg-sky-100 px-4 py-2 rounded">{s}</span>)}
    </div>
  </section>
);
export default Skills;

