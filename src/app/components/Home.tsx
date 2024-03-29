import { Inconsolata } from "next/font/google";
import RecentPost from "./RecentPost";

const edu_nsw = Inconsolata({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className={edu_nsw.className}>
      {/* Main Content Section */}
      <div className="">
        <main className="mt-10">
          <h1 className="text-xl  ">
            Welcome to my blog, i write basically everything here you can skim
            through the post and read what interest you. By no means i am a
            professional blog writer but journaling my tech journery is what i
            do here and some other random things.
          </h1>

          {/* Recent Post Section Starts Here */}
          <h1 className="text-center mt-10 text-xl text-slate-300">
            My Recent Post&apos;s
          </h1>

          {/* Recent Post Section */}
          <RecentPost />
        </main>
      </div>
    </div>
  );
}
