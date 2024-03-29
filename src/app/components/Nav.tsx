import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <ul className="flex justify-center mt-10 gap-10">
        <Link href="/" className=" border-b-2 border-blue-500 cursor-pointer">
          home
        </Link>
        <Link href="https://swikar.vercel.app/">portfolio</Link>
        <Link href="/posts">posts</Link>
      </ul>
    </div>
  );
}
