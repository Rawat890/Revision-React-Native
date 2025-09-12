100 JavaScript Technical Practice Questions
DOM Manipulation & Event Handling

Create a dynamic list where users can add/remove items using innerHTML and event listeners
Build a image slider that changes images every 3 seconds and allows manual navigation with buttons
Implement a modal popup that opens when clicking a button and closes when clicking outside or pressing ESC
Create a search functionality that filters a table of data in real-time as user types
Build a drag and drop interface where items can be moved between different containers
Implement a accordion menu that expands/collapses sections when clicked
Create a pagination system that displays different sets of data based on page number
Build a responsive navigation menu that toggles on mobile devices
Implement a form validator that shows real-time error messages for different input fields
Create a infinite scroll that loads more content when user reaches bottom of page

Arrays & Array Methods

Filter an array of objects to show only items that match multiple criteria (age > 25 AND city = 'NYC')
Use map() to transform an array of user objects into HTML list items with specific formatting
Implement reduce() to calculate total price from array of products with quantities and prices
Sort an array of objects by multiple properties (first by category, then by price)
Find the most frequent element in an array and count how many times it appears
Merge multiple arrays and remove duplicates while preserving original order
Group array of transactions by month and calculate sum for each month using reduce()
Use flatMap() to extract and flatten nested arrays from complex data structure
Implement custom filter function that works with async predicates
Chain multiple array methods to process sales data: filter → map → reduce → sort

Objects & Data Manipulation

Deep clone a nested object without using external libraries or JSON methods
Merge multiple objects with nested properties, handling conflicts intelligently
Create a function that flattens nested objects into dot notation (user.address.city)
Implement object comparison that checks deep equality between complex objects
Build a data transformer that converts snake_case API responses to camelCase
Create a object validator that checks required fields and data types dynamically
Implement object destructuring with default values and nested property extraction
Build a configuration merger that combines default settings with user preferences
Create a object path getter/setter (get(obj, 'user.profile.name') returns nested value)
Implement object diffing that shows what properties changed between two objects

Functions & Scope

Create a closure-based counter that maintains private state and exposes increment/decrement methods
Implement function currying that transforms function(a,b,c) into function(a)(b)(c)
Build a memoization function that caches expensive function results
Create a debounce function that delays execution until after specified time of inactivity
Implement a throttle function that limits function execution to once per specified interval
Build a function composition utility that combines multiple functions into one
Create a partial application function that pre-fills some arguments
Implement a retry mechanism that attempts function execution with exponential backoff
Build a function pipeline that passes result of one function as input to next
Create a higher-order function that adds logging/timing to any existing function

Asynchronous JavaScript

Implement Promise.all() functionality from scratch without using the built-in method
Create a async function that fetches data from multiple APIs and combines results
Build a queue system that processes async tasks one at a time with proper error handling
Implement a timeout wrapper that cancels promises if they take too long
Create a retry mechanism for failed API calls with different retry strategies
Build a cache layer that stores API responses with expiration times
Implement a batch processor that groups multiple requests and sends them together
Create a async iterator that yields data from paginated API endpoints
Build a progress tracker for multiple concurrent async operations
Implement a circuit breaker pattern that stops calling failing services

Error Handling & Validation

Create a comprehensive form validation system with custom rules and error messages
Implement try-catch blocks with proper error logging and user-friendly messages
Build a custom error class hierarchy for different types of application errors
Create a global error handler that catches unhandled promises and runtime errors
Implement input sanitization to prevent XSS attacks in user-generated content
Build a data type validator that checks objects against predefined schemas
Create a boundary checker that validates numeric inputs within specified ranges
Implement a async validator that checks data against server-side rules
Build a error recovery system that provides fallback values when operations fail
Create a validation pipeline that runs multiple checks in sequence with early exit

ES6+ Features & Modern JavaScript

Use destructuring to extract values from nested objects and arrays with default values
Implement template literals with complex expressions and conditional formatting
Create classes with private methods, static methods, and inheritance using extends
Use Set and Map data structures to solve duplicate removal and key-value mapping problems
Implement generators that yield infinite sequences or process large datasets lazily
Use Proxy objects to create observable objects that track property changes
Implement async/await with proper error handling in complex nested scenarios
Use spread operator and rest parameters for flexible function arguments handling
Create modules with named and default exports, handling circular dependencies
Implement WeakMap and WeakSet for memory-efficient object associations

Regular Expressions & String Manipulation

Create a email validator using regex that handles complex email formats
Implement a password strength checker with multiple criteria validation
Build a text parser that extracts URLs, mentions, and hashtags from social media posts
Create a string formatter that replaces placeholders with values (Hello {name})
Implement a slug generator that converts titles to URL-friendly strings
Build a syntax highlighter that uses regex to identify code patterns
Create a CSV parser that handles quoted fields and escaped characters
Implement a template engine that processes conditional statements and loops
Build a markdown to HTML converter for basic markdown syntax
Create a search and replace function with support for regex patterns and callbacks

Data Structures & Algorithms

Implement a binary search algorithm for sorted arrays with performance optimization
Create a linked list data structure with insert, delete, and search methods
Build a stack implementation using arrays with push, pop, and peek operations
Implement a queue with enqueue, dequeue operations and size tracking
Create a hash table with collision handling using chaining or open addressing
Build a binary tree with insertion, deletion, and traversal methods
Implement a graph data structure with breadth-first and depth-first search
Create a heap implementation for priority queue functionality
Build a trie data structure for efficient string searching and autocomplete
Implement sorting algorithms (quicksort, mergesort) with performance comparisons

Performance & Optimization

Implement lazy loading for images that loads them only when they enter viewport
Create a virtual scrolling system for large lists to improve rendering performance
Build a caching system with LRU (Least Recently Used) eviction policy
Implement request deduplication to prevent multiple identical API calls
Create a web worker implementation for CPU-intensive calculations
Build a resource preloader that optimally loads assets based on priority
Implement code splitting with dynamic imports for better initial load times
Create a performance monitor that tracks and reports page metrics
Build a memory leak detector that identifies objects not being garbage collected
Implement a service worker for offline functionality and background sync

Bonus Challenge Questions
Each question above can be enhanced with these additional challenges:

Add TypeScript: Convert solutions to use proper type definitions
Error Boundaries: Implement comprehensive error handling with graceful degradation
Testing: Write unit tests using Jest or similar testing frameworks
Documentation: Add JSDoc comments explaining function parameters and return values
Browser Compatibility: Ensure solutions work across different browsers and versions
Accessibility: Make interactive elements keyboard navigable and screen reader friendly
Security: Validate inputs and prevent common vulnerabilities (XSS, injection attacks)
Internationalization: Support multiple languages and locales where applicable
Mobile Optimization: Ensure solutions work well on touch devices
Performance Metrics: Measure and optimize execution time and memory usage

Progressive Difficulty Approach
Beginner (Questions 1-25): Focus on basic DOM manipulation and simple array operations
Intermediate (Questions 26-60): Introduce complex data handling and asynchronous concepts
Advanced (Questions 61-85): Modern JavaScript features and algorithm implementation
Expert (Questions 86-100): Performance optimization and complex system design
Implementation Tips

Start Small: Begin with a basic working version, then add features incrementally
Test Edge Cases: Consider empty inputs, null values, and boundary conditions
Think User Experience: Add loading states, error messages, and intuitive interfaces
Code Quality: Use meaningful variable names, consistent formatting, and modular design
Documentation: Comment complex logic and provide usage examples
Performance: Profile your solutions and optimize bottlenecks
Reusability: Write functions and classes that can be easily reused in different contexts
