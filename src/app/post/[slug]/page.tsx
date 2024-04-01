"use client";

import getPostContent from "@/app/util/getPostContent";
import getPostMetadata from "@/app/util/getPostMetadata";
import Markdown from "markdown-to-jsx";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => {
    slug: post.slug;
  });
};

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const post = getPostContent(params.slug);
  return (
    <div className="mt-10">
      <div className=" mb-5 border-b-2">
        <h1 className=" text-4xl mb-3">{post.data.title}</h1>
        <p className=" text-gray-400 mb-3">{post.data.date}</p>
      </div>
      <article className="prose lg:prose-xl prose-headings:text-white prose-blockquote:text-red-500 prose-p:text-white prose-a:text-blue-500 prose-strong:text-white prose-ul:text-red-500 prose-table:text-white prose-code:text-purple-500">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
