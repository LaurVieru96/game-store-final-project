# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# SIMPLEX ONLINE GAMES STORE

1.
# PAGES

1.
## Login page

A page that is created for user to register in with Google account. In background we have an .mp4 file that run a section from a first-person shooter videogame with a opacity filter applied to it.

![](RackMultipart20230311-1-nlx0z5_html_e1cbe6134e5b18cc.png) ![](RackMultipart20230311-1-nlx0z5_html_5bf42e502e55f508.png)

On very top of that in the center of screen is visible the logo (SIMPLEX) and down bellow the "SIGN IN WITH GOOGLE" button meant to give you acces to next page.

In this section we used Firebase Authentication with his backend services developed by Google, to create a functionality through which any user who has an active google account can log in to this online store.

1.
## Home page

On this page we have at the top a Navbar that contains a logo on the left, in the middle a Navigation that contains the 4 pages, through which we can pass, and finally the profile picture extracted from the google account.

In the background we have an image with 0.5 opacity that defines several games, and in the center a welcome message ("Hello") + the name of the person logging in. And below a button with which we can log out. (Sign out)

![](RackMultipart20230311-1-nlx0z5_html_ffb4f95cab4c731c.png)

1.
## Store page

Different from the previous page, we have 3 representative buttons in the Navbar in the following: cart, wallet and favorites.

![](RackMultipart20230311-1-nlx0z5_html_ebefa09c1f32dc95.png)

![](RackMultipart20230311-1-nlx0z5_html_c5ca10475706c61.png)

On the left a container in which we can filter the games from the list.

![](RackMultipart20230311-1-nlx0z5_html_94f63295b3393c73.png) and below a small border with social media icons ![](RackMultipart20230311-1-nlx0z5_html_f045e3569e476342.png) .

In the middle of the page, we have a carousel of pictures running in the background, and below cards with the available games.

![](RackMultipart20230311-1-nlx0z5_html_376f5dd95ce016fe.png) ![](RackMultipart20230311-1-nlx0z5_html_e7894d7bd878b958.png) ![](RackMultipart20230311-1-nlx0z5_html_fe4444dac01b395e.png)

On each card we have 2 buttons, on the first Buy Now, we buy it and it automatically goes to the CART section. And the one to add to favorites as well, in the respective section.

![](RackMultipart20230311-1-nlx0z5_html_96f381fd3da2cb8.png)

By clicking on Checkout, we go to the page where we can complete the order.

![](RackMultipart20230311-1-nlx0z5_html_d36e71a633e2dea4.png)

Below all we have the Footer area, with information about the company, payment methods, address, terms and conditions.

![](RackMultipart20230311-1-nlx0z5_html_f2b5852adbf56a30.png)

1.
## Checkout page

![](RackMultipart20230311-1-nlx0z5_html_c5cf69875de03ee.png)

In the checkout area we can see details about each product, quantity, price and details about the order, including the order completion button, "Checkout Now", but also the "Back to shopping" button.

1.
## Streams page

![](RackMultipart20230311-1-nlx0z5_html_b80a2ac95b6a39da.png)

Also called the entertaining area, the Streams page, is dedicated to viewing public gameplays on the Internet.

1.
## Support page

In construction
 ![](RackMultipart20230311-1-nlx0z5_html_dfc84e65cebbff69.png)

1.
# FUNCTIONALITIES

- Sign in with Google. Takes you to the Home page.
- User need and account available to see content from Home page and others.
- Logo – redirect to Home page.
- Sign out button. Redirect to Login page.
- Navigation with 4 buttons. Each button has a route to different pages.
- Filter by Platforms: (PC ,Steam, GOG, etc); Each item from filter, shows you a different games list.
- Buy Now - add the game to the cart;
- Add to Favorites – add the game to favorites;
- Cart button – show in a popup modal a quick view of your cart.
- Checkout button – show entire page with every detail you need.
- Wallet button – show you assets in wallet.
- Favorites button – show each game added to favorites.
- X button – with this button you can delete each item from cart/favorites.
- Pagination ( 1 , 2 , 3 ) – see streams from next page

1.
# BLUEPRINT OF WEBSITE ( HOW TO BUILD )

1.
### Colors

My main used colors for this project.

![](RackMultipart20230311-1-nlx0z5_html_d6a522b5a05fead4.png)

1.
### Logo

![](RackMultipart20230311-1-nlx0z5_html_f603632362150ded.png)

1.
### Drawed project

![](RackMultipart20230311-1-nlx0z5_html_fa80935b781919e.png)
