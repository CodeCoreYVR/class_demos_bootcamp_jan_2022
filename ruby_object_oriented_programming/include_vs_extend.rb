module AwesomeMethods
    def greeting
        p 'Hello World'
    end
end

class Abc
    include AwesomeMethods
end

a = Abc.new
a.greeting #include works for the instance of a class

class Xyz
    extend AwesomeMethods
end

x = Xyz.new
# x.greeting
Xyz.greeting #extend works for the class itself


