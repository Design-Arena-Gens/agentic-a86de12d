"use client";

export default function Stories() {
  const stories = [
    { id: 1, username: "your_story", avatar: "📷", isYourStory: true },
    { id: 2, username: "john_doe", avatar: "👨" },
    { id: 3, username: "jane_smith", avatar: "👩" },
    { id: 4, username: "mike_wilson", avatar: "🧔" },
    { id: 5, username: "sarah_jones", avatar: "👱‍♀️" },
    { id: 6, username: "alex_brown", avatar: "🧑" },
    { id: 7, username: "emily_davis", avatar: "👩‍🦰" },
    { id: 8, username: "david_miller", avatar: "👨‍🦱" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-4 md:mb-6 overflow-hidden">
      <div className="flex gap-3 p-4 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-1 flex-shrink-0">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                story.isYourStory
                  ? "bg-gray-200 cursor-pointer hover:bg-gray-300"
                  : "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5"
              }`}
            >
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                {story.avatar}
              </div>
            </div>
            <span className="text-xs text-gray-900 max-w-[64px] truncate">
              {story.isYourStory ? "Your story" : story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
