"use client";
import React from "react";

interface SortDropdownProps {
  sortOption: string;
  onSortChange: (value: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ sortOption, onSortChange }) => {
  return (
    <section className="flex justify-center mb-6">
      <div className="flex items-center gap-3">
        <label htmlFor="sort-select" className="text-secondary font-medium">
          Sort by price:
        </label>
        <select
          id="sort-select"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="default">Default</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>
    </section>
  );
};

export default SortDropdown;
