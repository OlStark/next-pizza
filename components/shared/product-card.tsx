import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Title } from ".";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, imageUrl, price, id, className, }) => {
    return (
        <div className="flex flex-col items-center border border-gray-300 p-4 rounded-lg">
            <Link href="/product/1">
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <Image width={215} height={215} className="h-[215px] w-[215px]" src={imageUrl} alt="Logo" />
                </div>
                <Title text={name} size="sm" className="mt-3 mb-1 font-bold"/>
                <p className="text-sm text-gray-400">
                    Цыпленок, моцарелла, грибы
                </p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-[20px]">
                        от <b>{price} ₽</b> 
                    </span>

                    <Button variant="secondary" className="text-base font-bold">
                        <Plus size={20} className="mr-1"/>
                        Добавить
                    </Button>
                </div>
            </Link>
        </div>
    )
}