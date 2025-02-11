import React from "react";
import { Title } from ".";

interface ProductsGroupListProps {
    title: string;
    items: any[];
    listClassName?: string;
    className?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({ title, items, listClassName, className, categoryId }) => {
    return (
        <div className={className}>
            <Title text={title} size="lg" className="mb-5 font-extrabold"/>
        </div>
    )
}