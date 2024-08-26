let questions = [
	{
		number: 1,
		question: "What does js stand for?",
		answer: "JavaScript",
		options: [
			"Javascipt",
			"javasscript",
			"JavaScript",
			"JustScript"
		]
	},
	{
		number: 2,
		question: "Which company developed JavaScript?",
		answer: "Netscape",
		options: [
			"Microsoft",
			"Sun Microsystems",
			"Netscape",
			"Oracle"
		]
	},
	{
		number: 3,
		question: "What is the correct syntax for referring to an external script called 'app.js'?",
		answer: "script src='app.js'",
		options: [
			"script href='app.js'",
			"script src='app.js'",
			"script link='app.js'",
			"script file='app.js'"
		]
	},
	{
		number: 4,
		question: "Which of the following is a JavaScript data type?",
		answer: "Boolean",
		options: [
			"Float",
			"Character",
			"Boolean",
			"Date"
		]
	},
	{
		number: 5,
		question: "Which symbol is used for single-line comments in JavaScript?",
		answer: "//",
		options: [
			"//",
			"/* */",
			"#",
			"<!-- -->"
		]
	},
	{
		number: 6,
		question: "How do you create a function in JavaScript?",
		answer: "function myFunction()",
		options: [
			"function = myFunction()",
			"function:myFunction()",
			"function myFunction()",
			"def myFunction()"
		]
	},
	{
		number: 7,
		question: "How do you call a function named 'myFunction'?",
		answer: "myFunction()",
		options: [
			"call myFunction()",
			"myFunction()",
			"myFunction(call)",
			"call function myFunction()"
		]
	},
	{
		number: 8,
		question: "Which of the following is used to declare a variable in JavaScript?",
		answer: "let",
		options: [
			"var",
			"let",
			"const",
			"All of the above"
		]
	},
	{
		number: 9,
		question: "How can you add a comment in JavaScript?",
		answer: "// This is a comment",
		options: [
			"// This is a comment",
			"<!-- This is a comment -->",
			"/* This is a comment */",
			"# This is a comment"
		]
	},
	{
		number: 10,
		question: "Which operator is used to assign a value to a variable?",
		answer: "=",
		options: [
			"=",
			"==",
			"===",
			"=>"
		]
	},
	{
		number: 11,
		question: "Which event occurs when a user clicks on an HTML element?",
		answer: "onclick",
		options: [
			"onchange",
			"onmouseover",
			"onclick",
			"onmouseclick"
		]
	},
	{
		number: 12,
		question: "What is the output of the following code: console.log(typeof 42);",
		answer: "number",
		options: [
			"integer",
			"number",
			"float",
			"string"
		]
	},
	{
		number: 13,
		question: "Which method is used to parse a string to an integer in JavaScript?",
		answer: "parseInt()",
		options: [
			"parseInt()",
			"Number()",
			"toFixed()",
			"parseFloat()"
		]
	},
	{
		number: 14,
		question: "Which method is used to remove the last element of an array?",
		answer: "pop()",
		options: [
			"pop()",
			"shift()",
			"splice()",
			"slice()"
		]
	},
	{
		number: 15,
		question: "Which of the following is not a looping structure in JavaScript?",
		answer: "foreach",
		options: [
			"for",
			"while",
			"do-while",
			"foreach"
		]
	},
	{
		number: 16,
		question: "Which of the following methods is used to add an element at the end of an array?",
		answer: "push()",
		options: [
			"append()",
			"insert()",
			"push()",
			"add()"
		]
	},
	{
		number: 17,
		question: "Which method is used to join all elements of an array into a string?",
		answer: "join()",
		options: [
			"concat()",
			"join()",
			"merge()",
			"bind()"
		]
	},
	{
		number: 18,
		question: "Which of the following is a way to declare a constant in JavaScript?",
		answer: "const",
		options: [
			"constant",
			"final",
			"const",
			"let"
		]
	},
	{
		number: 19,
		question: "What will the code return: Boolean(0);",
		answer: "false",
		options: [
			"true",
			"false",
			"null",
			"undefined"
		]
	},
	{
		number: 20,
		question: "Which JavaScript method is used to access an HTML element by id?",
		answer: "getElementById()",
		options: [
			"getElementById()",
			"getElementsByTagName()",
			"querySelector()",
			"getElementByClass()"
		]
	},
	{
		number: 21,
		question: "How do you round the number 7.25 to the nearest integer?",
		answer: "Math.round(7.25)",
		options: [
			"Math.rnd(7.25)",
			"round(7.25)",
			"Math.round(7.25)",
			"rnd(7.25)"
		]
	},
	{
		number: 22,
		question: "How do you find the number with the highest value in JavaScript?",
		answer: "Math.max()",
		options: [
			"Math.max()",
			"Math.ceil()",
			"Math.floor()",
			"Math.round()"
		]
	},
	{
		number: 23,
		question: "Which of the following is not a JavaScript framework or library?",
		answer: "Django",
		options: [
			"React",
			"Vue",
			"Angular",
			"Django"
		]
	},
	{
		number: 24,
		question: "What does 'this' keyword refer to in JavaScript?",
		answer: "The current object",
		options: [
			"The current object",
			"The global object",
			"The parent object",
			"None of the above"
		]
	},
	{
		number: 25,
		question: "Which method converts JSON data to a JavaScript object?",
		answer: "JSON.parse()",
		options: [
			"JSON.stringify()",
			"JSON.parse()",
			"JSON.objectify()",
			"JSON.convert()"
		]
	},
	{
		number: 26,
		question: "How do you write 'Hello World' in an alert box?",
		answer: "alert('Hello World');",
		options: [
			"msg('Hello World');",
			"alertBox('Hello World');",
			"alert('Hello World');",
			"msgBox('Hello World');"
		]
	},
	{
		number: 27,
		question: "Which built-in method removes the last element from an array and returns that element?",
		answer: "pop()",
		options: [
			"last()",
			"get()",
			"pop()",
			"remove()"
		]
	},
	{
		number: 28,
		question: "How do you check if a value is an array in JavaScript?",
		answer: "Array.isArray()",
		options: [
			"Array.isArray()",
			"isArray()",
			"typeof Array",
			"instanceof Array"
		]
	},
	{
		number: 29,
		question: "How do you write a 'for' loop in JavaScript?",
		answer: "for (let i = 0; i < 5; i++)",
		options: [
			"for (i <= 5; i++)",
			"for (let i = 0; i < 5; i++)",
			"for (i = 0; i < 5)",
			"for (i++ <= 5)"
		]
	},
	{
		number: 30,
		question: "What is the output of the following code: console.log('5' + 2);",
		answer: "52",
		options: [
			"7",
			"52",
			"error",
			"undefined"
		]
	},
	{
		number: 31,
		question: "Which operator checks both value and type?",
		answer: "===",
		options: [
			"==",
			"===",
			"=",
			"=>"
		]
	},
	{
		number: 32,
		question: "What will the following code output: console.log(2 + '2');",
		answer: "22",
		options: [
			"4",
			"22",
			"NaN",
			"undefined"
		]
	},
	{
		number: 33,
		question: "What is the value of 'null' in JavaScript?",
		answer: "An object",
		options: [
			"A number",
			"A string",
			"An object",
			"undefined"
		]
	},
	{
		number: 34,
		question: "Which method is used to add one or more elements to the beginning of an array?",
		answer: "unshift()",
		options: [
			"push()",
			"pop()",
			"shift()",
			"unshift()"
		]
	},
	{
		number: 35,
		question: "Which method is used to merge two or more arrays?",
		answer: "concat()",
		options: [
			"concat()",
			"join()",
			"merge()",
			"append()"
		]
	},
	{
		number: 36,
		question: "Which keyword is used to check for exceptions in JavaScript?",
		answer: "try",
		options: [
			"catch",
			"throw",
			"try",
			"finally"
		]
	},
	{
		number: 37,
		question: "Which method is used to remove whitespace from both ends of a string?",
		answer: "trim()",
		options: [
			"trim()",
			"slice()",
			"strip()",
			"cut()"
		]
	},
	{
		number: 38,
		question: "Which function is used to convert a string to a number?",
		answer: "Number()",
		options: [
			"parseString()",
			"Number()",
			"parseNum()",
			"int()"
		]
	},
	{
		number: 39,
		question: "What is the purpose of the 'debugger' statement?",
		answer: "It stops the execution of JavaScript and calls the debugging function.",
		options: [
			"It stops the execution of JavaScript and calls the debugging function.",
			"It skips a part of code.",
			"It logs errors to the console.",
			"It breaks the code into multiple lines."
		]
	},
	{
		number: 40,
		question: "Which loop will always execute at least once?",
		answer: "do...while",
		options: [
			"for",
			"while",
			"do...while",
			"foreach"
		]
	},
	{
		number: 41,
		question: "What will be the output of the following code: console.log(1 == '1');",
		answer: "true",
		options: [
			"true",
			"false",
			"undefined",
			"NaN"
		]
	},
	{
		number: 42,
		question: "Which method can be used to convert an array to a string?",
		answer: "toString()",
		options: [
			"toString()",
			"parse()",
			"slice()",
			"convert()"
		]
	},
	{
		number: 43,
		question: "How do you write an if statement in JavaScript?",
		answer: "if (x > y) { }",
		options: [
			"if x > y",
			"if x > y then",
			"if (x > y) { }",
			"if x > y { }"
		]
	},
	{
		number: 44,
		question: "Which function returns the length of a string?",
		answer: "length",
		options: [
			"size()",
			"length()",
			"len()",
			"length"
		]
	},
	{
		number: 45,
		question: "Which method is used to split a string into an array of substrings?",
		answer: "split()",
		options: [
			"slice()",
			"split()",
			"cut()",
			"divide()"
		]
	},
	{
		number: 46,
		question: "What is the output of the following code: console.log(typeof NaN);",
		answer: "number",
		options: [
			"undefined",
			"object",
			"number",
			"null"
		]
	},
	{
		number: 47,
		question: "Which of the following methods creates a new array from the results of a provided function?",
		answer: "map()",
		options: [
			"forEach()",
			"map()",
			"reduce()",
			"filter()"
		]
	},
	{
		number: 48,
		question: "Which keyword is used to define an asynchronous function?",
		answer: "async",
		options: [
			"await",
			"async",
			"defer",
			"asynchronous"
		]
	},
	{
		number: 49,
		question: "Which of the following is a correct way to declare a promise?",
		answer: "new Promise((resolve, reject) => { })",
		options: [
			"Promise.create((resolve, reject) => { })",
			"new Promise((resolve, reject) => { })",
			"new Promise((resolve) => { })",
			"createPromise((resolve, reject) => { })"
		]
	},
	{
		number: 50,
		question: "What is the correct syntax to write a JavaScript arrow function?",
		answer: "() => { }",
		options: [
			"() => { }",
			"=> { }",
			"function => { }",
			"() = { }"
		]
	}
]