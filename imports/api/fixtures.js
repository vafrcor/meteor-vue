import { Meteor } from 'meteor/meteor';
// import Links from './collections/Links.js';
import { TasksCollection } from './collections/Tasks.js'

const insertTask= (taskText) => {
  // console.log('task text: '+taskText)
  TasksCollection.insert({ text: taskText });
}

Meteor.startup(() => {
  /*  
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }
  */

  if (TasksCollection.find().count() === 0) {
    [
      '1st Task',
      '2nd Task',
      '3rd Task',
      '4th Task',
      '5th Task',
      '6th Task',
      '7th Task'
    ].forEach(insertTask);
    
  }
});
