# p "Hello World"
# one line

=begin
aaa
bbb
ccc
=end


#Printing 

# print doesn't add a new line(\n)
# print "Hello World"

# printing the value(arguments) how ruby sees it
# p [1,2]

# add a new line
# puts [1,2]


# decalring a variable
# user_input = "Mao"
# user_number = 12

# PORT = 3000 
# HOSTNAME = "127.0.0.1"

# a = 1
# b = a + 5
# p b

# a = "Hello"
# b = "World"
# c = a + b
# p c

# puts "Plese enter your name:"

# user_input = gets.chomp

# # .chomp remove the return line character at the end
# p user_input


# puts "What's your first name:"
# first_name = gets.chomp

# puts "What's your last name:"
# last_name = gets.chomp

# puts first_name + " " + last_name

# Strings
=begin
# 'Hello' 
# "Hello"
# "Hello #{user_input}"


puts "What's ur name:"
# user_input = gets.chomp.capitalize
# user_input = gets.chomp.reverse
user_input = gets.chomp.swapcase
puts user_input

=end


# Numbers
=begin
 number_test = 100_000

 p number_test


# to_i to_f 

p "50".to_i
p "50".to_f

a = 5
b = a ** 3
p b


# ruby donest have ++ --

puts "Plese give me a number"
number1 = gets.chomp.to_i
puts "Plese give me another number"
number2 = gets.chomp.to_i

puts number1 * number2
=end

# "hello" * 5 => "hellohellohellohellohello"

# Logic Operators
=begin

# &&
true && false  # => false
false && false # => false
true && true   # => ture
# ||
true || false  # => true
false || false # => false
true || true   # => ture
false || true  # => ture

== also compares the data type

=end
# Work FLow
=begin

if 10 > 15
    puts "here"
elsif 10 > 11

else
    puts "not here"
end


# if 10 > 5
#     puts "10 is geater than 5" 
# end

# unless 10 < 5
#     puts "10 is geater than 5"
# end

# unless is kind of like not if(!if), when the condition returns false, get into the statement


puts "whats the year of your car"
year = gets.chomp.to_i
if year > 2100
    puts "future"
elsif year > 2000 && year < 2100
    puts "new"
else
    puts "old"
end

counter = 1
while counter < 11
    puts "I'm now at #{counter}"
    counter += 1
end
counter = 1
until counter > 5
    puts counter
    counter += 1
end


# for number in 1...10 do
#     puts number
# end

# for number in 1..10 do
#     puts number
# end

# ... not includes the last number
# .. includes

# 10.times {puts "hello"}

arr = ['a','b','c']
for i in arr do
    puts i 
end

=end

# ? => boolean value or nil
# ! => changes the original value

# puts 1.is_a? Integer
