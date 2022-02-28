def filter(arr)
    new_array=[]
    for val in arr
        return p "no block given" unless block_given?
        result = yield(val)
        if result
            new_array << val
        end
    end
    # puts "Output: #{new_array}"
    new_array
end

# filter [1,2,34]

p filter([1,2,3,4]){|x| x.even?}  #OR x%2 == 0





