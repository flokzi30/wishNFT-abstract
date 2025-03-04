export default function NetworkInfo() {
  return (
    <div className="bg-white rounded-xl p-4 border border-[var(--color-primary-lighter)] shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="min-w-[2rem] w-8 h-8 rounded-lg bg-[var(--color-primary-lighter)] flex items-center justify-center">
          <span className="text-lg">🌐</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-[var(--color-grey-900)]">
            Network
          </p>
          <p className="text-xs text-[var(--color-grey-600)] truncate">
            Currently available on Abstract Network
          </p>
        </div>
      </div>
    </div>
  );
}
