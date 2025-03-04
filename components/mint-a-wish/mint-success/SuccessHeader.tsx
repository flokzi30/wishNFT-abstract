export function SuccessHeader() {
  return (
    <div className="text-center mb-12">
      {/* Success Message */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-success-lighter)] text-[var(--color-success-dark)]">
          <span className="text-xl">🎉</span>
          <span className="text-sm font-medium">Congratulations!</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-grey-900)]">
          Your Wish Has Been Minted!
        </h1>

        <div className="max-w-xl mx-auto">
          <p className="text-lg text-[var(--color-grey-600)]">
            Your wish is now permanently recorded on the blockchain. Share it
            with the world and inspire others to join the movement!
          </p>
        </div>
      </div>
    </div>
  );
}
