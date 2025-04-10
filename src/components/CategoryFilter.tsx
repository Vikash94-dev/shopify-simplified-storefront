
import React from "react";
import { categories } from "@/lib/data";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              selectedCategory === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-primary/10"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
