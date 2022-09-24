const { submitQuery, camelKeys } = require("~root/lib/database");

const selectArtists = () => submitQuery`
    SELECT * FROM artists
`;

module.exports = camelKeys(selectArtists);
