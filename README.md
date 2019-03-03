# cookieTest1
This application helps us understand the good and bad of cookies. There are 2 specific examples to show how cookies can be used. 

The demo app is hosted [here](https://cookietest1.herokuapp.com/). I strongly encourage you to clear the cookies of the site before trying each of the below scenario. 

## Good cookies
Look at the `index.html` file to understand the good effects of the cookies. Cookies can be used to save information and preferences that otherwise the user will have to reenter multiple times. 

In this case, once the user enters their name, the system remembers that and the user doesn't have to reenter it.

Secondly, for each dining option, like breakfast, the system saves the pervious selections and the user is presented with a list of pervious selections. This avoids the user from typing the same option again and again. The system is smart enough to remember the choice. 

## Bad cookies
Cookies can also be used to store personal informations that may be damaging to the user, i.e. IP address and user name. 

Go to `/login.html` and login with any user name and password `class@714`. This will redirect you to the `home.html` page. Once you are logged in, try to go to the URL `/analyze.html` and you can see all the informations that are saved in cookies for that user. These information if used for malicious intentm then it violates the user privacy. 

