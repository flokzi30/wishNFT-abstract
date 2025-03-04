interface GradientWrapperProps {
  children: React.ReactNode;
}

const GradientWrapper = ({ children }: GradientWrapperProps) => {
  return (
    <div className="relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/95 -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10 opacity-40" />
      
      {/* Content */}
      {children}
    </div>
  );
};

export default GradientWrapper; 