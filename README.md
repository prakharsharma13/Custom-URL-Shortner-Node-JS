CREATE A CUSTOM URL SHORTNER USING NODE JS

Design a URL shortner that takes in a valid URL and rreturns  a shortened URL, redirecting the user to the previously provided URL

Also keep track of total visits/clicksss on the URL

Routes:- 

POST /URL - Generates a new short URL and returns the shortened URL in the format example.com/random-id

GET /:id - Redirects the user to the original URL

GET /URL/analytics/:id - Returns the clicks for the provided short id
