import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2 font-heading">
        {title}
      </h2>
      <p className="text-lg text-secondary-light">{subtitle}</p>
      <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
    </div>
  );
};

export default SectionHeading;