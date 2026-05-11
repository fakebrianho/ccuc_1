export const events = [
	{
		id: 1,
		title: 'Joint Prayer Night',
		subtitle: '聯合禱告夜',
		date: '2026-05-15',
		time: '7:00 PM',
		site: 'all',
		congregation: 'all',
		location: 'CCUC Chinatown — 2301 S. Wentworth',
		description: 'A church-wide evening of prayer and worship uniting all congregations across every campus.',
		featured: true,
		image: null,
		typeLabel: 'PRAYER',
	},
	{
		id: 2,
		title: 'Youth Worship Night',
		subtitle: '青年敬拜夜',
		date: '2026-05-18',
		time: '7:00 PM',
		site: 'south',
		congregation: 'english',
		location: 'CCUC South — 3000 S. Wallace St.',
		description: 'An evening of worship, prayer, and fellowship for students and young adults.',
		featured: true,
		image: null,
		typeLabel: 'WORSHIP',
	},
	{
		id: 3,
		title: '粵語主日崇拜',
		subtitle: 'Cantonese Sunday Service',
		date: '2026-05-24',
		time: '10:30 AM',
		site: 'chinatown',
		congregation: 'cantonese',
		location: 'CCUC Chinatown — 2301 S. Wentworth',
		description: '每週粵語主日崇拜，歡迎所有信徒及訪客。',
		featured: false,
		image: null,
		typeLabel: 'SERVICE',
	},
	{
		id: 4,
		title: 'Neighborhood Outreach',
		subtitle: '社區外展',
		date: '2026-05-24',
		time: '9:00 AM',
		site: 'south',
		congregation: 'all',
		location: 'CCUC South — 3000 S. Wallace St.',
		description: 'Serve local families through meal distribution and community support activities.',
		featured: false,
		image: null,
		typeLabel: 'OUTREACH',
	},
	{
		id: 5,
		title: 'Mandarin Bible Study',
		subtitle: '普通話查經班',
		date: '2026-05-27',
		time: '7:30 PM',
		site: 'west',
		congregation: 'mandarin',
		location: 'CCUC West — 1400 Maple Ave',
		description: '深入學習聖經，在信仰上共同成長。',
		featured: false,
		image: null,
		typeLabel: 'STUDY',
	},
	{
		id: 6,
		title: 'Leadership Training',
		subtitle: '領袖培訓',
		date: '2026-06-02',
		time: '6:30 PM',
		site: 'all',
		congregation: 'all',
		location: 'CCUC Chinatown — 2301 S. Wentworth',
		description: 'Practical training for ministry team leaders focused on care and discipleship.',
		featured: false,
		image: null,
		typeLabel: 'TRAINING',
	},
	{
		id: 7,
		title: 'English Sunday Service',
		subtitle: null,
		date: '2026-06-07',
		time: '11:00 AM',
		site: 'chinatown',
		congregation: 'english',
		location: 'CCUC Chinatown — 2301 S. Wentworth',
		description: 'Our weekly English congregation service, open to all.',
		featured: false,
		image: null,
		typeLabel: 'SERVICE',
	},
	{
		id: 8,
		title: 'Summer Church Retreat',
		subtitle: '夏季教會退修會',
		date: '2026-06-20',
		time: 'All Day',
		site: 'all',
		congregation: 'all',
		location: 'Camp Galilee, Wisconsin',
		description: 'An overnight retreat for the whole church family — worship, rest, and renewal together.',
		featured: true,
		image: null,
		typeLabel: 'RETREAT',
	},
	{
		id: 9,
		title: 'West Site Baptism Sunday',
		subtitle: '西堂洗禮主日',
		date: '2026-06-28',
		time: '10:00 AM',
		site: 'west',
		congregation: 'all',
		location: 'CCUC West — 1400 Maple Ave',
		description: 'Celebrating new believers taking the step of baptism at our West campus.',
		featured: false,
		image: null,
		typeLabel: 'BAPTISM',
	},
]

export const SITES = [
	{ value: 'all', label: 'All Sites' },
	{ value: 'chinatown', label: 'Chinatown' },
	{ value: 'south', label: 'South' },
	{ value: 'west', label: 'West' },
]

export const CONGREGATIONS = [
	{ value: 'all', label: 'All' },
	{ value: 'cantonese', label: '粵語 Cantonese' },
	{ value: 'mandarin', label: '普通話 Mandarin' },
	{ value: 'english', label: 'English' },
]

export const TYPE_COLORS = {
	PRAYER:   { bg: 'rgba(120,60,60,0.35)',   border: 'rgba(180,80,80,0.5)',   text: '#e8a0a0' },
	WORSHIP:  { bg: 'rgba(60,80,140,0.35)',   border: 'rgba(90,110,200,0.5)',  text: '#a0b4f0' },
	SERVICE:  { bg: 'rgba(50,100,70,0.35)',   border: 'rgba(70,150,100,0.5)',  text: '#80c8a0' },
	OUTREACH: { bg: 'rgba(130,90,30,0.35)',   border: 'rgba(200,140,50,0.5)',  text: '#e0b870' },
	STUDY:    { bg: 'rgba(70,60,130,0.35)',   border: 'rgba(110,100,190,0.5)', text: '#b0a8e8' },
	TRAINING: { bg: 'rgba(50,90,110,0.35)',   border: 'rgba(70,140,170,0.5)',  text: '#80c0d8' },
	RETREAT:  { bg: 'rgba(100,60,120,0.35)',  border: 'rgba(160,90,190,0.5)',  text: '#d0a0e8' },
	BAPTISM:  { bg: 'rgba(40,100,120,0.35)',  border: 'rgba(60,160,190,0.5)',  text: '#70d0e8' },
}

export const SITE_LABELS = {
	chinatown: 'Chinatown',
	south: 'South',
	west: 'West',
	all: 'All Sites',
}

export const CONG_LABELS = {
	cantonese: '粵語',
	mandarin: '普通話',
	english: 'English',
	all: 'All',
}

export function filterEvents(events, site, congregation) {
	return events.filter((e) => {
		const siteMatch = site === 'all' || e.site === 'all' || e.site === site
		const congMatch = congregation === 'all' || e.congregation === 'all' || e.congregation === congregation
		return siteMatch && congMatch
	})
}

export function groupByMonth(events) {
	const months = {}
	for (const e of events) {
		const d = new Date(e.date + 'T00:00:00')
		const key = d.toLocaleString('en-US', { month: 'long', year: 'numeric' })
		if (!months[key]) months[key] = []
		months[key].push(e)
	}
	return months
}

export function formatDate(dateStr) {
	const d = new Date(dateStr + 'T00:00:00')
	return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}
