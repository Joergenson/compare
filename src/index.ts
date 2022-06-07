/**
 * Performs a lazy estimation for the execution time of JavaScript's Array.sort() method.
 * @param array An Array of unsorted integers with length n.
 * @returns The estimated execution time in milliseconds.
 */
function lazy(array: Array<number>): number {
    // Check if the input array is null or if the length is zero
    // If true, throw a Illegal Argument Exception or return a negative value
    if (array === null || array.length === 0) return -1

    // Save the timestamp for the current amount of milliseconds since elapsed since January 1, 1970 00:00:00 UTC
    // This timestamp indicates the starting point before any sorting operations are performed on integer array
    // The lazy method makes use of JavaScript Dates to get the date before code execution and after code execution
    const start: number = Date.now()

    // Sort the array using JavaScript's built Array.sort() method
    // A compare function is used so sort numerical values in JavaScript
    // The implementation of JavaScript's Array.sort() method depends on your browser
    // The most common algorithm for Chromium is QuickSort or InsertionSort and MergeSort for Mozilla's Firefox
    array.sort((a: number, b: number) => a - b)

    // Calculate the execution time using the lazy method of substracting dates
    // The execution time is calculated by subtracting the two Dates, however, resulting in limited accuracy
    const lazyExecutionTime: number = Date.now() - start

    // Return the lazy estimation of the sort method's execution time
    // The lazy estimation is measured in milliseconds, so it’s impossible to get to higher resolutions like microseconds
    return lazyExecutionTime
}

/**
 * Performs a precise estimation for the execution time of JavaScript's Array.sort() method.
 * @param array An Array of unsorted integers with length n.
 * @returns The execution time it took to sort the array in microseconds.
 */
function precise(array: Array<number>): number {
    // Check if the input array is null or if the length is zero
    // If true, throw a Illegal Argument Exception or return a negative value
    if (array === null || array.length === 0) return -1

    // Save the timestamp for the current amount of milliseconds since elapsed since January 1, 1970 00:00:00 UTC
    // This timestamp indicates the starting point before any sorting operations are performed on integer array
    // The precise method makes use of JavaScript's performance API to get the date before code execution and after code execution
    const start: number = performance.now()

    // Sort the array using JavaScript's built Array.sort() method
    // A compare function is used so sort numerical values in JavaScript
    // The implementation of JavaScript's Array.sort() method depends on your browser
    // The most common algorithm for Chromium is QuickSort or InsertionSort and MergeSort for Mozilla's Firefox
    array.sort((a: number, b: number) => a - b)

    // Calculate the execution time using the precise method of substracting performance timestamps
    // The execution time is calculated by subtracting the two timestamps, resulting in a higher precision
    const preciseExecutionTime: number = performance.now() - start

    // Return the precise estimation of the sort method's execution time
    // The precise estimation is measured in mircoseconds, allowing for a floating-point numbers with up to microsecond precision
    return preciseExecutionTime
}

/**
 * Performs a precise estimation for the execution time of JavaScript's fetch() method.
 * @param endpoint The path to the resource you want to fetch.
 * @returns The execution time it took to sort the array in microseconds.
 */
async function request(endpoint: string): Promise<number> {
    // Check if the input endpoint is null or if the length is zero
    // If true, throw a Illegal Argument Exception or return a negative value    
    if (endpoint === null || endpoint.length === 0) return Promise.resolve(-1)

    // Save the timestamp for the current amount of milliseconds since elapsed since January 1, 1970 00:00:00 UTC
    // This timestamp indicates the starting point before any sorting operations are performed on integer array
    // The precise method makes use of JavaScript's performance API to get the date before code execution and after code execution
    const start: number = performance.now()

    // JavaScript's native API provides an interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses
    // The API provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network
    // GET method implementation that parses a JSON response into native JavaScript objects and calculates the performance
    return fetch(endpoint, {
        method: 'GET', // GET, POST, PUT, DELETE, etc.
        headers: {
            'Accept': 'application/json', // Accept data type of JSON only
            'Content-Type': 'application/json' // The body data type must match "Content-Type"
        }
    }).then(response => response.json()).then(() => {
        // Calculate the execution time using the precise method of substracting performance timestamps
        // The execution time is calculated by subtracting the two timestamps, resulting in a higher precision
        const requestExecutionTime: number = performance.now() - start

        // Return the precise estimation of the sort method's execution time
        // The precise estimation is measured in mircoseconds, allowing for a floating-point numbers with up to microsecond precision
        return requestExecutionTime
    })
}