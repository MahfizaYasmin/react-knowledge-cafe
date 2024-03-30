import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3  mt-2 pt-4 ml-4">
            <div className='border border-blue-600 bg-blue-100 my-2 py-4'>
                <h3 className='text-2xl text-center text-blue-700'>Reading Time: {readingTime} min</h3>
            </div>
           <div className='bg-gray-300 pb-4'>
                <h2 className="text-2xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
           </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;