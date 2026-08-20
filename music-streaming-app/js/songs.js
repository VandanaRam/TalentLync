const SONGS = [
{id:1,title:'Neon Morning',artist:'Ari Vale',album:'City Lights',genre:'Pop',duration:'2:18',cover:'assets/images/cover-01.svg',audio:'assets/music/song-01.wav'},
{id:2,title:'Afterglow',artist:'Mira Lane',album:'Soft Focus',genre:'Lo-Fi',duration:'2:26',cover:'assets/images/cover-02.svg',audio:'assets/music/song-02.wav'},
{id:3,title:'Chinuku',artist:'Ravi Kiran',album:'Mana Vibe',genre:'Telugu',duration:'2:12',cover:'assets/images/cover-03.svg',audio:'assets/music/song-03.wav'},
{id:4,title:'Golden Hour',artist:'Noah Rey',album:'Sunset Club',genre:'English',duration:'2:34',cover:'assets/images/cover-04.svg',audio:'assets/music/song-04.wav'},
{id:5,title:'Midnight Drive',artist:'Kaya Bloom',album:'Night Shift',genre:'Chill',duration:'2:42',cover:'assets/images/cover-05.svg',audio:'assets/music/song-05.wav'},
{id:6,title:'Rang De',artist:'Ishaan Noor',album:'Rang',genre:'Bollywood',duration:'2:21',cover:'assets/images/cover-06.svg',audio:'assets/music/song-06.wav'},
{id:7,title:'Pulse Runner',artist:'Jax Ember',album:'Training Day',genre:'Workout',duration:'2:08',cover:'assets/images/cover-07.svg',audio:'assets/music/song-07.wav'},
{id:8,title:'Paper Planes',artist:'Lena Moss',album:'Quiet Notes',genre:'Instrumental',duration:'2:31',cover:'assets/images/cover-08.svg',audio:'assets/music/song-08.wav'},
{id:9,title:'Vennela',artist:'Anaya Rao',album:'Moonlit',genre:'Telugu',duration:'2:37',cover:'assets/images/cover-09.svg',audio:'assets/music/song-09.wav'},
{id:10,title:'Weekend Bloom',artist:'Theo Sun',album:'Easy Days',genre:'Pop',duration:'2:17',cover:'assets/images/cover-10.svg',audio:'assets/music/song-10.wav'},
{id:11,title:'Blue Window',artist:'Mira Lane',album:'Soft Focus',genre:'Lo-Fi',duration:'2:45',cover:'assets/images/cover-11.svg',audio:'assets/music/song-11.wav'},
{id:12,title:'Udaan',artist:'Ishaan Noor',album:'Rang',genre:'Bollywood',duration:'2:29',cover:'assets/images/cover-12.svg',audio:'assets/music/song-12.wav'},
{id:13,title:'Static Hearts',artist:'Ari Vale',album:'City Lights',genre:'English',duration:'2:36',cover:'assets/images/cover-13.svg',audio:'assets/music/song-13.wav'},
{id:14,title:'Rain Window',artist:'Noah Rey',album:'Sunset Club',genre:'Chill',duration:'2:23',cover:'assets/images/cover-14.svg',audio:'assets/music/song-14.wav'},
{id:15,title:'Core Energy',artist:'Jax Ember',album:'Training Day',genre:'Workout',duration:'2:15',cover:'assets/images/cover-15.svg',audio:'assets/music/song-15.wav'},
{id:16,title:'Soft Horizon',artist:'Lena Moss',album:'Quiet Notes',genre:'Instrumental',duration:'2:40',cover:'assets/images/cover-16.svg',audio:'assets/music/song-16.wav'},
{id:17,title:'Oohale',artist:'Ravi Kiran',album:'Mana Vibe',genre:'Telugu',duration:'2:28',cover:'assets/images/cover-17.svg',audio:'assets/music/song-17.wav'},
{id:18,title:'Sunday Soda',artist:'Theo Sun',album:'Easy Days',genre:'Pop',duration:'2:20',cover:'assets/images/cover-18.svg',audio:'assets/music/song-18.wav'}
];
const PLAYLISTS = {
 'Chill Vibes': {description:'Slow down, breathe out, and let the room get quiet.', genres:['Chill','Lo-Fi','Instrumental']},
 'Workout': {description:'Keep the momentum with bright, driving demo tracks.', genres:['Workout','Pop']},
 'Telugu Hits': {description:'A warm mix of Telugu-inspired demo tracks.', genres:['Telugu']},
 'Lo-Fi': {description:'Low-key textures for focus, study, and late nights.', genres:['Lo-Fi','Instrumental']},
 'Favorites': {description:'Everything you have saved to your Pulse wishlist.', favorites:true}
};
