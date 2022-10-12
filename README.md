### Important setup instructions

After cloning the repository start by running:

```bash
npm install
```

Developer console logs have been left in to view errors without the need for external browser apps.

find below a list of avaliable scripts to run this project

please be aware this website will use data stored on a Heroku back end that will take a moment to turn back online, Heroku will not always be free and the back end points used in this repo will need to be updated.

Working as of 10/10/22:
https://6347050622658d0ce1628f72--resonant-cucurucho-76125f.netlify.app/

Please find below a list of things you can do and a list of avaliable scripts to run.

## Things you can do

### `Homepage`

On the home page you will be greeted by three buttons in a nav bar that will follow you from page to page and a list of categories.

Clicking on a category will take you to a filtered list of reviews by that category.

Clicking users will take you to a list of avaliable users to choose from.

Clicking all reviews will take you to a comprehensive list of reviews.

### `Categories`

Each individual category is using a queried endpoint to allow the user to easily see what reviews they want to see.

This category button is using an api call to categories then using the name of that category as a query peram as a filter to return the correct reviews.

This same tecnique is used in the reviews themselves. Each review you see is brought from a get request, mapped to a button that is displaying it's information and linked using it's id as a frontend endpoint. This allows new reviews to be added and linked automatically.

Following this review link leads you to a page containing the review with more detail about the review in question aswell as comments linking to that review.

### `Comments`

On each individual review by Id there is a list of comments linked by review id. As a user you are able to add a new comment to this review, vote on this review and delete a comment if the comment was posted by your current logged in user.

### `Users`

speaking of users if you navigate to the users endpoint you are able change the current logged in user. By default this user is Tickle122 but can be changed as easily as pressing select user underneath a user profile. This information is passed in state to several components within this app so it can be changed and viewed where it is needed.

### `All reviews`

The all reviews endpoint is where the indepth queries take place. it is possible to string several quieries together to narrow down your search as much as possible. This end point like the others makes use of caching making it possible to read data already on your machine without sending a new get request. The search box is able to search by several different bits of information stored in the reviews and is even able to search by incomplete words.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
