"use client";

import { useState } from "react";

interface PostProps {
  username: string;
  userAvatar: string;
  image: string;
  likes: number;
  caption: string;
  comments: number;
  timestamp: string;
}

export default function Post({
  username,
  userAvatar,
  image,
  likes,
  caption,
  comments,
  timestamp,
}: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <span className="text-sm">{userAvatar}</span>
            </div>
          </div>
          <span className="font-semibold text-sm">{username}</span>
        </div>
        <button className="text-xl">•••</button>
      </div>

      {/* Post Image */}
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        <img
          src={image}
          alt="Post"
          className="absolute top-0 left-0 w-full h-full object-cover"
          onDoubleClick={handleLike}
        />
      </div>

      {/* Post Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <button onClick={handleLike} className="text-2xl hover:opacity-50 transition">
              {isLiked ? "❤️" : "🤍"}
            </button>
            <button className="text-2xl hover:opacity-50 transition" onClick={() => setShowComments(!showComments)}>
              💬
            </button>
            <button className="text-2xl hover:opacity-50 transition">
              📤
            </button>
          </div>
          <button onClick={() => setIsSaved(!isSaved)} className="text-2xl hover:opacity-50 transition">
            {isSaved ? "🔖" : "🏷️"}
          </button>
        </div>

        {/* Likes */}
        <div className="font-semibold text-sm mb-2">
          {likesCount.toLocaleString()} likes
        </div>

        {/* Caption */}
        <div className="text-sm">
          <span className="font-semibold mr-2">{username}</span>
          <span>{caption}</span>
        </div>

        {/* Comments */}
        {comments > 0 && (
          <button
            onClick={() => setShowComments(!showComments)}
            className="text-sm text-gray-500 mt-1 hover:text-gray-700"
          >
            View all {comments} comments
          </button>
        )}

        {/* Comment Input */}
        {showComments && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full text-sm outline-none"
            />
          </div>
        )}

        {/* Timestamp */}
        <div className="text-xs text-gray-400 mt-1 uppercase">{timestamp}</div>
      </div>
    </div>
  );
}
