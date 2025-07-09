import React from "react";
import { ThemeToggle } from '../components/ui/theme-toggle';

export const MusicPlayerPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-white dark:bg-gray-900">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/public/image.png" alt="Logo" className="h-10 w-10 object-contain" />
        </div>
        {/* Search Bar */}
        <div className="flex-1 flex items-center mx-4 max-w-xl">
          <button className="bg-[#f9f9f9] rounded-full p-2 mr-2">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00eaff]"><circle cx="12" cy="12" r="10"/><path d="M21 21l-4.35-4.35"/></svg>
          </button>
          <input className="flex-1 px-4 py-2 rounded-full bg-[#f9f9f9] border-none outline-none text-gray-700" placeholder="What do you want to play?" />
        </div>
        {/* Icons and Avatar */}
        <div className="flex items-center gap-4">
          <button className="text-gray-400"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></button>
          <button className="text-gray-400"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4l-3-3"/></svg></button>
          <ThemeToggle />
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="h-8 w-8 rounded-full object-cover" />
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 min-w-[320px] bg-transparent flex flex-col items-center pt-6">
          <div className="w-full max-w-xs bg-white dark:bg-gray-900 rounded-2xl shadow p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="16" height="16" rx="4"/><path d="M7 7h.01M7 11h.01M7 15h.01M11 7h.01M11 11h.01M11 15h.01M15 7h.01M15 11h.01M15 15h.01"/></svg>
                <span className="font-bold text-base">Your Library</span>
              </div>
              <button className="text-2xl text-pink-500 hover:text-pink-600 font-bold">+</button>
            </div>
            <div className="flex gap-2 mb-2">
              <button className="px-4 py-1.5 rounded-full text-sm font-medium border bg-gray-900 text-white border-gray-900">Playlists</button>
              <button className="px-4 py-1.5 rounded-full text-sm font-medium border bg-gray-100 text-gray-700 border-gray-100">Artists</button>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 flex-1">
                <svg width="18" height="18" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="7"/><path d="M16 16l-3.5-3.5"/></svg>
                <input className="flex-1 bg-transparent border-none outline-none text-sm ml-2" placeholder="Search" />
              </div>
            </div>
            <div className="flex items-center justify-between mb-2 mt-1">
              <span className="text-xs text-gray-400">Recents</span>
              <button className="text-gray-400 hover:text-black p-1 rounded-full">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 20 20">
                  <circle cx="4" cy="10" r="1.5" />
                  <circle cx="10" cy="10" r="1.5" />
                  <circle cx="16" cy="10" r="1.5" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-2">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition shadow-sm">
                  <img src={`https://randomuser.me/api/portraits/men/${30+i}.jpg`} alt="Artist" className="h-10 w-10 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm text-gray-900 dark:text-white">Artist Name</span>
                    <span className="text-xs text-gray-500 dark:text-gray-300">Artist</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
        {/* Main Panel */}
        <main className="flex-1 flex flex-col p-6 bg-white dark:bg-gray-900 overflow-y-auto">
          <div className="flex gap-6">
            {/* Artist Card - Updated to match dynamic page */}
            <div className="flex-1 max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
              {/* Artist image as background with overlay and text */}
              <div className="relative h-64 w-full flex-shrink-0">
                <img src="https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&h=200&w=200" alt="Artist" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute left-8 bottom-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 font-semibold">
                      <svg width="16" height="16" fill="currentColor" className="inline"><circle cx="8" cy="8" r="8" fill="#00eaff" /><path d="M6.5 8.5l1.5 1.5 3-3" stroke="#fff" strokeWidth="2" fill="none"/></svg>
                      Verified Artist
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-white drop-shadow mb-1">Artist Name</div>
                  <div className="text-white/80 mb-2 text-lg">8,534,613 monthly listeners</div>
                </div>
              </div>
              {/* Card Body */}
              <div className="p-8 bg-white dark:bg-gray-900 flex flex-col gap-6">
                <div className="flex items-center gap-4 mb-2">
                  <button className="bg-[#00eaff] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-2xl">
                    <svg width="28" height="28" fill="currentColor"><polygon points="5,3 23,14 5,25"/></svg>
                  </button>
                  <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow text-lg">Following</button>
                  <button className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 w-12 h-12 flex items-center justify-center rounded-full text-2xl">...</button>
                </div>
                <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Popular</div>
                <div className="divide-y divide-gray-200 dark:divide-gray-800">
                  {[1,2,3,4].map((n) => (
                    <div key={n} className="flex items-center py-4 gap-6">
                      <div className="text-lg font-bold w-6 text-gray-900 dark:text-white">{n}</div>
                      <img src="https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&h=40&w=40" alt="Song" className="w-12 h-12 rounded object-cover" />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 dark:text-white text-lg">Song Name</div>
                        <div className="text-xs text-gray-500 dark:text-gray-300">Artist Name</div>
                      </div>
                      <div className="text-gray-700 dark:text-gray-200 font-semibold text-lg">76,267,508</div>
                      <div className="text-gray-700 dark:text-gray-200 font-semibold text-lg">5.57</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right Panel */}
            <div className="w-80 bg-gray-100 dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-start relative overflow-hidden" style={{minHeight: '320px', minWidth: '320px'}}>
              <img src="https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&h=320&w=320" alt="Artist" className="absolute inset-0 w-full h-full object-cover" />
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black/30 dark:bg-black/60" />
              <div className="relative z-10 flex flex-col items-start w-full h-full p-6">
                <div className="text-lg font-bold mb-1 text-gray-900 dark:text-white drop-shadow">Song Name</div>
                <div className="text-gray-700 dark:text-gray-300 mb-2">Artist Name</div>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full font-semibold mb-4">Follow</button>
                <div className="font-semibold mb-1 text-gray-900 dark:text-white">About the artist</div>
                <div className="text-sm text-gray-700 dark:text-gray-200 mb-2">Artist Name<br/>8,534,613 monthly listeners</div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Bottom Player Bar */}
      <div className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex items-center px-6 py-2">
        <img src="https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&h=40&w=40" alt="Song" className="w-10 h-10 rounded object-cover mr-4" />
        <div className="flex flex-col mr-4">
          <div className="font-semibold text-gray-900 dark:text-white">Song Name</div>
          <div className="text-xs text-gray-500 dark:text-gray-300">Artist Name</div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-1">
            <button className="text-gray-400 dark:text-gray-300"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"/></svg></button>
            <button className="text-gray-700 dark:text-gray-200"><svg width="32" height="32" fill="currentColor"><polygon points="5,3 27,16 5,29"/></svg></button>
            <button className="text-gray-400 dark:text-gray-300"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"/></svg></button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-gray-500 dark:text-gray-300">0:02</span>
            <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-[#00eaff] w-1/4"></div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-300">1:28:37</span>
          </div>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <button className="text-gray-400 dark:text-gray-300"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></button>
          <button className="text-gray-400 dark:text-gray-300"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4l-3-3"/></svg></button>
        </div>
      </div>
    </div>
  );
}; 