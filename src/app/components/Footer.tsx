import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center flex-col items-center  mt-5">
      <div className="mt-5 mb-2 flex gap-3">
        <div className=" text-sm border-yellow-500 border-b-2">
          <Link href="https://www.linkedin.com/in/swikarrr/">Linkedin</Link>
        </div>
        <div className="text-sm border-yellow-500 border-b-2">
          <Link href="https://github.com/realswikarrr">GitHub</Link>
        </div>
      </div>
    </div>
  );
}
