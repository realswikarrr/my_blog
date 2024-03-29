export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  return (
    <div>
      <h1>My Single Post </h1>
    </div>
  );
}
