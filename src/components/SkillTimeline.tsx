import React from 'react';

interface TechExperience {
  name: string;
  startDate: string;
  endDate: string;
  percentage: number; // percentage of experience time
  color: string; // color for the progress bar
}

const techExperiences: TechExperience[] = [
  {
    name: 'Angular',
    startDate: '2018-05-14',
    endDate: '2021-06-01',
    percentage: 70,
    color: 'rgba(221, 44, 55, 0.6)', // Faded red
  },
  {
    name: 'React',
    startDate: '2019-06-01',
    endDate: 'Present',
    percentage: 85,
    color: 'rgba(97, 218, 251, 0.6)', // Faded light blue
  },
  {
    name: 'Vue',
    startDate: '2019-01-01',
    endDate: '2021-12-31',
    percentage: 60,
    color: 'rgba(65, 185, 90, 0.6)', // Faded green
  },
  {
    name: 'NodeJS',
    startDate: '2020-01-01',
    endDate: 'Present',
    percentage: 75,
    color: 'rgba(67, 186, 52, 0.6)', // Faded dark green
  },
  {
    name: 'SQL',
    startDate: '2018-05-14',
    endDate: '2020-05-14',
    percentage: 50,
    color: 'rgba(52, 152, 219, 0.6)', // Faded blue
  },
  {
    name: 'Mongo',
    startDate: '2018-06-01',
    endDate: 'Present',
    percentage: 80,
    color: 'rgba(59, 201, 48, 0.6)', // Faded green
  },
  {
    name: 'Google Cloud Platform',
    startDate: '2020-01-01',
    endDate: 'Present',
    percentage: 65,
    color: 'rgba(219, 69, 55, 0.6)', // Faded red
  },
];

const TechTimeline: React.FC = () => {
  return (
    <section className="py-16 bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">My Tech Timeline</h2>
        <div className="relative">
          {techExperiences.map((tech, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between items-center">
                <div className="font-bold">{tech.name}</div>
                <div className="text-sm">{tech.percentage}%</div>
              </div>
              <div className="w-full bg-gray-300 rounded h-4">
                <div
                  className="h-4 rounded"
                  style={{
                    width: `${tech.percentage}%`,
                    backgroundColor: tech.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTimeline;
