export default function CreateBookmark() {
    createBookmark,
    bookmark,
    handleChange
    return(
        <>
                    <h2> Create a Bookmark</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                createBookmark()
            }}
            >
            <input type="text" value={bookmark.title} name="title" onChange={handleChange} placeholder={'title'}></input>
            <input type="text" value={bookmark.url} name="url" onChange={handleChange} placeholder={'URL'}></input>
            <input type="submit" value="Create Bookmark" />
            </form>
        </>
    )
}