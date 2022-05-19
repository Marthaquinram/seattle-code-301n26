# APIs

## Overview

Today we will use our express server to request information from third party APIs to send to the front-end.

## Daily Plan

- Warm-up exercise
- Concept review
- Code review of lab assignment
- Review code challenges
- Introduction of today's code challenge topic
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n26-Code-Challenges-RegEx-1#index.js>
- Requesting data from 3rd party APIs via the server
- Code Demo
- Lab Preview

## Learning Objectives

As a result of completing Lecture 8 of Code 301, students will be able to:

- Describe and Define
  - APIs
- Execute
  - Node Express Server
  - Use **axios** to fetch remote data asynchronously
  - Use **axios** to reach out to the back-end from the front-end
  - Ingest 3rd Party data from an API
  - Integrate data with a separate web application

## Notes

- Thunder Client
  - Docs: <https://github.com/rangav/thunder-client-support#usage>
  - Similar to Postman or Insomnia
  - We will use Thunder Client more as we move into using other HTTP methods.
  - Click "New Request" to get started
    - Paste the base URL into GET request bar.
    - Fill in your Query Parameters with your key and params.
    - Hit "Send" and view the response object in the Response Tab.
    - Inspect the "shape" of the data and see if it conforms to your needs.

- Heroku Deployment
  - Push your server repo to GitHub
  - Sign up/Log in to Heroku
  - Click the 'New' button in the top right corner and select 'Create new app'
  - Name your app and click the 'Create app' button
  - Add the Heroku remote to your local app via the Command Line
    - `heroku git:remote -a your-server-app`
  - Deploy your app via the Command Line
    - `git push heroku main`
  - Look for the '-----> Build succeeded!' message in your Terminal/Ubuntu
  - Copy/paste the URL under the '-----> Launching...' print out, into the browser to see the home end point in your server
    - ex: `https://city-explorer-api.herokuapp.com/`
  - You can also return to the Heroku UI and click on the 'Open App' button in the top right corner of the dashboard.
  - When you make changes to your server and need to push those changes to Heroku:
    - ACP like normal
    - `git push heroku main`
    - view your changes in the browser

1. What is an API?

- holds all the data we could ever need and sends it in a request object

1. Why do we need a server?

- a device that talks to the rest of the internet
- it sends/recieves requests and responses
- code in servers are easy to find through the browser, therefore, a server is a great place to store secret keys

1. What do we keep in our .env file?

- anything(values) we want confidential
- store API keys
- store other variables that will link to your server URL

1. Nodemon will automatically detect changes that we make to all the files in our server, however, if we make a change to THIS file, we must restart nodemon for it to take affect.

- Nodemon aka "No Demon"
  - Runs your server and restarts it for you when you make changes
    - the only exception is if you make a change to your `.env` file!
  - Install it: `npm install --save-dev nodemon`
    - `--save-dev` is just saving nodemon as a developer dependencies and not as a app dependency
    - you can see it in package lock, its under a different object
  - Start your server: `npx nodemon server.js`

1. True or False: all API's require a key

- False, not all APIs need a key!
- Pokemon, Game of Thrones, Star Wars API don't need keys!

