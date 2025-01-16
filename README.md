# Firebase Database Reference Accessed Before Connection

This repository demonstrates a common error in Firebase applications: accessing a database reference before the Firebase connection is established.  This often leads to unexpected behavior or errors.  The solution demonstrates how to ensure Firebase is initialized before attempting database operations.

## Bug

The `bug.js` file shows an example where a database reference is accessed immediately, resulting in potential errors. 

## Solution

The `bugSolution.js` file presents the solution, correctly using the `initializeApp` function and waiting for the initialization to complete before interacting with the database. 
