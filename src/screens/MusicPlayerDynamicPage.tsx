import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, setArtistId } from '../store';
import { ThemeToggle } from '../components/ui/theme-toggle';

export const MusicPlayerDynamicPage = () => {
  const [activeTab, setActiveTab] = useState<'Playlists' | 'Artists'>('Artists');
  const dispatch = useDispatch();
  const artist_id = useSelector((state: RootState) => state.artist.artist_id);

  const [audioTracks, setAudioTracks] = useState<any[]>([]);
  const [artists, setArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch('https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/audio').then(res => res.json()),
      fetch('https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/artists').then(res => res.json()),
    ]).then(([audioData, artistData]) => {
      setAudioTracks(audioData);
      setArtists(artistData);
      setLoading(false);
      // Set default artist if not set
      if (!artist_id && artistData.length > 0) {
        dispatch(setArtistId(artistData[0].id));
      }
    });
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  const selectedArtist = artists.find(a => a.id === artist_id) || artists[0];
  const artistTracks = audioTracks.filter(track => track.artists.some((a: any) => a.artist_id === selectedArtist.id));
  const mainTrack = artistTracks[0] || audioTracks[0];

  return (
    <div className="flex flex-col h-screen w-screen bg-[#fafbfc] dark:bg-gray-900">
      {/* Top Bar (same as Page 1) */}
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
      {/* Main 3-column layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 min-w-[320px] bg-transparent flex flex-col items-center pt-6 h-full">
          <div className="w-full max-w-xs bg-white dark:bg-gray-900 rounded-2xl shadow p-6 flex flex-col gap-4 h-full">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="16" height="16" rx="4"/><path d="M7 7h.01M7 11h.01M7 15h.01M11 7h.01M11 11h.01M11 15h.01M15 7h.01M15 11h.01M15 15h.01"/></svg>
                <span className="font-bold text-base">Your Library</span>
              </div>
              <button className="text-2xl text-pink-500 hover:text-pink-600 font-bold">+</button>
            </div>
            <div className="flex gap-2 mb-2">
              <button onClick={() => setActiveTab('Playlists')} className={`px-4 py-1.5 rounded-full text-sm font-medium border ${activeTab === 'Playlists' ? 'bg-gray-900 text-white border-gray-900' : 'bg-gray-100 text-gray-700 border-gray-100'}`}>Playlists</button>
              <button onClick={() => setActiveTab('Artists')} className={`px-4 py-1.5 rounded-full text-sm font-medium border ${activeTab === 'Artists' ? 'bg-gray-900 text-white border-gray-900' : 'bg-gray-100 text-gray-700 border-gray-100'}`}>Artists</button>
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
            <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
              {artists.map((artist, i) => (
                <div key={artist.id} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition shadow-sm ${selectedArtist.id === artist.id ? 'bg-gray-200 dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800'}`} onClick={() => dispatch(setArtistId(artist.id))}>
                  <img src={artist.image} alt={artist.artist_name} className="h-10 w-10 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm text-gray-900 dark:text-white">{artist.artist_name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-300">Artist</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
        {/* Center and Right panels */}
        <div className="flex-1 flex gap-6 p-8">
          {/* Center panel: Artist Card and Popular Tracks */}
          <div className="flex-1 max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            {/* Artist image as background with overlay and text */}
            <div className="relative h-64 w-full flex-shrink-0">
              <img src={selectedArtist.image} alt={selectedArtist.artist_name} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute left-8 bottom-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#00eaff] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 font-semibold">
                    <svg width="16" height="16" fill="currentColor" className="inline"><circle cx="8" cy="8" r="8" fill="#00eaff" /><path d="M6.5 8.5l1.5 1.5 3-3" stroke="#fff" strokeWidth="2" fill="none"/></svg>
                    Verified Artist
                  </span>
                </div>
                <div className="text-3xl font-bold text-white drop-shadow mb-1">{selectedArtist.artist_name}</div>
                <div className="text-white/80 mb-2 text-lg">{mainTrack.views?.toLocaleString() || '0'} monthly listeners</div>
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
                {artistTracks.map((track, n) => (
                  <div key={track.id} className="flex items-center py-4 gap-6">
                    <div className="text-lg font-bold w-6 text-gray-900 dark:text-white">{n + 1}</div>
                    <img src={track.logo_img} alt={track.title} className="w-12 h-12 rounded object-cover" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-lg">{track.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-300">{selectedArtist.artist_name}</div>
                    </div>
                    <div className="text-gray-700 dark:text-gray-200 font-semibold text-lg">{track.views?.toLocaleString() || 0}</div>
                    <div className="text-gray-700 dark:text-gray-200 font-semibold text-lg">{track.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Panel: Song Details */}
          <div className="w-80 min-w-[320px] h-full flex flex-col relative overflow-hidden rounded-xl shadow bg-gray-100 dark:bg-gray-800">
            <img src={selectedArtist.image} alt={selectedArtist.artist_name} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full p-6">
              <div className="mb-4">
                <div className="text-2xl font-bold text-white drop-shadow mb-1">{selectedArtist.artist_name}</div>
                <div className="text-white/80 mb-2 text-lg">{mainTrack.views?.toLocaleString() || '0'} monthly listeners</div>
                <div className="text-lg font-semibold text-white mb-2">{mainTrack.title}</div>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full font-semibold mb-4">Follow</button>
                <div className="font-semibold text-white mb-1">About the artist</div>
                <div className="text-sm text-gray-200 mb-2">{selectedArtist.artist_name}<br/>{mainTrack.views?.toLocaleString() || 0} monthly listeners</div>
                <audio controls src={mainTrack.audio_file} className="w-full mt-2 bg-white dark:bg-gray-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Player Bar */}
      <div className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex items-center px-6 py-2">
        <img src={mainTrack.logo_img} alt={mainTrack.title} className="w-10 h-10 rounded object-cover mr-4" />
        <div className="flex flex-col mr-4">
          <div className="font-semibold text-gray-900 dark:text-white">{mainTrack.title}</div>
          <div className="text-xs text-gray-500 dark:text-gray-300">{selectedArtist.artist_name}</div>
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
            <span className="text-xs text-gray-500 dark:text-gray-300">{mainTrack.duration}</span>
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