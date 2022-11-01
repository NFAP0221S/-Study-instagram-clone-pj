import React from "react";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: "1",
      username: "katf101",
      userImg: "https://avatars.githubusercontent.com/u/102638663?v=4",
      img: "https://images.unsplash.com/photo-1666934209771-afe45356cca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      caption: "Nice picture",
    },
    {
      id: "2",
      username: "dummy1",
      userImg:
        "https://images.unsplash.com/photo-1666934209593-25b6aa02ab4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      img: "https://plus.unsplash.com/premium_photo-1664871749080-9aeaf2ef3e25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      caption: "Nice picture2",
    },
    {
      id: "3",
      username: "dummy2",
      userImg:
        "https://plus.unsplash.com/premium_photo-1664267832256-176e55ccafd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      img: "https://images.unsplash.com/photo-1666978460851-2ecda573e389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      caption: "Nice picture3",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
