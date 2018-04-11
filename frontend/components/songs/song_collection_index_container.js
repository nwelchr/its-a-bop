// import PlaylistShow from './playlist_show';
// import { connect } from 'react-redux';
// import { fetchPlaylist, deletePlaylist, fetchModalPlaylists } from '../../actions/playlist_actions';
// import { fetchSongs, fetchSong } from '../../actions/song_actions';
// import { play, pause, playSong } from '../../actions/audio_actions';
// import { openAddToPlaylistForm } from '../../actions/ui_actions';

// import SongCollectionIndex from 'song_collection_index';

// import selectors from '../../reducers/selectors';

// const mapStateToProps = (state, ownProps) => {
//     return({
//         loading: state.ui.loading.global,
//         background: { 'backgroundColor': '#7a1a45' },
//         currentUser: state.session.currentUser,
//         currentSong: state.ui.playbar.currentSong,
//         playing: state.ui.playbar.playing,
//         songs: state.entities.songs
//     });
// };

// const mapDispatchToProps = (dispatch) => {
//     return ({
//     fetchSongs: () => dispatch(fetchSongs()),
//     fetchSong: (songId) => dispatch(fetchSong(songId)),
//     play: () => dispatch(play()),
//     pause: () => dispatch(pause()),
//     playSong: (song) => dispatch(playSong(song)),
//     openAddToPlaylistForm: () => dispatch(openAddToPlaylistForm()),
//     fetchModalPlaylists: (songToAddId) => dispatch(fetchModalPlaylists(songToAddId))
// });
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SongCollectionIndex);