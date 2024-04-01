import fs from "fs";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  if (file) {
    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content);
    return matterResult;
  }
};

export default getPostContent;
