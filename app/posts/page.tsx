import Link from "next/link";
import { Suspense } from "react";
import PostItem from "../../components/PostItem/PostItem";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  // return setTimeout(() => {
  return res.json();
  // }, 2000);
}

const HomePage = async () => {
  const data = await getData();
  return (
    <ul>
      {data.map((post) => (
        <PostItem key={post.id} post={post} />
        // <li key={post.id}>
        //   <h2>{post.title}</h2>
        //   <p>{post.body}</p>

        //   <Link href={`post/${post.id}`}>
        //     <button>GO</button>
        //   </Link>
        // </li>
      ))}

      {data.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>

          <Link href={`post/${post.id}`}>
            <button>GO</button>
          </Link>
        </li>
      ))}

      {data.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>

          <Link href={`post/${post.id}`}>
            <button>GO</button>
          </Link>
        </li>
      ))}

      {data.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>

          <Link href={`post/${post.id}`}>
            <button>GO</button>
          </Link>
        </li>
      ))}

      {data.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>

          <Link href={`post/${post.id}`}>
            <button>GO</button>
          </Link>
        </li>
      ))}

      {data.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>

          <Link href={`post/${post.id}`}>
            <button>GO</button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
