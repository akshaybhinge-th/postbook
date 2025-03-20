"use client";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";

const FormSubmit = () => {
  const status = useFormStatus();

  if(status.pending) {
    return <span>Creating post...</span>
  }
  return (
    <>
      <button type="reset" disabled={status.pending}>Reset</button>
      <button disabled={status.pending}>Create Post</button>
    </>
  );
};

export default FormSubmit;
