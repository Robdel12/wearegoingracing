// Gather the tracks from iRacing, return it as an object
function gatherTracks() {
  let $tracks = Array.from(document.querySelectorAll('.track-container'));
  let tracks = $tracks.map($trackContainer => {
    let $configs = Array.from($trackContainer.querySelectorAll('.one-track-config'));
    let configs = $configs.map($config => ({
      name: $config.querySelector('.expanded-track-details strong').innerText,
      map: $config.querySelector('img').getAttribute('src')
    }));

    return {
      name: $trackContainer.querySelector('.track-title-toggle').innerText,
      configs: configs
    };
  });

  return tracks;
}

module.exports = {
  gatherTracks
};
