import { useState } from 'react';
import { add } from '../lib/add';
import { Book } from '../lib/books';

export default function AddBook() {
  const [books, setBooks] = useState<Book[]>([]);
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const changeBook = () => {
    setBooks([...books, { id: id, title: title, author: author, price: price }]);
    console.log(books);
  };
  const changeId = (e: any) => {
    setId(e.target.value);
    console.log(id);
  };
  const changeTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const changeAuthor = (e: any) => {
    setAuthor(e.target.value);
  };
  const changePrice = (e: any) => {
    setPrice(e.target.value);
  };

  return (
    <div className='w-auto text-center m-6'>
      <input className='block bg-slate-200' onChange={changeId} type='text'></input>
      <input className='block bg-slate-200' onChange={changeTitle} type='text' id={title}></input>
      <input className='block bg-slate-200' onChange={changeAuthor} type='text' id={author}></input>
      <input className='block bg-slate-200' onChange={changePrice} type='text'></input>
      <button className='bg-red-400 m-4 px-6 py-2 text-white rounded-full'>保存</button>
    </div>
  );
}
