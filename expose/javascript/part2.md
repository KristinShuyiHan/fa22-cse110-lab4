1. Line 12 will print the value “3” to the console, which means it will log the value of i. I is declared with the var keyword. Var variable has a function-level scope which makes the i be accessible outside of the for loop, and its final value will be the length of the prices array. Inside the for loop, the i incremented to be 2, which is the shorter than the length of the array，then I++ makes the variable increase by 1, which eventually makes i equals to 3. I is accessible outside the if block, which makes the console statement output 3.  

2. Line 13 will print the value “150” to the console, which means it will log the value of discountedPrice;. I is declared with the var keyword. Var variable has a function-level scope which makes the discountedPrice be accessible outside of the for loop, and its value of it after the loop executes is prices[2]*(1-0.5). 2 is the last value of I, price[2] is 300, and 0.5 is the value of the argument.  Because discountedPrice is a Var variable, it can be accessible outside of the for loop. Besides, since the console statement is after the for loop, it is only accessible to the value that discountedPrice is last assigned, which is [2]*(1-0.5) = 150. 

3. At line 14, the statement prints the discounted price of the last item in the prices array. The for loop runs each of the three prices data in the prices array and calculates its discountedPrice. The finalPrice is assigned a new value whenever the loop runs for one time. However, since console.log()  is outside the for loop and final price is accessible outside of the for loop (assigned by var), it prints finalPrice for the last data in the array, which is (( [2]*(1-0.5) )*100)/100 = 150.

4. the discountPrices function will of return an array: [50, 100, 150]. This is because the for loop runs each item inside the prices array argument, and calculates the final price of each item, and final price of each item is then pushed into discounted array. Because discounted array is initialized with var, it has a function scope and can be accessble anywhere inside the function it’s defined. For the first item (100),  discounted price is 100 * (1 - 0.5) = 50. For the second  (200),dp will be 200 * (1 - 0.5) = 100. For the third  (300), dp is 300 * (1 - 0.5) = 150. The values of the discounted are kept after the loop runs, making the function return [50, 100, 150]. 

5. There will be an ReferenceError saying  i is not defined. This is because let keyword provides the variable with block scope, making it can only be accessed within the block it is defined in. Since i is defined in the for loop, it cannot be accessible outside the for loop block, making the consoled statement locates after the for loop has undefined argument. 

6. There will be a ReferenceError saying discountedPrice is not defined. This is because let keyword provides the variable with block scope, making it can only be accessed within the block it is defined in. Since discountedPrice is defined in the for loop, it cannot be accessible outside the for loop block, making the consoled statement locates after the for loop has undefined argument. 

7. It will print out 150. This is because let keyword provides the variable with block scope, making it can only be accessed within the block it is defined in. Since finalPrice is defined in the beginning of the function without nesting inside any block other than the function block, it can be accessible to the whole function although it has a block scope.  The finalPrice is assigned a new value whenever the loop runs for one time. However, since console.log()  is outside the for loop, it only prints finalPrice for the last data in the array, which is (( [2]*(1-0.5) )*100)/100 = 150.

8. discountPrices function will of return an array: [50, 100, 150]. This is because the for loop runs each item inside the prices array argument, and calculates the final price of each item, and final price of each item is then pushed into discounted array. Because discounted array and finalPrice are initialized with let and resides at the top of the function,  they have both a block scope while also a function scope and can be accessible anywhere inside the function it’s defined. For the first item (100),  discounted price is 100 * (1 - 0.5) = 50. For the second  (200),dp will be 200 * (1 - 0.5) = 100. For the third  (300), dp is 300 * (1 - 0.5) = 150. The values of the discounted are kept after the loop runs, making the function return [50, 100, 150]. 

9. Line 11 will throw an ReferenceError saying i is not defined. This is because i is defined in the for loop using let. Let provides the variable with block scope. This means that it can only be accessed within the block it is defined in. Thus, the console log (i) after the loop can not access the variable i that is only accessible inside the loop. 

