#========RUBY CLASS==============>
#We define a class in Ruby using the "class" keyword
#class names are constants which means the name should start with a capital letter
#The convention is CamelCase for naming classes, like CookieMonster
#The convention for file names is snake_case: cookie_monster.rb
#Best practise to keep one class in one file

#======GLOBAL VARIABLES==========>
$greeting = "Hello" #Creating a global variable that is accessible throughout your program.  But usually not good practise to use them
# global variables are attributes that can be accessed by all objects, and subclasses
# A global variable has a name beginning with $. It can be referred to from anywhere in a program. Before initialization, a global variable has the special value nil.
# Global variables should be used sparingly. 
# They are dangerous because they can be written to from anywhere. 
# Overuse of globals can make isolating bugs difficult; 
# it also tends to indicate that the design of a program has not been carefully thought out. 
# Whenever you do find it necessary to use a global variable, be sure to give it a descriptive name that is unlikely to be inadvertently used for something else later 


class Cookie
    def initialize(sugar=1, flour=2)
        puts "in the intitialized method"
        @sugar = sugar
        @flour = flour
        @@colour = "Brown" #class variables can be accessed and changed by all subclasses as well
    end

    #getter method
    # def sugar
    #     p @sugar
    # end
    #below same as above:
    # attr_reader :sugar

    #setter method
    # def sugar=(new_sugar)
    #     @sugar = new_sugar
    # end
    #below same as above:
    # attr_writer :sugar

    #below accounts for both the setter and getter methods:
    attr_accessor :sugar

    #access both getter and setter methods for flour:
    attr_accessor :flour

    def eat
        p "Nom nom nom..."
    end

    def bake_n_eat
        bake()
        eat()
    end

    def self.info
        p "Cookies are essential to a balanced diet!"
    end

    def details
        p "sugar: #{@sugar} | flour: #{@flour}."
    end

    private

    def bake
        p "Baking the cookie"
    end

    def hello
        p "hello"
    end
end

# c = Cookie.new
# c.bake #this is now a private method. It will only work if called inside a public method (class method). Otherwise it will raise a "NoMethod" error
# c.eat
# c.bake_n_eat
# c.hello #this will raise an exception because hello is a private method

# c.info   #class method can only be invoked on the class itself
# Cookie.info

# c.details

# c2 = Cookie.new(5,1) #If the initialize method requires arguments, arguments should be supplied 
# when initializing a new instance of a class. Default values could also be set (see above)
# c2.details

# c2.sugar = 3
# c2.details

# p c2.sugar
# c2.sugar = 4
# c2.details

