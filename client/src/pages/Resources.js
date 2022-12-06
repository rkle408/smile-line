import React, { useEffect, useState } from "react";
import "./style.css";

const Resources = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&keyword=teeth')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
          });
    }, []);

    return (
        <section>
            <div className="posts-container">
                {posts.map((post) => {
                    return (
                        <div className="postCard" >
                            <h2 className="postTitle">{post.Result.Resources.Resource.Title}</h2>
                            <p className="postBody">{post.Resources.Resource.Title}</p>
                            <div className="button">
                            <div className="deleteBtn">Delete</div>
                        </div>
            </div>
         );
      })}
   </div>
        
        </section>
    )
};

export default Resources;