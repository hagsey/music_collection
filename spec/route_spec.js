var request = require("request");

describe("JSON Routes", function() {
  describe("/albums.json", function() {
    it("returns an array of albums", function(done) {
      request("http://localhost:3000/albums.json", function(e, res, body) {
        var albums = JSON.parse(body);
        expect(albums[0].artist).toBeDefined();
        done();
      });
    });
  });
});