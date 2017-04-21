/*
 * Created by Thomas Hartmann
 * Actions for user bookings
 */

import {
	database
} from '../../../firebase/firebase'

const bookAvailableDate = (date) => {
	const ref = database.ref('appointments')

	ref.on('child_Added', snapshot => {
		if (appointments.date === false) {
			const post = ref.push()
			ref.set({
				date
			})
		}
	})
}