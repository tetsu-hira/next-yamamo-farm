import React from 'react';
import { useForm } from 'react-hook-form';

export default function Search({ menuData = [] }) {
  // form
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = async (data: any) => {
    location.href = `/search/${data.search}`;
  };
  return (
    <div className='bg-white py-1'>
      <fieldset className='submenu-search-fieldset px-3'>
        <label htmlFor='search' className='hidden'>
          search
        </label>

        <div className='relative'>
          <input
            ref={register()}
            id='search'
            name='search'
            type='text'
            className='appearance-none rounded-full w-full py-2 pl-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-slate-200'
            placeholder='search word'
          />
          <button
            onClick={handleSubmit(onSubmit)}
            className='inline-block w-7 absolute text-gray-400 right-2 top-1'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </fieldset>
    </div>
  );
}
