## Bloc Frontend Project Starter

A starter application for student projects in Bloc's [Frontend Web Development Course](https://www.bloc.io/frontend-development-bootcamp).

## Pull Down the Code

Start by cloning the repository:

```
$ git clone https://github.com/Bloc/bloc-frontend-project-starter.git <your-frontend-project-name>
```

## Reset Git

This will be your personal project. So all of the past commit history that we used to build this starter app aren't needed. Also you will want to be able to push/pull code from your personal remote (Github) repository and NOT Bloc's remote (Github) repository.

Remove the existing local Git repository:

```
$ rm -r -f .git
```

Initialize a new Git repository, add all of these existing files, and commit them:

```
$ git init
$ git add .
$ git commit -m "initial commit"
```

Go to Github and create a new repository. Add that new repository as the proper remote. Then push your initial commit.

```
$ git remote add origin <URL TO NEW GITHUB REPO>
$ git push origin master
```

## Configuration

The project uses Node to run a JS server in development. This will be important when we want to use urls /album or /collection instead of the basic album.html or collection.html. It may  help to review [our resource on NPM and `package.json` files](https://www.bloc.io/resources/npm-and-package-json).

Install the project dependencies by running:

```
$ npm install
```

## Run the Application

Run the application server:

```
$ npm start
```

The server will start up. To stop the server, press `cntrl + c`.


## Directory Structure

```
├── LICENSE
├── README.md
├── app
│   ├── assets
│   │   └── images
│   │       └── bloc-logo-white.png
│   ├── pages
│   │   └── index.html
│   ├── scripts
│   │   └── app.js
│   ├── styles
│   │   └── style.css
│   └── templates
│       └── home.html
├── package.json
└── server.js
```

## Taskitoff

### Introduction
Taskitoff uses the Firebase API and AngularJS to create tasks with an expiration date.

### Tools
Firebase, Atom text editor

### Description:
Instantiate the Firebase service with the new operator. You can do this in your controller, or abstract it into an additional service or factory that handles all of your model's data management, Firebase or otherwise.

Firebase has a service called $firebaseArray() that can be used to sync a Firebase database with an Angular model like an array of tasks. Set the $scope array holding your tasks to a Firebase object that calls $firebaseArray().

### Test your code
Generate and save tasks. Verify that they appear on Firebase's dashboard.

## View Active Tasks
As a user, I want to see my active tasks in a list as my default view

## Configure ui-router
Set up ui-router and define a home or index state. Associate the state with a template that holds the view of the list, and add a controller either as an option on the ui-router state or as an attribute-based directive on the HTML element that contains the view.

Use ngRepeat to iterate over your array of tasks and create an element for each.

### Test your code
Generate some tasks. Verify that each task appears in the active tasks list.

## Hide Old Tasks
As a user, I want completed tasks and tasks older than seven days hidden from my main task views automatically.

I used Directives within the controller to hide old tasks.

### Test Your Code on localhost3000
1. I generate a variety of tasks, some older than seven days. Verified that tasks older than seven days do not appear in my active tasks list.
1. Generated a variety of tasks, some completed, some otherwise. Verified that completed tasks do not appear in my active tasks list.

## View Past Tasks
As a user, I want expired and completed tasks presented in a separate view.

Create a separate state, template, controller and register them with your ui-router-driven routes. Add a link at the top of your default view that has a ui-sref pointing to the state of your expired and completed tasks.

It's not imperative that you distinguish between expired and completed. You can create a single, separate view that has all past tasks.

### Test Your Code
1. Generate tasks both older than seven days and completed.
1. Verify these tasks do not appear in the main view.
1. Verify these tasks appear in your task history view.

## Create New Tasks
As a user, I want to submit new tasks with a description, priority level and three states: expired, completed or active.

To put the input for submitting my new tasks, create an input with an ngModel tied to a  $scope model at the top of the list. Allow the user to save the task by clicking a button or link. By default, create all tasks with the active state.

### Allow Priority Selection
How should I choose a priority level when I create the task?

Distinguish tasks as "high", "medium", or "low" priority. Use a <select> dropdown to hold all of the priority levels and choose one before submitting the task. However, it is not imperative that you determine priority while creating the task. You could, for example, automatically push new tasks to the end of the array and use up and down arrows to determine the importance of each task.

### Save Tasks to Firebase
Create a $scope method to pass into an ngClick in your HTML. The $scope method must call the $add() method on the array to sync the task with Firebase.

## Refresh the List
How can I update my list of tasks on save?*  There's no need. When you set the task array equal to a Firebase object instance with a $firebaseArray() call, your data will automatically keep up with your changes.

### Test Your Code
1. Create tasks with your field.
1. Verify that tasks are automatically inserted into your active tasks list.
1. Verify that tasks are organized by priority.
1. Verify that tasks are synced to Firebase.

## Mark Tasks Complete

As a user, I want to mark tasks as complete.

### Add a Button
How can I use Angular events to toggle the task's state from active to complete?*

Add a button or link inline with your task item. Include the trigger within the ngRepeat block so it will be scoped to the clicked item.

How can I update the backend to register task completion?*

Write a directive specifically for handling the state change from active to complete. You will need to inject the Firebase service into the directive's definition (in the same way you did with the controller or service) so that the directive can signal to Firebase that the state of the task has changed. Attach a callback to a click event that communicates with Firebase when the user completes a task.

Firebase should register it in your database and sync it to the frontend using the  $save() method, which updates the object. When the state has changed, the task should disappear from your active list and appear in your task history.

### Test Your Code
1. Create several tasks and invoke their completion action.
1. Verify that the tasks are marked as complete.
1. Verify that the tasks disappear from the active tasks list.
1. Verify that the tasks appear in your task history.
1. Verify that each task's completion state is synchronized with Firebase.

