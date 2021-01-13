# Pangaea Backend Takehome
Its been a great priviledge for attempting this challenge and learning better/different ways of creating HTTP Push Notification System.

# My Solution
Desciption
Being faced with this task,I queried many tools online to find a suitable way to achieve the expected result, firebase was the first on my mind since the flow and topic concept of the challenge and that of firebase are the same. For Some technical reasons i abandoned firebase and used Web-Push, Since it works with url/endpoint which is inline with the test requirement. 

# For Create a subscription Route

The Job starts from the backend, where i created my Vapid keys (Public and secret), after which i went to the frontend part of the app, fixed up the service worker and others. Then i called the backend with a specific topic and an endpoint to subscribe to that topic. When that is called, the backend receives the topic and saves the endpoint and the topic to a postgres database, so it is associated to that topic. 
We finally send the url and the topic as a successful response


# For Publish message to topic Route

The event is triggered from the client side, where we call the backend endpoint with the topic in the params and title, message in the body. Then the backend loops over on database searching for all endpoints with the specific topic and gives them over to a for loop Javascript method. This function takes each endpoint, with informations in the payload and with help of Web-push, send Http Notification to all endpoints subscribed to the topic. 
Finally we respond with a succssfull message.

# Conclusion 
Thank you for the priviledge of participating in this Test.
