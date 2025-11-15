"use client";

import { useState } from "react";
import Post from "./Post";
import Stories from "./Stories";

export default function Feed() {
  const posts = [
    {
      id: 1,
      username: "nature_lover",
      userAvatar: "🌿",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
      likes: 1234,
      caption: "Beautiful mountain view 🏔️",
      comments: 56,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      username: "foodie_adventures",
      userAvatar: "🍕",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop",
      likes: 892,
      caption: "Delicious homemade pasta 🍝",
      comments: 34,
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      username: "travel_diaries",
      userAvatar: "✈️",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=600&fit=crop",
      likes: 2156,
      caption: "Sunset in Paris 🗼",
      comments: 89,
      timestamp: "8 hours ago",
    },
    {
      id: 4,
      username: "fitness_guru",
      userAvatar: "💪",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop",
      likes: 1567,
      caption: "Morning workout session 🏋️",
      comments: 45,
      timestamp: "12 hours ago",
    },
    {
      id: 5,
      username: "pet_paradise",
      userAvatar: "🐶",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=600&fit=crop",
      likes: 3421,
      caption: "Meet my new puppy! 🐕",
      comments: 167,
      timestamp: "1 day ago",
    },
  ];

  return (
    <div className="w-full">
      {/* Stories */}
      <Stories />

      {/* Posts */}
      <div className="space-y-4 pb-4">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
