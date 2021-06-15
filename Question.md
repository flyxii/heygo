# Questions

#### 1.Explain the output of the following code and why

```jsx
setTimeout(function () {
  console.log("1");
}, 100);

console.log("2");
```

##### Answer :

Ouput

```jsx
2
1
```

This is the nature of javascript. Asynchronous code would run after all the synchronous code are executed. From the above example, setTimeout is asynchronous code which would execute its callback after console.log("2") is executed. Even the second parameter is 0 millisecond, the output is still the same.

#### 2.Explain the output of the following code and why

```jsx
function foo(d) {
  if (d < 10) {
    foo(d + 1);
  }
  console.log(d);
}

foo(0);
```

##### Answer :

Output

```jsx
10
9
8
7
6
5
4
3
2
1
0
```

Javascript is single threaded and blocking language. Code will be executed one by one. In the above example, foo(0) is the first statement to be called. However, foo(1) is called inside foo(0) before console.log(). So console.log() in foo(0) will not be executed until foo(1) is done excuting. The recursive function would be chained until d is not less then 10. At d = 10, the condition of the if statement could not be fulfilled and the first console.log() will be executed. So the first output would be 10, then 9 and so on.

#### 3.If nothing is provided to `foo` we want the default response to be `5`. Explain the potential issue with the following code:

```jsx
function foo(d) {
  d = d || 5;
  console.log(d);
}
```

##### Answer :

In the above case, javascript would assign the first non-falsy value to d. 0 and empty string are to be considered as falsy in javascript. So if we pass in 0 or empty string to foo(), the output would also be 5.

#### 4.Explain the output of the following code and why

```jsx
function foo(a) {
  return function (b) {
    return a + b;
  };
}

const bar = foo(1);

console.log(bar(2));
```

##### Answer:

Output

```jsx
3
```

In the above case, the first line of code to be executed is const bar = foo(1). It would assign the executed function of foo to variable bar. At this point, the value of bar is equivalent to:

```jsx
const bar = function (b) {
  return 1 + b;
};
```

Next, console.log(bar(2)) is executed. It will pass 2 into bar and return 1 + 2. That's why the output is 3.

#### 5.Explain how the following function would be used

```jsx
function double(a, done) {
  setTimeout(function () {
    done(a * 2);
  }, 100);
}
```

##### Answer:

The function takes two parameters `a` and `done`. `a` is a number and `done` is a function. This function would double the value of `a` and pass it into `done`. The setTimeout would delay the callback and return `done` by 100 milliseconds.
