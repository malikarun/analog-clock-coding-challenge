# this programs accepts one argument
# e.g 04:30

# split the argument in two parts
# hour and minutes
input = ARGV[0].split(":");

# hour is modulus of 12
hour = input[0].to_i % 12;

# minutes should be floor number divided by 5
# step 5 minutes each time
minutes = (input[1].to_i / 5).to_i;

# say, clock is an array of arrays
arr = [
  [0, 0, 0, 12, 0, 0, 0],
  [0, 0, 11, 0, 1, 0, 0],
  [0, 10, 0, 0, 0, 2, 0],
  [9, 0, 0, 0, 0, 0, 3],
  [0, 8, 0, 0, 0, 4, 0],
  [0, 0, 7, 0, 5, 0, 0],
  [0, 0, 0, 6, 0, 0, 0]
];

# x is true when hour and minute
# are at same level
x = hour == minutes;

# loop through and replace values
myArr = arr.map do |eachArray|
  eachArray.map do |val|
    o = 'o'
    case val
    when 0
      o = " "
    when hour
      o = x ? 'x' : "h";
    when minutes
      o = x ? 'x' : "m";
    end

    o;
  end.join
end.join("\n");

puts myArr;