1. To make an API call in the server using axios:

  ```javaScript
  const url = `http://urlToAPI/?key=${process.env.MY_API_KEY}&city=seattle`;

  // notice the 'await'. This is asynchronous code. The function will need to be 'async'
  const axiosResults = await axios.get(url);
  console.log(axiosResults.data);
  ```

- NOTE: `axios` returns a giant object. The data we care about will be found in the `data` property of that object.

## Introducing Regular Expressions 101

- repl.it Demo: <https://replit.com/@HexxKing1/301n26-Code-Challenges-RegEx-1#index.js>
- What is Regex?
  - Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text.
  - Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.
  - A regular expression can be a single character, or a more complicated pattern.
  - Regex is a means of identifying patterns in strings. When you search for patterns in a string, you can use this search pattern(the Regex pattern) to describe what you are searching for.
  - We commonly use Regex to validate input, replace character patterns with other characters, refer to character patterns in a string or to parse through data collected with web scraping(data science/machine learning).
  - Regex is used in almost all programming languages...JavaScript, Java, VB, C#, C / C++, Golang, Python, Perl, PHP, Ruby, R, and many others!

- DOCS:
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions>
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp>
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet>
  - <https://www.w3schools.com/jsref/jsref_obj_regexp.asp>
  - <https://www.w3schools.com/js/js_regexp.asp>
  - <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#regular-expressions>
  - <https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285>
  - <https://medium.com/factory-mind/regex-cookbook-most-wanted-regex-aa721558c3c1>

- Check out Regex101 to test out your Regex pattern!
  - <https://regex101.com/>
  - NOTE: If you are using regex101 to test your patterns, you MUST change the Flavor (look to the left of the page to find the "Flavor") to ECMAScript(JavaScript) FIRST!!

- SYNTAX: `/pattern/modifier(s);`
  - VOCABULARY EXPLAINED:
    - The pattern to search for:   bananas
    - A regular expression:   `/bananas/`
    - A globally matched regular expressions:  `/bananas/g`

- MODIFIERS/FLAGS: used to perform case-insensitive and global searches. A Regex pattern usually comes within this form `/abc/`, where the search pattern is delimited by two slash characters `/`. At the end we can specify a flag with these values (we can also combine them each other):
  - `g`: Perform a global match (find all matches rather than stopping after the first match)
  - `i`: Perform case-insensitive matching
  - `m`: Perform multiline matching - when enabled `^` and `$` will match the start and end of a line, instead of the whole string

- BRACKETS: used to find a range of characters
  - `[abc]` Find any character between the brackets
  - `[^abc]` Find any character NOT between the brackets
  - `[0-9]` Find any character between the brackets (any digit)
  - `[^0-9]` Find any character NOT between the brackets (any non-digit)

- CAPTURING GROUPS: a way to treat multiple characters as a single unit. They are created by placing the characters to be grouped inside a set of parentheses.
  - `(dog)` Groups together the characters 'd', 'o', 'g'.
  - `(x|y)` Find any of the alternatives specified

- METACHARACTERS: are characters with a special meaning
  - `.` Find a single character, except newline or line terminator
  - `\w` Find a word character
  - `\W` Find a non-word character
  - `\d` Find a digit
  - `\D` Find a non-digit character
  - `\s` Find a whitespace character
  - `\S` Find a non-whitespace character
  - `\b` Find a match at the beginning/end of a word,
    - beginning like this: `/\bHello/`
    - end like this: `/Hello\b/`
  - `\B` Find a match, but not at the beginning/end of a word

- QUANTIFIERS: Indicate numbers of characters or expressions to match.
  - `n*` Matches any string that contains zero or more occurrences of n
  - `^n` Matches any string with n at the beginning of it
  - `n?` Matches any string that contains zero or one occurrences of n
  - `n$` Matches any string with n at the end of it
  - `n+` Matches any string that contains at least one n

- REGEXP OBJECT METHODS: patterns are used with the `exec()` and `test()` methods of RegExp
  - `test()`
    - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test>
    - The `test()` method executes a search for a match between a regular expression and a specified string.
    - Returns true or false.
    - Syntax: `pattern.test(str)`

- STRING OBJECT METHODS: `match()`, `matchAll()`, `replace()`, `replaceAll()`, `search()`, and `split()` methods
  - `match()`
    - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match>
    - The `match()` method retrieves the result of matching a string against a regular expression.
    - Returns an Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.
      - If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
      - if the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below.
      - Syntax: `str.match(pattern)`
  - `replace()`
    - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace>
    - The `replace()` method returns a new string with some or all matches of a pattern replaced by a replacement.
      - The pattern can be a string or a RegExp.
      - The replacement can be a string or a function to be called for each match.
      - Only the first occurrence will be replaced.
      - The original string is left unchanged.
    - Returns a new string, with some or all matches of a pattern replaced by a replacement.
    - Syntax: `str.replace(pattern, replacer)`
