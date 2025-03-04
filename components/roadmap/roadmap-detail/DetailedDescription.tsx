interface DetailedDescriptionProps {
  description: string;
}

export const DetailedDescription = ({ description }: DetailedDescriptionProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-grey-100 hover:border-primary-light transition-all duration-200">
      <div className="p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-grey-900 mb-6">Detailed Description</h2>
        <div className="prose prose-lg max-w-none">
          {description.split('\n').map((line, index) => (
            <p key={index} className="mb-4 last:mb-0 text-grey-600 leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}; 