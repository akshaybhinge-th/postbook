import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';

function Post({ post }) {
  const userId = 2;
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div className={post.isLiked ? "liked" : ""}>
            <LikeButton postId={post.id} userId={userId}/>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default Post;