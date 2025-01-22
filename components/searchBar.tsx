import React, { useState } from "react";
import { useRouter } from "next/router";

const SearchBox: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    // Implement search logic here
    // For example, navigate to a search results page
    router.push(`/search?query=${searchQuery}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="w-64 px-4 py-2 rounded-md"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Search
      </button>
      <button
        onClick={onClose}
        className="text-gray-500 ml-2 hover:text-gray-700"
      >
        Close
      </button>
    </div>
  );
};

export default SearchBox;