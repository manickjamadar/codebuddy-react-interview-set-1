import { Icon } from "@iconify/react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { postService } from "../services";
import PostCard from "../components/Post/PostCard";

const Posts = () => {
  const { data: postsList, isLoading } = useQuery({
    queryKey: "postsList",
    queryFn: () => postService.getAllPosts(),
    refetchOnWindowFocus: false,
  });
  if (isLoading || !postsList) {
    // for real application need to have loading screen component
    return <div>Loading...</div>;
  }
  console.log("postsList: ", postsList);
  return (
    <div className="mx-auto w-11/12 rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>
      <div className="lg: grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {postsList.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
