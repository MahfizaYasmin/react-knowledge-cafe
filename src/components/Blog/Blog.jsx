import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
     
    const {title, cover, author, posted_date, author_img, reading_time, hashtags} = blog;

    return (
        <div className='mb-20'>
            <img className='w-full rounded-lg mb-8' src={cover} alt={`Cover picture of the title ${title}`}></img>
            <div className='flex justify-between mb-4'>
                <div className='flex gap-4'>
                    <img className='w-14' src={author_img}></img>
                    <div>
                        <h2 className='text-2xl font-bold '>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            <p className='flex gap-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a>#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline mt-4'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;