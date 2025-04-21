
import React from "react";
import { categories } from "@/lib/data";
import { cn } from "@/lib/utils";
import { IndianRupee } from "lucide-react";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="mb-0">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        Categories
      </h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              selectedCategory === category.id
                ? "bg-primary text-primary-foreground shadow"
                : "bg-muted hover:bg-primary/10"
            )}
            aria-pressed={selectedCategory === category.id}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
