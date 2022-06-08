import React, { useEffect, useState } from 'react'

import BlogPosts from './OthComponents/BlogPosts';
import Loader from './utils/Loader';

import Title from './utils/Title';

const Blog = () => {

    const [blogData, setBlogData] = useState([])

    const query = `
    {
      user(username: "reydelshit") {
        publication {
          posts{
            slug
            title
            brief
            dateAdded
          }
        }
      }
    }
  `;

    useEffect(() => {

        const fetchHashnode = async () => {
            try{
               const fetchData = await fetch('https://api.hashnode.com', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({ query }),
                })
    
                const res = await fetchData.json();
                
                setBlogData(res.data.user.publication.posts)

            }
            
            catch(err){
                console.log(err)
            }
        }

        fetchHashnode()
    }, [query])

    

  return (
    <div className='blogs' id='blogs'>
        <Title title='Blog'/>
          {blogData.length === 0 ? <Loader className="sp__ctx" /> : <BlogPosts blogData={blogData} />}
    </div>
  )
}

export default Blog