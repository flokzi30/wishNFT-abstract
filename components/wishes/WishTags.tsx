interface WishTagsProps {
  tags: string[];
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  onTagClick: (tag: string) => void;
}

export function WishTags({ tags, onTagClick }: WishTagsProps) {
  if (!tags?.length) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick(tag)}
          className="px-3 py-1.5 bg-primary-lighter text-primary-dark text-sm rounded-full 
            hover:bg-primary-light transition-colors duration-200 focus:outline-none 
            focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
        >
          #{tag}
        </button>
      ))}
    </div>
  );
}
