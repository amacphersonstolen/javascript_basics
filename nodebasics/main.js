var player = require('./player.js');

var jack = player();
jack.challenge();

var james = player();
james.name = "James";
james.challenge();


var monster = require('./monster.js');

var kevin = monster();
kevin.name = "Kevin the monster";
kevin.attack();