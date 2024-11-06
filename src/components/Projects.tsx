import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-16">
      <div className="container mx-auto px-4 md:px-8 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg">Project 1</div>
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg">Project 2</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
