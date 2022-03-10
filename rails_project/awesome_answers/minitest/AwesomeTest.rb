require 'minitest/autorun'


class AwesomeTest < MiniTest::Test
    def test_something
        #somethinhg to test
        assert_equal(3, 1 + 1)
    end
end

#to run this file, execute with ruby

# ruby ./minitest/AwesomeTest
#To display the name of all the tests that run, add the verbose option:
# ruby ./minitest/AwesomeTest --verbose  (or -v)

