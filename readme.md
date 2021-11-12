# Outcode Codingtest

Imagine your team has developed a web service that receives requests from about 20 million unique IP addresses every day. You want to keep track of the IP addresses that are making the most requests to your service each day. Your job is to write a program that (1) tracks these IP addresses in memory (don’t use a database), and (2) returns the 100 most common IP addresses.

• What would you do differently if you had more time?
    Would implement better algorithms already created on the Internet and from scratch to be able to modify them.
• What is the runtime complexity of each function?
    I have not calculated it, for 1000 records it takes about 20 ms
• How does your code work?
    I save the ip in 4 int (because the search is faster than with a string) in a global array every time an identifier is made, I look for matches and increment the counter as well as the length. Then I do a sort to order it desc by the number of matches.
    To find the top100, I slice the top 100 results and for the clear reset the two global variables.
• What other approaches did you decide not to pursue?
    I tried with indexof directly on the array, but being multidimensional it didn't work. I also did not implement the sort function from scratch due to lack of time, but it would make the search faster by limiting it to only 100 items.
• How would you test this?
    I did a loop that generated random ip's and then wrote some code to show top 100 results and delete function.

## Installation

1. Clone or download this repository.
```bash
git clone https://github.com/ftamayom/outcode-codingtest.git
```

2. Go to ```outcode-codingtest``` folder in the console and run ```node --max-old-space-size=8192 index.js``` command.

## License
[MIT](https://choosealicense.com/licenses/mit/)