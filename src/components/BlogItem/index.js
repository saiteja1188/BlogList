// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-list">
      <div className="list">
        <h1 className="list-heading">{title}</h1>
        <p className="list-description">{publishedDate}</p>
      </div>
      <p className="list-date">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
