import { Meteor } from 'meteor/meteor';
import { TasksCollection } from './collections/Tasks.js';
import { Accounts } from 'meteor/accounts-base';

const SEED_USERNAME='meteorite';
const SEED_PASSWORD='password';

const insertTask= (taskText, user) => {
  // console.log('task text: '+taskText)
  TasksCollection.insert({ 
    text: taskText,
    userId: user._id,
    createdAt: new Date() 
  });
}

Meteor.startup(() => {
  if(!Accounts.findUserByUsername(SEED_USERNAME)){
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD
    });
  }

  const user= Accounts.findUserByUsername(SEED_USERNAME);

  if (TasksCollection.find().count() === 0) {
    [
      '1st Task',
      '2nd Task',
      '3rd Task',
      '4th Task',
      '5th Task',
      '6th Task',
      '7th Task'
    ].forEach(taskText => insertTask(taskText, user));
    
  }
});
