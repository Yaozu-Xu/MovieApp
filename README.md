# Assignment 1 - ReactJS app.

Name: YaoZu Xu

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - login and signup by using firebase-auth
 + Feature 2 - save favourite star by using firebase-store
 + Feature 3 - view popular stars ranked by their popularity
 + Feature 4 - view the detail of each star
 + etc

## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

I use @cypress/instrument-cra to get code coverage in cypress. This package has some tricky bugs that react-scripts may can't detect this package occasionally. It may happens that when npm start, it has an errow of app isn't instrumented. When this case happens, reinstall it npm i --save-dev @cypress/instrument-cra

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page} - get popular movie stars
+ https://api.themoviedb.org/3/person/{person_id} - get specific person
+ .......

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (private) - displays the user's favorite movies selection, only login user can access to it.
+ /stars/:page (public) - displays the poplular people ranked by using pagination
+ /people/:id (public) - displays the details of the person
+ /login (public) - user login page
+ /signup (public) - user signup page

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png