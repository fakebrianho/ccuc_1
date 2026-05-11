import WorshipService from './WorshipService'
import PrayerMeeting from './PrayerMeeting'
import Fellowships from './Fellowships'
import YouthMinistries from './YouthMinistries'

export default function SouthContent() {
	return (
		<div>
			<WorshipService />
			<PrayerMeeting />
			<Fellowships />
			<YouthMinistries />
		</div>
	)
}
