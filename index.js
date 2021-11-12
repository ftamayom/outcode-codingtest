/*
The challenge:
 
Imagine your team has developed a web service that receives requests from about 20 million unique IP addresses every day.
You want to keep track of the IP addresses that are making the most requests to your service each day.
Your job is to write a program that (1) tracks these IP addresses in memory (don’t use a database), and (2) returns the 100 most common IP addresses.
*/

let IP_REQUEST_LIST = []; // [ count, ip_address[0], ip_address[1], ip_address[2], ip_address[3] ]
let IP_REQUEST_LIST_LENGTH = 0; // IP_REQUEST_LIST.length

/*
This function accepts a string containing an IP address like “145.87.2.109”.
This function will be called by the web service every time it handles a request.
The calling code is outside the scope of this project. Since it is being called very often, this function needs to have a fast runtime.
*/
const request_handled = (ip_address) => {
  // "Ip" format split into 4 integer values
  let [n1, n2, n3, n4] = ip_address.split(".");
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  n3 = parseInt(n3);
  n4 = parseInt(n4);

  let ipFound = false,
    ipIndexFound = 0;

  // Look for the "ip" in the 'list'
  for (let i = 0; i < IP_REQUEST_LIST_LENGTH; i++) {
    if (
      IP_REQUEST_LIST[i][1] == n1 &&
      IP_REQUEST_LIST[i][2] == n2 &&
      IP_REQUEST_LIST[i][3] == n3 &&
      IP_REQUEST_LIST[i][4] == n4
    ) {
      ipFound = true;
      ipIndexFound = i;
      break;
    }
  }

  // increment counter if there is a match
  if (ipFound) {
    IP_REQUEST_LIST[ipIndexFound][0]++;
  } else {
    // else add "ip" to array, counter 1 by default
    IP_REQUEST_LIST.push([1, n1, n2, n3, n4]);
    IP_REQUEST_LIST_LENGTH++;
  }

  // Sort the counters from highest to lowest
  IP_REQUEST_LIST.sort((a, b) => {
    if (a[0] === b[0]) {
      return 0;
    } else {
      return a[0] > b[0] ? -1 : 1;
    }
  });
};

/*
This function should return the top 100 IP addresses by request count, with the highest traffic IP address first.
This function also needs to be fast.
Imagine it needs to provide a quick response (< 300ms) to display on a dashboard, even with 20 millions IP addresses.
This is a very important requirement. Don’t forget to satisfy this requirement.
*/
const top100 = () => {
  return IP_REQUEST_LIST.slice(0, 100);
};

/*
Called at the start of each day to forget about all IP addresses and tallies.
*/
const clear = () => {
  IP_REQUEST_LIST = [];
  IP_REQUEST_LIST_LENGTH = 0;
};

// TEST

console.log('TESTING')
console.time('time')
for (var i = 0; i < 1000; i++) {
  // Testing with 1000 random "ip's"
  request_handled(
    `${Math.ceil(Math.random() * 100)}.${Math.ceil(
      Math.random() * 100
    )}.${Math.ceil(Math.random() * 100)}.${Math.ceil(Math.random() * 100)}`
  );
}
console.timeEnd('time')

console.log('IP_REQUEST_LIST_LENGTH:', IP_REQUEST_LIST_LENGTH)
console.log('Top 100:', top100())
console.log('Clear')
clear()
console.log('IP_REQUEST_LIST_LENGTH:', IP_REQUEST_LIST_LENGTH)
