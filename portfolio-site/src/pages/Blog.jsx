import React from "react";
import "../css/Blog.css";
import BackToHomeButton from "../components/BackToHomeButton";

function Blog() {
  return (
    <>
      <BackToHomeButton />
      <section class="blog-coming-soon">
        <div class="container">
          <h1>📝 Blog coming soon!</h1>
          <p>
            I’m working on a space to share what I’ve learned and experienced.
            <br />
            It’s a bit quiet here for now — but not for long!
          </p>
        </div>
      </section>
    </>
  );
}

export default Blog;
