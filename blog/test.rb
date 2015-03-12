class Calculator
  def initialize(num1, num2)
    @num1 = num1.to_f
    @num2 = num2.to_f
    @@count = 0
  end

  def self.calculations  #or Calculator.calculations
    @@count
  end

  def add
    @@count += 1
    @num1 + @num2
  end

  def subtract
    @@count += 1
    @num1 - @num2
  end

  def multiply
    @@count += 1
    @num1 * @num2
  end

  def divide
    @@count += 1
    @num1 / @num2
  end

end

example = Calculator.new(1,2)
p example.add
# => 3.0
p example.subtract
# => -1.0
p example.multiply
# => 2.0
p example.divide
# => 0.5
p Calculator.calculations
# => 4
p example.divide
# => 0.5
p Calculator.calculations
# => 5
