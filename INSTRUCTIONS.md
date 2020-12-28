# API Coding Exercise 1

Create a backend api service in node.js that serves two endpoints for an organization tracker.
We want to provide a set of APIs that will allow us to track and search certain information for an organization.  

Here is a list of required information we want to keep track of:

- Organization Name
- Date organization was started
- Number of employees
- If it’s a Public or Private organization

## Functionality

### Endpoint 1: Create Organization

API: POST /organizations
Allow an organization to be added to the database with the details listed above

### Endpoint 2: Search organization

API: GET /organizations
Return results from the tracker for all organizations that match the search criteria
You should be able to search by any of the information listed above

## What do we expect?

- Clean and performant code
- APIs function without errors or warnings.
- Any documentation or comments you think are important
- Database schema (please use database of your choice)
- At least one test per endpoint
- A README for your repository including setup/installation instructions

You should only spend 1-2 hours on this exercise.

Please send us your final code, including project files and any scripts in a zip file and sent via email.  Also, please host your project on Heroku, or similar service, for us to test out your APIs.