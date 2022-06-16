import React from 'react';
import { ApiCategories } from '../apifolder/CategoryApi';
import Category from './Category';
const Categories = () => {
  return <div className='flex flex-wrap p-10 item-center justify-center mobile:flex-col bg-slate-100'>
    {ApiCategories.map((category,index)=>(
        <Category item={category} key={index}/>
    ))}
  </div>;
};

export default Categories;