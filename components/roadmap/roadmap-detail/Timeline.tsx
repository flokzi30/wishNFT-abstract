import { TimelineEvent } from './types';

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-grey-100 hover:border-primary-light transition-all duration-200">
      <div className="p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-grey-900 mb-6">Timeline</h2>
        <div className="relative pl-8 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary-lighter">
          {events.map((event, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full border-2 border-primary-light bg-white group-hover:border-primary-main group-hover:bg-primary-lighter transition-all duration-200" />
              <div>
                <p className="text-sm text-grey-500 mb-1">
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <h3 className="text-base font-medium text-grey-900 mb-1 group-hover:text-primary-dark transition-colors duration-200">
                  {event.event}
                </h3>
                <p className="text-sm text-grey-600">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 