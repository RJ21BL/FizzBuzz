
describe ("FizzBuzz", =>
{
let fizzBuzz
}
    beforeEach(function() {
        player = new Player();
        song = new Song();
    });

    it("should be able to play a Song", function() {
        player.play(song);
        expect(player.currentlyPlayingSong).toEqual(song);
