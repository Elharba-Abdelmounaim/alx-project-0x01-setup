import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-8">
        <h2 className="text-3xl font-bold">Posts Page</h2>
        <p>This is the posts page.</p>
      </div>
    </>
  );
};

export default PostsPage;
