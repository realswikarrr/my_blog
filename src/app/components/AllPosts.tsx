import Link from "next/link";
import getPostMetadata from "../util/getPostMetadata";

export default function AllPosts() {
  const recentPost = getPostMetadata();

  return (
    <div>
      {recentPost.map((post) => (
        <div key={post.slug}>
          {/* Title and Date */}
          <div className="flex  gap-5 mt-10">
            <Link href={`post/${post.slug}`}>
              <h1 className=" border-b-2 hover:border-red-500 border-blue-500 cursor-pointer">
                {post.title}
              </h1>{" "}
            </Link>
            <p className="text-zinc-400">{post.date}</p>
          </div>
          {/* Description */}
          <div className="mt-5">
            <p>{post.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
