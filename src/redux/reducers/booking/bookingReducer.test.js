/* global it, expect */

/*
 * Created by Thomas Hartmann
 * Test file for booking reducer
 */

// TODO: fill in
import {
	database
} from '../../../firebase/firebase'

it('should pass an arbitrary test', () => {
	const ref = database.ref('appointments')

	ref.on('child_added', snapshot => {
			console.log(snapshot.val())
		})
		//done()
})

it('should pass an arbitrary test', (done) => {
	const date = "2017_04_23"

	const ref = database.ref('appointments')

	ref.on('child_added', snapshot => {
		if (snapshot.val().date !== date) {
			const post = ref.push()
			ref.set({
				date
			})
			console.log($(date.val()) + "has been booked.")
		}
		else {
			console.log("The selected date is not available.")
		}
	})
})