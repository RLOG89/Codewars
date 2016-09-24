def how_much_coffee(events)
  count = 0
  
  events.each do |event|
    if event== "cw"
      count += 1
    elsif event== "CW"
      count += 2
    elsif event== "cat"
      count += 1
    elsif event== "CAT"
      count += 2
    elsif event== "dog"
      count += 1
    elsif event== "DOG"
      count += 2
    elsif event== "movie"
      count += 1
    elsif event== "MOVIE"
      count += 2
    end
  end
  
  if count > 3
    "You need extra sleep"
  else
    puts "You need #{count} coffees"
    return count
  end
end