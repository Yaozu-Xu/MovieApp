# Assignment 1 - ReactJS app.

Name: YaoZu Xu

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - login and signup by using firebase-auth
 + Feature 2 - save and unsave favourite star by using firebase-store
 + Feature 3 - view popular stars ranked by their popularity
 + Feature 4 - view the detail of each star
 + Feature 5 - mark top 20 hot movies

## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

I use @cypress/instrument-cra to get code coverage in cypress. This package has some tricky bugs that react-scripts may can't detect this package occasionally. It may happens that when npm start, it has an errow of app isn't instrumented. When this case happens, reinstall it npm i --save-dev @cypress/instrument-cra

## API Data Model.

+ https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page} - get popular movie stars
+ https://api.themoviedb.org/3/person/{person_id} - get specific person
+ https://api.themoviedb.org/3/trending/movie/ - get trending movies

## App Design.

### Component catalogue (If required).

### UI Design.

![][login]
>  Login Pages provides form validation

![][signup]
> Click the reigister now link in login page to naviagate to SignUp pages

![][trending]
> Add a hot icon on the top 20 ranked hot movies

![][star1]
> Click the star section from header to naviagte to star page, displaying stars ranked by popluarity. Login users can save and unsave their favourite stars by clicking the red heart.

![][star2]
> Display the pagination of the star page

![][star-detail-1]
> Click the poster in the star page to navigate to star-detail page, displaying the detail of the star by using a carousel.

![][favorite]
> Add a floating button to toggle the drawer of saved stars

![][saved-star]
> The drawer that plays the saved stars, the icon of star links to the star-detail page

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (private) - displays the user's favorite movies selection, only login user can access to it.
+ /stars/:page (public) - displays the poplular people ranked by using pagination
+ /people/:id (public) - displays the details of the person
+ /login (public) - user login page
+ /signup (public) - user signup page

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][login]
>  The reigister now hyperlinks to signup page

![][star1]
![][star2]
> The right float button hyperlinks to next page by changing the route params
> The bule text is movie title that links to the movie detail page
> The poster links to the star detail page

![][star-detail-1]
> The left and right arrow hyperlinks to previous and next page

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

[1] firebase-auth
    for authentication
    source code: ../src/components/firebase

[2] firebase-store
    source code ../src/components/firebase
    restore user data in a document database

    i encapsulate the firebase-service as a class and inject the instance into the App

    reference: https://firebase.google.com/docs

[3] Ant-design
    a react ui framework that includes customized react-hooks and components
    reference: https://ant.design/

[4] sass
    a package to compile css into extension css language
    souce code: file with .scss extension
    reference: https://sass-lang.com/

[5] redux
    use redux to sharing data in a sibing way
    source: /src/store
    reference: https://react-redux.js.org/introduction/quick-start

[6] localstorage
    use localstorage to seesion user


---------------------------------

# Assignment 1 - Agile Software Practice.

Name: YaoZu Xu

## App Features.

[Document each new feature/page in your Movies Fan app, including: Feature Name; Its objective/purpose; The associated test file; a screenshot of its UI.]
e,g,
 
+ Movie star page - Shows the top ranked movie stars and their works

Tests: cypress/integration/starPage.spec.js 

![][star1]

+ Login Page

Tests: cypress/integration/login-page.spec.js 

![][login]

+ FavoriteMovie Page - Shows the saved star using a drawer
Tests: cypress/integration/login-page.spec.js

![][favorite]

+ StarDetail page - Shows the detail of the star
Tests: cypress/integration/starDetail-page.spec.js

![][star-detail-1]

## Testing.

Cypress Dashboard URL: ... your project's dashboard URL .....

### Advanced Testing (If required).

[State briefly each instances of boundary and/or error/exceptional test case in your project]
e.g.

+ cypress/integration/starPage.spec.js - test the layout of elements
+ __test__/api - use jest and mock data to test api response, including the exceptions

## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)

List reference material links (articles/blogs).

[1] eslint
    use airbnb rule to linting code

[2] jest
    use jest for unit tests and api tests
    source: ./__test__

[3] code coverge for cypress 
    source: all the configure files. In package.json, rewrite the build and start command to instrument code. in ./cypress/ configures the code coverage plugin. There are some other clues to configure it, but the files are include .gitignore.

    reference: https://www.npmjs.com/package/@cypress/code-coverage
    https://github.com/cypress-io/instrument-cra

[4] third party cypress plugin 
    cypress-layout-inspector: a package to test dom elements positions
    cypress-firebase: a package to test firebase
    source: ./cyress/plugins and ./cypress/support

[5] customized cypress commands
    add a command to select marked dom elemnets for testing. like data-test
    source: ./cypress/support

---------------------------------
[login]: ./public/screenshots/login.png
[favorite]: ./public/screenshots/favorite.png
[saved-star]: ./public/screenshots/saved-star.png
[signup]: ./public/screenshots/signup.png
[star-detail-1]: ./public/screenshots/star-detail-1.png
[star-detail-2]: ./public/screenshots/star-detail-2.png
[star1]: ./public/screenshots/star2.png
[star2]: ./public/screenshots/star1.png
[trending]: ./public/screenshots/trending.png