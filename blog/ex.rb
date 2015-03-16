(5..10).inject { |sum, n| sum + n }
#=> 45

example_proc = Proc.new {puts "I am a proc block"}


ex_lambda = lambda {puts "I am a lambda!"}

