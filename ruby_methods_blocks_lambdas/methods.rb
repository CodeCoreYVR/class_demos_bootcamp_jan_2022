#Methods

#A method is created with the "def" keyword to definine a method.
#It takes in any arguments you want, separarted by commas
#Paretheses are optional

def method_name(arg1, arg2)
    #It will implicitly return the value
    #of the last expression
end

def multiply(a,b)
    p a*b
end

multiply(2,4)

multiply 5,3 #brackets are optional

# def is_a_cat? a
#     p "#{a} is a cat"
# end

#the above is not good practise
#ending a method name with a question mark is reserved for
#methods expected to return a boolean value

#better practise:

def is_a_cat? a
    if a == 'cat'
        p true
    else
        p false
    end
end

def my_method(a,b)
    return a*b #you use the return keyword if the method needs to return prior to the last expression
    a+b
end

p my_method(3,2)



