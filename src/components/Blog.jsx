import React, { useEffect, useState } from 'react'

import BlogPosts from './OthComponents/BlogPosts';

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
                
                // console.log(res)
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
        <BlogPosts blogData={blogData}/>
    </div>
  )
}

export default Blog