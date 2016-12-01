(function() {
  mocha.setup("bdd");
  var assert = chai.assert;
  //var G = require('/modules/game.js');

  describe("Game", function() {
    
    describe("arbitrary", function() {
      it("should do X", function() {
        assert.equal(2, 2);
      });

      it("should do Y", function() {
        assert.equal(3, 1 + 2);
      });
    }),

    describe("spawn", function(){
      it("should do X", function(){
        assert.equal(2,2);
      })

    });

    describe("update", function(){
      it("should do X", function(){
        assert.equal(2,2);
      })

    });


  });




  mocha.run();
})()
