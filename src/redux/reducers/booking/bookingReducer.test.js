/* global it, expect */

/*
 * Created by Thomas Hartmann
 * Test file for booking reducer
 */

// TODO: fill in
import {
	database
} from '../../../firebase/firebase'

it('should pass an arbitrary test', (done) => {
	const ref = database.ref('appointments')

	ref.on('child_added', snapshot => {
			console.log(snapshot.val())
		})
		//done()
})