async function getPost(slug) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + slug,
    { next: { revalidate: 10 } }
  );
  return res.json();
}

async function getCommentsOfPost(slug) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/comments?postId=" + slug,
    { next: { revalidate: 10 } }
  );
  return res.json();
}

const PostPage = async ({ params }) => {
  // Initiate both requests in parallel
  const postData = getPost(params.slug);
  const commentsData = getCommentsOfPost(params.slug);

  // Wait for the promises to resolve
  const [post, comments] = await Promise.all([postData, commentsData]);

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
