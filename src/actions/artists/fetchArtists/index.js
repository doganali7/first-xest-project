const selectArtists = require("./queries/selectArtists");

const fetchArtists = async () => {
  const artists = await selectArtists();

  return { artists };
};

module.exports = fetchArtists;
