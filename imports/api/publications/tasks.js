import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../collections/Tasks';

Meteor.publish('tasks', function publishTasks(){
  return TasksCollection.find({ userId: this.userId });
});
