import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { FaHtml5, FaCss3Alt, FaVuejs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiGraphql, SiMongodb, SiTypescript, SiAngular, SiBootstrap, SiFirebase, SiNestjs, SiTailwindcss, SiMui, SiGooglecloud, SiMysql } from 'react-icons/si';
import { companies, Company } from '../constants/experience';

ChartJS.register(ArcElement, Tooltip);

const skillIcons: { [key: string]: React.ReactElement } = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <SiJavascript />,
  Vue: <FaVuejs />,
  ReactJS: <FaReact />,
  NodeJS: <FaNodeJs />,
  GraphQL: <SiGraphql />,
  MongoDB: <SiMongodb />,
  TypeScript: <SiTypescript />,
  Angular: <SiAngular />,
  Bootstrap: <SiBootstrap />,
  Firebase: <SiFirebase />,
  NestJS: <SiNestjs />,
  TailwindCSS: <SiTailwindcss />,
  SQL: <SiMysql />,
  GCP: <SiGooglecloud />,
  MaterialUI: <SiMui />
};

const calculateDuration = (start: Date, end: Date): number => {
  return end.getTime() - start.getTime();
};

const calculateTotalCareerDuration = (): number => {
  const today = new Date();
  const careerStart = new Date("2018-05-14");
  const totalDuration = calculateDuration(careerStart, today);
  return totalDuration;
};

const calculateTimeAtCompany = (startDate: string, endDate: string): { daysSpent: number; percentage: number } => {
  const today = new Date();
  const start = new Date(startDate).getTime();
  const end = endDate === "Present" ? today.getTime() : new Date(endDate).getTime();
  const timeSpent = end - start;
  const daysSpent = Math.round(timeSpent / (1000 * 60 * 60 * 24));
  const percentage = (timeSpent / calculateTotalCareerDuration()) * 100;

  return { daysSpent, percentage };
};

const EmployerSkills: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company>(companies[0]);

  const { daysSpent, percentage } = calculateTimeAtCompany(
    selectedCompany.startDate,
    selectedCompany.endDate
  );

  const pieData = {
    labels: [selectedCompany.name, "Other Companies"],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#4F46E5", "#A5B4FC"],
        hoverOffset: 8
      }
    ]
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    animation: {
      duration: 500,
    },
    elements: {
      arc: {
        hoverOffset: 0,
      },
    },
  };

  return (
    <section id="experience" className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row">

        {/* Company Selection */}
        <div className="md:w-1/4 space-y-6">
          {companies.map((company, index) => (
            <div
              key={index}
              onClick={() => setSelectedCompany(company)}
              className={`p-4 cursor-pointer transition-transform transform hover:scale-105 ${
                selectedCompany.name === company.name ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-800'
              } text-gray-800 dark:text-white rounded-lg flex items-center space-x-4`}
            >
              <img src={company.logo} alt={`${company.name} logo`} className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{company.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {company.startDate} - {company.endDate === "Present" ? "Present" : company.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Company Details */}
        <div className="md:w-3/4 md:ml-8 mt-8 md:mt-0 p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg min-h-[300px] flex flex-col md:flex-row md:items-start">
          <div className="flex-1 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">{selectedCompany.name}</h2>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
              {selectedCompany.startDate} - {selectedCompany.endDate === "Present" ? "Present" : selectedCompany.endDate}
            </p>

            {/* Roles */}
            {selectedCompany.roles.map((role, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold">{role.title}</h3>
                <ul className="list-disc list-inside text-sm mb-2">
                  {role.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Technologies Used Section */}
            <div className="mt-4 border-t border-gray-300 dark:border-gray-600 pt-4">
              <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {selectedCompany.skills.map((skill, i) => (
                  <div
                    key={i}
                    title={skill} // Tooltip text
                    className="text-2xl p-3 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer transition-transform transform hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-600 active:scale-95 active:bg-gray-400 dark:active:bg-gray-500 tooltip"
                  >
                    {skillIcons[skill] || skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pie Chart Display */}
          <div className="hidden md:block w-48 h-48 mt-8 md:mt-0 md:ml-8 flex-shrink-0">
            <h3 className="text-xl font-semibold mb-2 text-center">Time Spent</h3>
            <Pie data={pieData} options={pieOptions} />
            <p className="text-sm mt-2 text-center">
              <strong>{daysSpent}</strong> days ({percentage.toFixed(2)}% of total career)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerSkills;
