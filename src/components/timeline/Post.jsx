import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineRetweet,
} from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import UserProfile from "./UserProfile";
import useUser from "../hooks/use-user";
import { updatePostUserLikesArray } from "../../firebase/services";

function Post({
  fullname,
  username,
  post,
  imageSrc,
  caption,
  post_image,
  docId,
  userId,
  allLikes,
}) {
  const { userDetails } = useUser();

  const loggeduserLiked = allLikes.includes(userDetails?.uid);

  const [liked, setLiked] = useState(loggeduserLiked);
  console.log(liked, loggeduserLiked);

  const userPostLikeHandler = function () {
    updatePostUserLikesArray(liked, docId, userDetails.uid);
    setLiked((prev) => !prev);
  };
  // const userPostCommentHandler = function () {
  //   console.log("comment");
  // };
  // const userPostRetweetHandler = function () {
  //   console.log("retweet");
  // };

  return (
    <div className="flex flex-col gap-3 py-4 text-sm border border-gray-100 justify-center px-5">
      <UserProfile
        imageSrc={imageSrc}
        username={username}
        fullname={fullname}
      />
      <main className="col-span-1 row-span-3 ml-[50px] ">
        <p>{caption}</p>
        {post_image && (
          <img
            src={post_image}
            alt={username}
            className="mt-3 w-[100%] h-[280px] rounded-2xl object-cover"
          />
        )}
      </main>
      <footer className="ml-[60px] flex gap-20 self-start">
        <AiOutlineComment
          // onClick={userPostCommentHandler}
          className="w-5 h-5 text-gray-500 hover:cursor-pointer"
        />
        <AiOutlineRetweet
          // onClick={userPostRetweetHandler}
          className="w-5 h-5 text-gray-500 hover:cursor-pointer"
        />
        <div className="flex gap-2 text-gray-500">
          <HiOutlineHeart
            onClick={userPostLikeHandler}
            className={`w-5 h-5 hover:cursor-pointer  ${
              liked ? "text-red-500 fill-red-500" : "text-gray-500"
            }`}
          />
          <span>{allLikes && allLikes.length}</span>
        </div>
      </footer>
    </div>
  );
}

export default Post;
