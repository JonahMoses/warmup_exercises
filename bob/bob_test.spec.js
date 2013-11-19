var people = require("./bob");
var Bob = people.Bob

describe("TeenagerTest", function(){
  var teenager = new Bob();

  it("stating something", function(){
    var response = teenager.hey("Tom-ay-to, tom-aaah-to.");
    expect(response).toBe("Whatever.");
  });

  it("shouting", function(){
    var response = teenager.hey("WATCH OUT!");
    expect(response).toBe("Woah, chill out!");
  });

  it("asking a question", function(){
    var response = teenager.hey("Does this cryogenic chamber make me look fat?");
    expect(response).toBe("Sure.");
  });

  it("asking a numeric question", function(){
    var response = teenager.hey("You are, what, like 15?");
    expect(response).toBe("Sure.");
  });

  it("is talking forcefully", function(){
    var response = teenager.hey("Let's go make out behind the gym!");
    expect(response).toBe("Whatever.");
  });

  it("is asking a forceful question", function(){
    var response = teenager.hey("WHAT THE HELL WERE YOU THINKING?");
    expect(response).toBe("Woah, chill out!");
  });

  it("is shouting numbers", function(){
    var response = teenager.hey("1, 2, 3 GO!");
    expect(response).toBe("Woah, chill out!");
  });

  xit("is only saying numbers", function(){
    var response = teenager.hey("1, 2, 3");
    expect(response).toBe("Whatever.");
  });

  xit("question with only numbers", function() {
    var result = teenager.hey('4?');
    expect(result).toEqual('Sure.');
  });

  xit("shouting with special characters", function() {
    var result = teenager.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toEqual('Woah, chill out!');
  });

  xit("shouting with umlauts", function() {
    var result = teenager.hey("\xdcML\xc4\xdcTS!");
    expect(result).toEqual('Woah, chill out!');
  });

  xit("calmly speaking about umlauts", function() {
    var result = teenager.hey("\xdcML\xe4\xdcTS!");
    expect(result).toEqual('Whatever.');
  });

  xit("shouting with no exclamation mark", function () {
    var result = teenager.hey('I HATE YOU');
    expect(result).toEqual('Woah, chill out!');
  });

  xit("statement containing question mark", function() {
    var result = teenager.hey('Ending with a ? means a question.');
    expect(result).toEqual('Whatever.');
  });

  xit("prattling on", function () {
    var result = teenager.hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });

  xit("silence", function () {
    var result = teenager.hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

   xit("prolonged silence", function () {
    var result = teenager.hey('   ');
    expect(result).toEqual('Fine. Be that way!');
  });
});
