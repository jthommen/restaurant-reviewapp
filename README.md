# RestaurantReviewapp

Stage 1 for the Mobile Web Specialist Nanodegree

Prerequisites (versions I run it with):
1. NodeJS v.8.9.0
2. NPM @5.6.0
3. Angular CLI@1.6.7
4. http-server@0.11.1

To run the project:
1. Clone the gitrepo with `git clone https://github.com/jthommen/restaurant-reviewapp`
2. Change to repo directory with `cd restaurant-reviewapp``
3. Install NPM packages `npm i`
4. Run API Server with `npm run api-server`, if port is occupied, remove service and try again.
5. In a different command line tab build angular app with `ng build --prod`
6. Open different command line tab and run local webserver with `http-server ./dist -p 8080 -P http://localhost:8090 -c-1`
7. Open your browser in an incognito window and check out app in your webbrowser at `localhost:8080`
