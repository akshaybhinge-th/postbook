"use client";
import { useFormState } from "react-dom";
import FormSubmit from "./form-submit";

const PostForm = ({ createPost }) => {
  const [state, formAction] = useFormState(createPost, {});
  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
          {state?.errors?.title && <span>{state.errors.title}</span>}
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
          {state?.errors?.image && <span>{state.errors.image}</span>}
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
          {state?.errors?.content && <span>{state.errors.content}</span>}
        </p>
        <p>
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
      </form>
    </>
  );
};

export default PostForm;
