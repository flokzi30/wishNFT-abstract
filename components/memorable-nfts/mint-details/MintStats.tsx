import React from 'react';

const stats = [
  {
    title: 'Mint Date',
    value: 'TBA',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    bgColor: 'bg-primary-lighter',
    textColor: 'text-primary-dark',
  },
  {
    title: 'Mint Price',
    value: 'TBA',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    bgColor: 'bg-secondary-lighter',
    textColor: 'text-secondary-dark',
  },
  {
    title: 'Total Supply',
    value: '3,500',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    bgColor: 'bg-success-lighter',
    textColor: 'text-success-dark',
  },
  {
    title: 'Blockchain',
    value: 'Abstract',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    bgColor: 'bg-info-lighter',
    textColor: 'text-info-dark',
  },
];

export default function MintStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 text-center border border-grey-100"
        >
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.bgColor} ${stat.textColor} mb-4`}
          >
            {stat.icon}
          </div>
          <h3 className="text-sm font-medium text-grey-600 mb-1">{stat.title}</h3>
          <p className="text-xl font-bold text-grey-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
} 