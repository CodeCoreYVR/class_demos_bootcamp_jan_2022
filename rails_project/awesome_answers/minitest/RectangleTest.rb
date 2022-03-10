require 'minitest/autorun'

#TDD Rectangle class tests:

class RectangleTest < MiniTest::Test
    def test_area
        #GIVEN
        rectangle = Rectangle.new(2,10)
        #WHEN
        area = rectangle.area
        #THEN
        assert_equal(20, area)
    end
end

class Rectangle
    def initialize(length, width)
        @length = length
        @width = width
    end

    def area
        @length * @width
    end
end
