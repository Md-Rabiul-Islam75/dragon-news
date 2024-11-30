import { FaRegStar, FaStar } from "react-icons/fa"; // Importing star icons
import { BiTrendingUp } from "react-icons/bi"; // Importing a trending icon

const NewsCard = (props = {}) => {
    const {news} = props || {};

    console.log(news);
  return (
    <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={news.thumbnail_url
          }
          alt="News Thumbnail"
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{news.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{news.details.slice(0, 100)}...</p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-3">
            <img
              src={news.author.img}
              alt="Author"
              className="w-10 h-10 object-cover rounded-full mb-4"
            />
            <div>
              <p className="text-sm font-medium">{news.author.name}</p>
              <p className="text-xs text-gray-500">{news.newsdate}</p>
            </div>
          </div>
          {news.badge && (
            <div className="flex items-center space-x-1 text-primary">
              <BiTrendingUp className="w-5 h-5" />
              <span className="badge badge-primary">{news.badge}</span>
            </div>
          )}
        </div>

        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                {i < news.rating ? (
                  <FaStar className="text-yellow-500" />
                ) : (
                  <FaRegStar className="text-yellow-500" />
                )}
              </span>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
