import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = "mb-8" }) => {
  return (
    <section className={className}>
      <h2 className="text-2xl font-semibold text-[var(--color-grey-900)] mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section; 