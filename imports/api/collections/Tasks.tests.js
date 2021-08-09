import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import Tasks from './Tasks.js';

if(Meteor.isServer){
	describe('Task collection', () => {
		it('insert correctly', () => {
			const taskId = Tasks.insert({
				text: 'ABC'
			});
			const added = Tasks.find({ _id: linkId });
			const collectionName = added._getCollectionName();
			const count= Tasks.count();

			assert.equal(collectionName, 'tasks');
			assert.equal(count, 1);
		});
	});
}
