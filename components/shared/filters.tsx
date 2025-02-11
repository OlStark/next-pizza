import React from 'react';
import { FilterCheckbox } from './index';
import { Title } from './title';
import { Input } from '../ui';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>

            <div className='flex flex-col gap-4'>
                <FilterCheckbox text="Можно собирать" value="1"/>
                <FilterCheckbox text="Новинки" value="2"/>
            </div>
            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Цена от и до:</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' className='hide-number-arrows' min={0} max={1000} defaultValue={0} placeholder='0'/>
                    <Input type='number' className='hide-number-arrows' min={0} max={1000} placeholder='1000'/>
                </div>
                {/* <RangeSider min={0} max={5000} defaultValue={[0, 1000]}/> */}
            </div>
        </div>
    )
};