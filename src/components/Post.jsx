export default function Post({ post }) {
  return (
    <>
      <div className="flex justify-center mb-2">
        <div className="max-w-3xl flex-1 bg-white rounded-md p-6">
          <h1 className="text-lg text-purple-700 font-bold">{post.title}</h1>
        </div>
      </div>
    </>
  );
}
