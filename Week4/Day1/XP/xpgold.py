print ("Hello world\n"*4 + "I love Python\n"*4)

month = input("Please input a month (1 to 12): ")
if month.isnumeric():
    month = int(month)
    if month>=3 and month<=5:
        print ("We are in Spring")
    elif month>5 and month<=8:
        print ("We are in Summer")
    elif month>8 and month<=11:
        print ("We are in autumn")
    elif month>=1 and month<=12:
        print ("We are in winter")
    else:
        print ("Please enter a valid month between 1 and 12")
else:
    print ("Please enter a valid month")

