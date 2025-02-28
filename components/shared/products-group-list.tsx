"use client";

import React, { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { ProductCard, Title } from ".";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface ProductsGroupListProps {
  title: string;
  items: any[];
  listClassName?: string;
  className?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({
  title,
  items,
  listClassName,
  className,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLElement>,
    {
      threshold: 0.4,
    }
  );

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, title, categoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
