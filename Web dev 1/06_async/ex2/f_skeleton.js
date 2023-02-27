// TODO: Install testing packages with npm install

/**
 * TODO: implement an *async* function 'f' that returns the value of a parameter inside a Promise
 * @param {number} value, must be a number, isNaN() is useful here
 * @throws an error, if the parameter 'value' is not a number. The thrown error message must
 * be 'Parameter is not a number!'
 * @returns a new Promise, which resolves to the parameter value. returns a number after await
 */
const f = async (value) => {
  return new Promise((resolve, reject) => {
    if (!isNaN(value)) {
      resolve(value);
    } else {
      throw "Parameter is not a number!";
    }
   })
}

/**
 * TODO: Implement an async function 'g' that calls the previously made async function 'f'.
 * With then() function g waits for the result of f and returns the natural logarithm (Math.log()) of f's value. returns a number after await
 * Handle exceptions gracefully by returning the thrown error message with catch().
 * @param {number} value
 */
const g = async (value) => {
  return f(value).then(na_loga => {
    a = Math.log(value);
    return a;
  })
  .catch(err => {
    throw err;
  })
}

/**
 * TODO: Implement an async function 'checkIfFunction'.
 * The function checks the type of a parameter. typeof is useful here.
 * However, since we are now practicing
 * Promises, the value is returned as a "promisified" value
 * @param {*} param the value is checked to be a function
 * @returns resolved Promise with value true if parameter is a function or 
 * a rejected Promise with message "Not a function!" otherwise
 */
const checkIfFunction = (param) => {
  return new Promise((resolve, reject) => {
   if ( typeof param === "function") {
    return resolve(true);
   } else {
    reject("Not a function!");
   }
  })
 }

/**
 * TODO: Implement a function 'p' that returns a resolved Promise after a given time.
 * If time > 2000 milliseconds, the Promise must be rejected with message "Too long time!".
 * If time is not a number the Promise must be rejected with message "Not a number!".
 * @param {number} time
 * @returns {an empty Promise after a given time}, if time is acceptable
 */
const p = (time) => {
  return new Promise((resolve, reject) => {
    if (time > 2000) {
      reject("Too long time!");
    } else if (isNaN(time)) {
      reject("Not a number!");
    } else {resolve();}   })
 
};

//TODO: verify that all functions exported below are available for tests (they should be)
exports.f = f;
exports.g = g;
exports.checkIfFunction = checkIfFunction;
exports.p = p;


// TODO: Run the tests with npm test