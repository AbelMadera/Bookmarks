
import Bookmark from "../Bookmark/Bookmark";

export default function BookmarkList({
    bookmarks,
    updateBookmark,
    deleteBookmark
}){
    return(
        <ul>
        {
            bookmarks.length ? bookmark.map(bookmark => (
                <Bookmark
                key={bookmark._id}
                bookmark={bookmark}
                updateBookmark={updateBookmark}
                deleteBookmark={deleteBookmark}
                />
            )):
            <>
            <h2>No Bookmarks Yet.... add one in the form above</h2>
            </>
        }
        </ul>
    )
}