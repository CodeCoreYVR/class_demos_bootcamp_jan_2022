#Namespace for Ruby Modules

module Computer
    class Apple
        def initialize(model)
            p "new Apple computer initialized"
        end
    end
end

module Fruit
    class Apple
        def initialize(type, colour)
            p "New fruit initialized"
        end
    end
end

macOs = Computer::Apple.new('iMac')
gala = Fruit::Apple.new("Gala", "red")


