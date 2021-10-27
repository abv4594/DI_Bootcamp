# Ex4:
my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
print (f"The variable my_text has {len(my_text)} letters")

# Ex5:
while True:
    longest = 0
    sentence = input("Please enter the longest sentence you can without an A ")
    if "a" in sentence or "A" in sentence:
        break
    if len(sentence)>longest:
        longest = len(sentence)
        print(f"Congratulations, you set a new record with a sentence containing {longest} carachters without A")
print ("You loose, you entered a sentence with A")

