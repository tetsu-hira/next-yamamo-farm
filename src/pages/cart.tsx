import type { NextPage } from 'next';
import { BookTable } from '../components/BookTable';
import { SignInForm } from '../components/SignInForm';
import { useAuthState } from '../hooks/useAuthState';

const Cart: NextPage = () => {
  const { isSignedIn } = useAuthState();

  return (
    <main className='bg-green-300 pb-16'>
      <div className='pt-20'>
        <div className='my-20 bg-white shadow'>
          {isSignedIn ? <div>現在サインインしています</div> : <div>現在サインアウトしています</div>}
        </div>
        <div className='my-20 bg-white shadow'>
          <h2 className='text-center'>買い物かごの中に入っている物</h2>
          <BookTable />
        </div>
      </div>
    </main>
  );
};

export default Cart;
