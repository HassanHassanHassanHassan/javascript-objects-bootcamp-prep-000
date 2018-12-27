var playlist = new Object({Beatles: 'Hey Jude'});

playlist[artistName] = 'Beatles'
playlist[songTitle] = 'Hey Jude'

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, 
  playlist,
  {[Beatles]:
  'Hey Jude'
    
  }
  )}