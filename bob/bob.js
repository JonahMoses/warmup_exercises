//  class Bob
//    def hey(input)
//    end
//  end

var Bob = function() {
  this.hey = function(input){
    if(input.toUpperCase() == input) {
      return "Woah, chill out!";
    } else if(input.substr(input.length-1) == "?") {
      return "Sure.";
    } else {
      return "Whatever.";
    };
  };
};

exports.Bob = Bob;
