import Link from "next/link";
import { Post } from "../../models/post";
import { Button } from "@nextui-org/react";

async function getUserOfPost(userId) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId,
    {
      next: { revalidate: 10 },
    }
  );
  return res.json();
}

const PostItem = async ({ post }: { post: Post }) => {
  const userData = await getUserOfPost(post.userId);

  return (
    <li>
      <pre>{JSON.stringify(userData.name, null, 2)}</pre>

      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Link
        href={{
          pathname: "/post/" + post.id,
        }}
      >
        <Button>GO</Button>
      </Link>
    </li>
  );
};

export default PostItem;
