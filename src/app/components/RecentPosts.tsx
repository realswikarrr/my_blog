import Link from "next/link";
import getPostMetadata from "../util/getPostMetadata";

export default function RecentPosts() {
  const recentPost = getPostMetadata();

  let newRecentPosts = [];

  newRecentPosts.push(recentPost[recentPost.length - 1]);
  newRecentPosts.push(recentPost[recentPost.length - 2]);
  newRecentPosts.push(recentPost[recentPost.length - 3]);

  return (
    <div>
      {newRecentPosts.map((post) => (
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
