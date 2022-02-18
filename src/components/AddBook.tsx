import { useState } from 'react';
import { Book, addBook } from '../lib/books';

export default function AddBook() {
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [book, setBook] = useState<Book>({ id: id, title: title, author: author, price: price });

  const changeBook = () => {
    const new_book: Book = { id: id, title: title, author: author, price: price };
    setBook(new_book);
    addBook(new_book);
  };
  const changeId = (e: any) => {
    const new_id = e.target.value;
    setId(new_id);
  };
  const changeTitle = (e: any) => {
    const new_title = e.target.value;
    setTitle(new_title);
  };
  const changeAuthor = (e: any) => {
    const new_author = e.target.value;
    setAuthor(new_author);
  };
  const changePrice = (e: any) => {
    const new_price = e.target.value;
    setPrice(new_price);
  };

  return (
    <div className='w-auto text-center m-6'>
      <input className='block bg-slate-200' onChange={changeId} type='text'></input>
      <input className='block bg-slate-200' onChange={changeTitle} type='text' id={title}></input>
      <input className='block bg-slate-200' onChange={changeAuthor} type='text' id={author}></input>
      <input className='block bg-slate-200' onChange={changePrice} type='text'></input>
      <button className='bg-red-400 m-4 px-6 py-2 text-white rounded-full' onClick={changeBook}>
        保存
      </button>
    </div>
  );
}
