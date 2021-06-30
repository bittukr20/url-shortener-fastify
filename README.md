# URL-Shortener Service
This APP is use to generate Shortened URI.
This APP saves the data in Local JSON file src/app/data/urls.json, 
which is getting used to return same short URI for the same URI passed.


Application for better compatibility needs to run with:


### Install Project Dependencies

To be able to run the application properly you need to execute the
following commands:

    $ npm i

### Run Console Commands

In order to run your application service
you can use any of this:

Run Unit Tests:
    $ npm run test:unit

To start service on your local machine you may use
    $ npm run start

To run lint fixing you may use
    $ npm run link:fix

## ENV variables needed to run this APP

- HOST=127.0.0.1
- PORT=8080
- INITIAL_VALUE=10000   
- NODE_ENV=dev

INITIAL_VALUE Will get used as a auto increment ID for short Url generation.