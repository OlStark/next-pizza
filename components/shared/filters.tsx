
import React from 'react';
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider } from './index';
import { Title } from './title';
import { Input } from '../ui';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>

            {/* Верхние чекбоксы */}
            <div className='flex flex-col gap-4'>
                <FilterCheckbox text="Можно собирать" value="1"/>
                <FilterCheckbox text="Новинки" value="2"/>
            </div>

            {/* Фильтр цен */}
            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Цена от и до:</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' className='hide-number-arrows' min={0} max={1000} defaultValue={0} placeholder='0'/>
                    <Input type='number' className='hide-number-arrows' min={0} max={1000} placeholder='1000'/>
                </div>
                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>
            </div>
            <CheckboxFiltersGroup
                title="Ингридиенты"
                className='mt-5'
                limit={6}
                defaultItems={[
                    {
                        text: 'Сыр',
                        value: '1',
                    },
                    {
                        text: 'Пепперони',
                        value: '2',
                    },
                    {
                        text: 'Грибы',
                        value: '3',
                    },
                    {
                        text: 'Сыр',
                        value: '4',
                    },
                    {
                        text: 'Сыр',
                        value: '5',
                    },
                    {
                        text: 'Сыр',
                        value: '6',
                    },
                    {
                        text: 'Сыр',
                        value: '7',
                    },
                ]}
                items={[
                    {
                        text: 'Сыр',
                        value: '1',
                    },
                    {
                        text: 'Пепперони',
                        value: '2',
                    },
                    {
                        text: 'Грибы',
                        value: '3',
                    },
                    {
                        text: 'Сыр',
                        value: '4',
                    },
                    {
                        text: 'Сыр',
                        value: '5',
                    },
                    {
                        text: 'Сыр',
                        value: '6',
                    },
                    {
                        text: 'Сыр',
                        value: '7',
                    },
                ]}/>
        </div>
    )
};