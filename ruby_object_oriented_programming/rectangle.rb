class Rectangle
    attr_accessor :width, :height

    def initialize(width=0, height=0)
        @width, @height = width, height
    end

    def area
        width * height
    end

    def is_square?
        width == height
    end
end

r = Rectangle.new(3,4)

puts r.area #12
puts r.is_square? #false



