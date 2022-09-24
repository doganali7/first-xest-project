const fetchArtists = require("~root/actions/artists/fetchArtists/index");
const handleAPIError = require("~root/utils/handleAPIError");

const getArtists = async (req, res) => {
  try {
    const { artists } = await fetchArtists();
    res.status(200).send({
      artists
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getArtists;
