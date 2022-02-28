import type { NextPage } from 'next';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string[];
};

export default function post({ posts }: any) {
  return (
    <div className='pt-32 pl-8'>
      <h1>POST：{posts.id}</h1>
      <h2>NAME：{posts.title}</h2>
      <p>BODY：{posts.body}</p>
    </div>
  );
}

export async function getServerSideProps(params: any) {
  const id = params.params.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await res.json();
  if (!Object.keys(posts).length) {
    return {
      notFound: true,
    };
  }
  return { props: { posts } };
}
