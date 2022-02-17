import type { NextPage } from 'next';
import { BookTable } from '../components/BookTable';

const Cart: NextPage = () => {
  return (
    <div className='pt-20'>
      <h2 className='text-center'>買い物かごの中に入っている物</h2>
      <BookTable />
    </div>
  );
};

export default Cart;
