import type { NextPage } from 'next';
import Link from 'next/link';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string[];
};

export default function index({ posts }: any) {
  return (
    <div className='pt-32 pl-8'>
      <div className='text-4xl'>POST一覧</div>
      <ul>
        {posts.map((post: Post) => {
          return (
            <li key={post.id} className='list-disc m-4'>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps(params: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  // console.log(posts);
  return { props: { posts } };
}
