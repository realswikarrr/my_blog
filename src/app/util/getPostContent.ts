import fs from "fs";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = "blogs/";
  const file = `${folder}${slug}.md`;

  try {
    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    console.error(`Error reading file ${file}: ${error}`);
    return null; // Or handle the error as needed
  }
};

export default getPostContent;
