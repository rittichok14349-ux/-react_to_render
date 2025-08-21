import React from 'react';
const projects = [
  { title: 'Travel Landing Page', desc: 'เว็บท่องเที่ยว', github: '#', demo: '#' },
  { title: 'To-Do App', desc: 'แอปจัดการงาน', github: '#', demo: '#' }
];
const Projects = () => (
  <section className="py-20 px-6 bg-gray-50">
    <h2 className="text-4xl font-bold mb-6">โปรเจกต์</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map(p => (
        <div key={p.title} className="p-6 border rounded">
          <h3 className="text-2xl font-semibold">{p.title}</h3>
          <p className="mt-2">{p.desc}</p>
          <div className="mt-4 space-x-4">
            <a href={p.github} className="text-sky-600 hover:underline">GitHub</a>
            <a href={p.demo} className="text-sky-600 hover:underline">Live Demo</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Projects;
