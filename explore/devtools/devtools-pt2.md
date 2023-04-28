1. What was the bug?  
The bug is that the datatype of num1 and num2 are both strings. The plus operator when used with two strings, concatenates the two values together into a new string. Thus, reuslt's vaule is two numbers concetanataing together, and datatype of result is a string.
2. How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use)
To fix this issue, I conduct Numeric conversion using Number() to coerce num1 and num2 into number2. As the fix.png indicates, both num1 and num2 turn into numbers after using Nimber(), making the datatype of result turn into a number as well since plus operator does numeric oepration to two numerical operands. 
