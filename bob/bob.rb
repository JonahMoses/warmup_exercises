class Bob

  def hey(input)
    if input.strip == ""
      "Fine. Be that way!"
    elsif input =~ /[a-zA-Z]/ && input.upcase == input
      "Woah, chill out!"
    elsif input.end_with?("?")
        "Sure."
    else
      "Whatever."
    end
  end

end