10. At line 12, the console.log(length) statement outputs the length of the argument array, which is 3 in this case. The length variable is const, has a  block scope same as let, and it’s like “final” in java that prevents it from being reassigned after it is assigned for the first time. Thus, the length variable is assigned to be 3, which is unchanged. Since its block is the function, the variable can be accessible to the whole function. The console.log(length) at the end of the function can also access the length variable, and will then output 3. 

11. The discountPrices function will of return an array: [50, 100, 150]. This is because the for loop runs each item inside the prices array argument, and calculates the final price of each item, and final price of each item is then pushed into discounted array. Because discounted array and length are initialized with const and resides at the top of the function, length will always be three, and discounted cannot be reassigned to a new value. However, the contents of an array declared with const can be modified, such as by adding or removing elements. The 2 variables also have both a block scope while also a function scope and can be accessible anywhere inside the function it’s defined. For the first item (100),  discounted price is 100 * (1 - 0.5) = 50. For the second  (200),dp will be 200 * (1 - 0.5) = 100. For the third  (300), dp is 300 * (1 - 0.5) = 150. Every time the loop runs there is a discountedPrice variable being initialized and  the const prevents it to be accidentally changed or modified later. The discountedPrice are then being pushed into discounted.  Values in array are kept after the loop runs, making the function return [50, 100, 150]. 

12. 
A. student.name  

B. student['Grad Year']  

C. student.greeting()  

D. student['Favorite Teacher'].name  

E. student.courseLoad[0]  



13.
A. ’32’ The plus operator when used with a string and a number, concatenates the two values together into a new string. ‘3’ is a string, resulting in the string '32'.  
B. 1  subtraction operator only works with numbers, so JS turn the string '3' into the number 3 . In other words, subtraction with non number works by converting string to a number. In this case, 3, then is subtracted by 2 to get one.   
C.3 In JS, numeric conversion for null is turning it to 0. Therefore, in this numeric operation,  the result is 3 + 0, which equals 3.  
D. ‘3null’ Given that “3” is a string, null value is converted to a string 'null' under string conversion. The string operation then concatenate string '3' and ‘null’ to give '3null'.  
E. 4  This operation involves number and a boolean, so we do a math operation which requires numeric conversion. True is converted to 1 in javascript.  3+1 = 4  
F. 0 This operation involves null and a boolean, so we do a math operation which requires numeric conversion. False is converted to 0 in javascript, and null is converted to 0. Therefore, the result is 0 + 0, which equals 0.  
G.  '3undefined' When the + operator is used with a string and undefined,  JS turns undefined into a string, and concatenate the two values together, resulting in the string '3undefined'.  
H.  NaN    minus operator only works with numbers, so JavaScript tries to convert undefined into a number. However, undefined cannot be converted a number and can only turned into “NaN”.  The subtraction operation results in NaN (Not a Number).  



14.
A. True  When comparing values of different types, JavaScript converts the values to numbers. String '2' is converted to the number 2 and then compared with the number 1. Obviously 2 is larger than 1  
B. False JavaScript uses the so-called “dictionary” or “lexicographical” order to compare string. It works by comparing the first character of both strings, and if the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. In this case, first char "2" is greater than the first char “1”, making “2” greater than “12”, thus false  
C. True  When comparing values of different types, JavaScript converts the values to numbers. It converts the string '2' to the number 2 and then compare it to the number 2. Thus true.  
D. False A strict equality operator === checks the equality without type conversion. Because value on the two sides are num and string respectively, JS immediately returns false without an attempt to convert them.  
E. False When comparing values of different types using regular quality check, JavaScript converts the values to numbers. It convert true to 1 and compares it to the number 2. Thus false.  
F. True The conversion rule of boolean is values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false, and Other values become true. In this case, Boolean(2) is converted to boolean true, true equals true   

15. The difference of between == and === is == is a regular equality check, which means values of different types are converted to numbers by this equality operator. However, === is strict equality operator. It checks the equality without type conversion. An example of how the two operators work differently is (0 == false) is true, but ( 0 === false ) is false 
