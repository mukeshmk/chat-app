# Chat Application

A secure Chat Applications in MERN stack.

## Tech used:

- JWT used to create access tokens for an application.
- MongoDB for the Databases.
- React (react.js) for the UI web framework.
- Material-UI for styling the components.
- socket.io for chatting.- babel for transcompilling.
- webpack as a static module bundler.

For other dependencies check [package.json](package.json)

## What is it?:

A secure chat application where the messages of the users are not stored in any databases.
It is a secure onetime chat application where the users can connect with each other chat and leave, 
without being worried about where their messages will be stored and who will have access to it.

## Build:

This is a stand alone application build with react and node.js. 
Here, both the front end and back end code are in the same repository instead of being seperate.

    To run:
    - clone the repo using this link: https://github.com/mukeshmk/chat-app.git.    
    - install the dependencies using 'npm install'.    
    - open a terminal and run 'npm start'.

This will start the server in port `8080` on your `localhost` and you can use the application.

In case there are new changes to the UI:
    
    Updating UI:
    - open terminal and start server using 'npm start'.
    - open another terminal and run 'npm run dev'.

The command `npm run dev` starts the webpack-cli and updates the `bundle.js` file.
The changes are then redeployed on the server and then the UI is updated.
