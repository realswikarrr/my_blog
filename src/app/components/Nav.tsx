import Link from "next/link";

export default function Nav() {
  return (
    <div className="sticky top-0 p-7 z-50  bg-[#252525] bg-opacity-90 ">
      <ul className="flex   justify-center gap-10">
        <Link href="/" className=" border-b-2 border-green-500 cursor-pointer">
          home
        </Link>
        <Link href="https://swikar.vercel.app/">portfolio</Link>
        <Link href="/posts">posts</Link>
      </ul>
    </div>
  );
}
