# ex 1
print ("Hello world\n"*5)

# ex 2
print (f"(99ˆ3) * 8 equals {pow(99,3)*8}")

# ex 3
print (5<3) # false
print (3 == 3) # true
print (3 == "3") # false
# print ("3" > 3) # error
print ("Hello" == "hello") #false

#ex 4
computer_brand = input("What is your computer brand: ")
print (f"I have a {computer_brand} computer")

#ex 5
name = input("Name: ")
age = input("Age: ")
show_size = input("Shoe size: ")
info = f"Hi my name is {name}, I am {age} years old, and my shoe size is {show_size}"
print (info)

#ex 6
a = 5
b = 4
if a > b:
    print("Hello World")


#ex 7
num = input("Please enter a number: ")
if num.isnumeric():
    if (int(num)%2==0):
        print("You entered an even number")
    else:
        print("You entered an odd number")
else:
    print("I only accept numbers")


#ex 8
name = input("What is your name? ")
if (name == "Henry"):
    print ("funny we have the same name")
else:
    print ("we don't have the same name")

#ex 9
height = input("Please enter your height in inches: ")
if height.isnumeric():
    if int(height)>145:
        print ("You are tall enough to ride")
    else:
        print ("You need to grow some more to ride")
else:
    print ("Your heigh has to be a number")




