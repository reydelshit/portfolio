import React from 'react'

const BlogPosts = ({blogData}) => {
  return (
    <div className='bl__ct'>
        {blogData.map((blog, index) => {
            const { slug, title, brief, dateAdded } = blog;
            return (
                <div className='bl__ctx' key={index}>
                    <span>{new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit"
                        }).format(new Date(dateAdded))}
                    </span>
                    <a href={`https://reydelp.hashnode.dev/${slug}`}>{title}</a>
                    <p>{brief}</p>
                </div>
            )
        })}
    </div>
  )
}

export default BlogPosts