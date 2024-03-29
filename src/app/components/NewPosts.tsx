import Link from "next/link";

export default function NewPosts() {
  return (
    <div>
      {/* Title and Date */}
      <div className="flex  gap-5 mt-10">
        <Link href="/post/how-youtube-damaged-my-interest">
          <h1 className=" border-b-2 hover:border-red-500 border-blue-500 cursor-pointer">
            How Youtube Damaged My Interest&apos;s
          </h1>
        </Link>
        <p className="text-zinc-400">March,29,2024</p>
      </div>
      {/* Description */}
      <div className="mt-5">
        <p>
          Here i will talk about how my interest slowly died by watching alot of
          youtube videos and how i stopped by doing what i want to do instead of
          doing what youtubers want me to do.
        </p>
      </div>
    </div>
  );
}
