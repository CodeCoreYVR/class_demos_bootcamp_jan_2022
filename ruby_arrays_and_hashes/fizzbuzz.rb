result = []

for num in 1..100 
    str = ''
    str << "FIZZ" if num % 3 == 0
    str << "BUZZ" if num % 5 == 0
    str << num.to_s if str.length <= 0 #if the above string is empty, 
     # it means it was not divisible by 3 or 5, so we print the number
    result << str
end

p result


