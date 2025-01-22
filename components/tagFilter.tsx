// components/TagFilter.tsx
import Link from "next/link";

interface TagFilterProps {
  tags: string[];
  activeTag?: string;
}

export default function TagFilter({ tags, activeTag }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Show "All" option to clear filters */}
      <Link
        href="/shop"
        className={`px-4 py-2 border ${
          !activeTag
            ? "bg-[#B88E2F] text-white"
            : "bg-white text-[#B88E2F]"
        } hover:bg-[#B88E2F] hover:text-white transition-colors duration-300`}
      >
        All
      </Link>

      {/* Display tags */}
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/shop?tag=${encodeURIComponent(tag)}`}
          className={`px-4 py-2 border ${
            activeTag === tag
              ? "bg-[#B88E2F] text-white"
              : "bg-white text-[#B88E2F]"
          } hover:bg-[#B88E2F] hover:text-white transition-colors duration-300`}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}