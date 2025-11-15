"use client";

export default function Suggestions() {
  const suggestions = [
    { id: 1, username: "cooking_with_love", avatar: "👨‍🍳", followedBy: "chef_master" },
    { id: 2, username: "tech_reviews", avatar: "💻", followedBy: "gadget_guru" },
    { id: 3, username: "fashion_style", avatar: "👗", followedBy: "style_icon" },
    { id: 4, username: "music_beats", avatar: "🎵", followedBy: "dj_mixer" },
    { id: 5, username: "art_gallery", avatar: "🎨", followedBy: "creative_minds" },
  ];

  return (
    <div className="fixed top-8 w-[319px]">
      {/* Current User */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <span className="text-xl">👤</span>
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm">your_username</div>
            <div className="text-gray-500 text-sm">Your Name</div>
          </div>
        </div>
        <button className="text-blue-500 text-xs font-semibold hover:text-blue-700">
          Switch
        </button>
      </div>

      {/* Suggestions Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 font-semibold text-sm">
          Suggestions For You
        </span>
        <button className="text-xs font-semibold hover:text-gray-500">
          See All
        </button>
      </div>

      {/* Suggestions List */}
      <div className="space-y-3">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <span className="text-sm">{suggestion.avatar}</span>
                </div>
              </div>
              <div>
                <div className="font-semibold text-sm">{suggestion.username}</div>
                <div className="text-gray-500 text-xs">
                  Followed by {suggestion.followedBy}
                </div>
              </div>
            </div>
            <button className="text-blue-500 text-xs font-semibold hover:text-blue-700">
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10 text-xs text-gray-400">
        <div className="flex flex-wrap gap-2 mb-4">
          <a href="#" className="hover:underline">About</a>
          <span>•</span>
          <a href="#" className="hover:underline">Help</a>
          <span>•</span>
          <a href="#" className="hover:underline">Press</a>
          <span>•</span>
          <a href="#" className="hover:underline">API</a>
          <span>•</span>
          <a href="#" className="hover:underline">Jobs</a>
          <span>•</span>
          <a href="#" className="hover:underline">Privacy</a>
          <span>•</span>
          <a href="#" className="hover:underline">Terms</a>
        </div>
        <div className="text-gray-400">© 2025 INSTAGRAM CLONE</div>
      </div>
    </div>
  );
}
