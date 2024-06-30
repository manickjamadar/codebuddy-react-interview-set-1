import PropTypes from "prop-types";
const PostCard = ({ post }) => {
  const authorFullName = post.firstName + " " + post.lastName;
  return (
    <div className="card transition-all hover:-translate-y-2 hover:shadow-xl">
      <div className="aspect-video overflow-hidden rounded bg-gray-200">
        <img className="h-full w-full object-cover" src={post.image} alt={post.title} />
      </div>
      <div className="flex flex-col gap-3 p-4 pb-0">
        <h3 className="text-xl font-medium text-gray-700">{post.title}</h3>
        <p className="text-gray-600">{post.writeup}</p>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <img className="h-full w-full object-cover" src={post.avatar} alt={post.firstName} />
          </div>
          <p className="text-sm font-medium italic">
            by <span className="text-orange-500">{authorFullName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
PostCard.propTypes = {
  post: PropTypes.object,
};
export default PostCard;
