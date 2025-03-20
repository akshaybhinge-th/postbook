import { createPost } from "@/actions/posts";
import PostForm from "@/components/post-form";

const NewPostPage = () => {
  return (
    <PostForm createPost={createPost}/>
  )
}

export default NewPostPage;
