async function getPost(slug) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + slug,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

async function getCommentsOfPost(slug) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/comments?postId=" + slug,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

const PostPage = async ({ params }) => {
  const [post, comments] = await Promise.all([
    getPost(params.slug),
    getCommentsOfPost(params.slug),
  ]);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
