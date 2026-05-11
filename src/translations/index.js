export const t = {
	en: {
		nav: {
			aboutUs: 'About Us',
			churches: 'Churches',
			events: 'Events',
			giving: 'Giving',
			toggleLabel: '中文',
		},
		heroFooter: {
			heading: 'Welcome to CCUC',
			subheading: 'A place to grow in faith & community',
			cta: 'Plan Your Visit',
		},
		verse: '"I have come that they may have life, and have it to the full." John 10:10',
		locations: {
			heading: 'Join Us Sunday',
			subheading:
				'Online or at any of our various locations across Illinois',
			viewLocation: 'View Location',
		},
		events: {
			intro: "What's Happening?",
			upcoming: 'Upcoming',
			events: 'Events',
			subheading:
				"From worship nights to outreach projects, there's always something to be a part of.",
			viewAll: 'VIEW ALL EVENTS',
			list: [
				{
					month: 'MAY',
					day: '18',
					title: 'Youth Worship Night',
					description:
						'An evening of worship, prayer, and fellowship for students and young adults.',
					typeLabel: 'WORSHIP',
					typeClass: 'typeWorship',
				},
				{
					month: 'MAY',
					day: '24',
					title: 'Neighborhood Outreach',
					description:
						'Serve local families through meal distribution and community support activities.',
					typeLabel: 'OUTREACH',
					typeClass: 'typeOutreach',
				},
				{
					month: 'JUN',
					day: '02',
					title: 'Leadership Training',
					description:
						'Practical training for team leaders focused on ministry care and discipleship.',
					typeLabel: 'TRAINING',
					typeClass: 'typeTraining',
				},
			],
		},
		plan: {
			tagline: 'PLAN YOUR VISIT',
			header1: 'Come as ',
			header2: 'you are',
			content:
				"Whether you're exploring your faith for the first time or looking for a new church home, we'd love to welcome you this Sunday.",
			planButton: 'PLAN YOUR VISIT',
			contactButton: 'CONTACT US',
		},
		footer: {
			sections: [
				{
					title: 'About',
					links: [
						{ label: 'History', href: '/history' },
						{ label: 'Vision', href: '/about/mission' },
						{ label: 'Faith', href: '/about/leadership' },
						{ label: 'Leadership', href: '/about/leadership' },
						{ label: 'Missions', href: '/about/leadership' },
					],
				},
				{
					title: 'Locations',
					links: [
						{ label: 'Chinatown', href: '/locations/chinatown' },
						{ label: 'South', href: '/locations/quincy' },
						{ label: 'West', href: '/locations/newton' },
					],
				},
				{
					title: 'Social',
					links: [
						{ label: 'Instagram', href: 'https://instagram.com' },
						{ label: 'Facebook', href: 'https://facebook.com' },
						{ label: 'YouTube', href: 'https://youtube.com' },
					],
				},
				{
					title: 'More',
					links: [
						{
							label: 'Giving',
							href: 'https://ccuc.churchcenter.com/Giving',
						},
						{ label: 'Plan a Visit', href: '/giving' },
						{ label: 'Get Baptized', href: '/contact' },
					],
				},
			],
		},
		eventsPage: {
			eyebrow: 'Events',
			heading: "What's Happening",
			filterSite: 'Site',
			filterCongregation: 'Congregation',
			featured: 'Featured',
			empty: 'No events match this filter.',
			eventCount: (n) => `${n} event${n !== 1 ? 's' : ''}`,
			sites: [
				{ value: 'all', label: 'All Sites' },
				{ value: 'chinatown', label: 'Chinatown' },
				{ value: 'south', label: 'South' },
				{ value: 'west', label: 'West' },
			],
			congregations: [
				{ value: 'all', label: 'All' },
				{ value: 'cantonese', label: '粵語 Cantonese' },
				{ value: 'mandarin', label: '普通話 Mandarin' },
				{ value: 'english', label: 'English' },
			],
			siteLabels: { all: 'All Sites', chinatown: 'Chinatown', south: 'South', west: 'West' },
			congLabels: { all: 'All', cantonese: '粵語', mandarin: '普通話', english: 'English' },
		},
		churchesQuote: {
			lines: [
				'Many languages, One Voice',
				'Many generations, One Identity',
				'Many places, One Home',
			],
			end: 'One Church Serving Christ',
		},
		about: {
			eyebrow: 'About Us',
			heading: 'A church for the city',
			carouselTaglines: [
				'A church for the city',
				'Rooted in Chinatown since 1900',
				'Faith, action, and purpose',
				'Everyone is welcome here',
			],
			whoWeAre: {
				question: 'Who We Are',
				answer: `Chinese Christian Union Church (CCUC) is a multi-generational church rooted in Chicago's Chinatown. Founded over a century ago, we exist to worship God, build community, and serve our neighbors across racial and cultural lines.`,
			},
			ourLocations: {
				question: 'Our Locations',
				answer: 'CCUC gathers across three campuses in the greater Chicago area — Chinatown, South, and West — each reflecting the unique community it serves while sharing one vision and family.',
			},
			getInvolved: {
				question: 'Get Involved',
				answer: `There are many ways to plug in — join a small group, serve on a ministry team, or simply show up on a Sunday. Reach out to any of our campuses and we'd love to connect you.`,
			},
			ourCommitments: { question: 'Our Commitments' },
			ourBeliefs: { question: 'Our Beliefs' },
		},
		churches: {
			tabs: {
				chinatown: 'Chinatown',
				south: 'South',
				west: 'West',
			},
			chinatown: {
				worship: {
					heading: 'Worship Service',
					detail_1: 'We meet ',
					detail_bold1: 'in person and online',
					detail_2: ' every Sunday at ',
					detail_bold2: '9:45 AM',
					detail_3: '.',
					englishLabel: 'English Congregation',
					bulletin: 'Sunday Service Bulletin',
					livestream: 'Watch Livestream',
					chineseLabel: 'Cantonese Congregation',
					chineseSubheading: 'Sunday Service',
					chineseDetail: 'CCUC Sanctuary at 11:45 AM',
					chineseBulletin: 'Weekly Sunday Bulletin',
					mandarinLabel: 'Mandarin Congregation',
					mandarinSubheading: 'Sunday Service',
					mandarinDetail_1: 'In person',
					mandarinDetail_bold1: ' (3rd Floor Pui Tak Center)',
					mandarinDetail_2: ' and ',
					mandarinDetail_bold2: 'online',
					mandarinDetail_3: ' at ',
					mandarinDetail_bold3: '9:45 AM',
					mandarinDetail_4: '.',
					mandarinBulletin: 'Sunday Service Bulletin',
					mandarinLivestream: 'Watch the Livestream',
				},
				prayer: {
					heading: 'Prayer Meeting',
					englishLabel: 'English Congregation',
					detail_1: 'Every ',
					detail_bold1: 'Wednesday',
					detail_2: ' on the ',
					detail_bold2: '2nd Floor, Impact',
					detail_3: ' from ',
					detail_bold3: '7:00 PM – 8:15 PM',
					detail_4: '.',
					bulletinLink: 'Weekly Prayer Bulletin',
					guideLink: 'Wednesday Prayer Guide',
					remoteLink: 'Instructions for Joining Remotely',
					zoomLink: 'Join Prayer Fellowship on Zoom',
					cantoneseLabel: 'Cantonese Congregation',
					cantoneseSubheading: 'Prayer Fellowship',
					cantoneseDetail_1: 'Every Wednesday ',
					cantoneseDetail_bold1: 'in person',
					cantoneseDetail_2: ' (1st Floor Impact Center) and ',
					cantoneseDetail_bold2: 'online',
					cantoneseDetail_3: ' at ',
					cantoneseDetail_bold3: '7:00 PM – 8:15 PM',
					cantoneseDetail_4: '.',
					cantoneseBody:
						'Prayer is vital for developing a life of faith, deepening our understanding and love for God, and for seeking to know His will.',
					cantoneseBulletin: 'Weekly Prayer Bulletin',
					cantoneseZoom: 'Zoom Link (7:00 PM)',
					mandarinLabel: 'Mandarin Congregation',
					mandarinDetail:
						'Online only · Every Wednesday · 7:00 PM – 8:15 PM',
					mandarinBody:
						'Prayer is vital for developing a life of faith, deepening our understanding and love for God, and for seeking to know His will.',
					mandarinContact: 'Contact Ming Lee for details',
					mandarinContactEmail: 'ming.lee@ccuc.net',
					mandarinBulletin: 'Weekly Prayer Bulletin',
				},
				fellowships: {
					heading: 'Fellowships',
					subheading: 'A place for everyone.',
					body: 'We strive to be a place where people of any background and life stage can connect, grow, and be challenged with those around them. For more information about any of our groups, please contact us.',
					englishLabel: 'English Congregation',
					items: [
						{
							question: 'Horizon',
							answer: 'College or Age 22–29 · Sundays at 11:30 AM · Impact Center 2nd Floor',
						},
						{
							question: 'Hosanna',
							answer: 'Age 30–49 · Sundays at 11:30 AM · CCUC Fellowship Hall',
						},
						{
							question: 'Titus',
							answer: 'Age 50+ · Sundays at 11:30 AM · Impact Center 1st Floor',
						},
					],
					cantoneseLabel: 'Cantonese Congregation',
					cantoneseItems: [
						{
							question: 'Canaan',
							answer: 'College · Fridays at 7:30 PM · Pui Tak Center 1st Fl.',
						},
						{
							question: 'Sitos',
							answer: 'Young Adult · Sundays at 1:30 PM · CCUC Basement',
						},
						{
							question: 'Josiah',
							answer: '2nd & 4th Saturdays at 5:30 PM · CCUC Fellowship Hall',
						},
						{
							question: 'Grace',
							answer: '2nd & 4th Saturdays at 6:00 PM · CCUC Basement',
						},
						{
							question: 'Joshua',
							answer: '3rd Sundays at 2:30 PM · Impact Center 1st Fl.',
						},
						{
							question: 'Esther',
							answer: 'Women · 2nd Saturdays at 11:00 AM · Impact Center 1st Fl.',
						},
						{
							question: 'Harmony',
							answer: '2nd Sundays at 1:00 PM · Impact Center 1st Fl.',
						},
					],
				},
				youth: {
					heading: 'Youth Ministries',
					englishLabel: 'English Congregation',
					items: [
						{
							question: 'Young Teen Fellowship (YTF)',
							answer: 'Grades 6–8 · Fridays at 7:30 PM & Sundays at 11:30 AM · Chinese Christian Union Church',
						},
						{
							question: 'Kingdom Seekers',
							answer: 'Grades 9–12 · Fridays at 7:30 PM & Sundays at 11:30 AM · Chinese Christian Union Church',
						},
					],
					cantoneseLabel: 'Cantonese Congregation',
					cantoneseItems: [
						{
							question: 'Jireh',
							answer: 'High School · Fridays at 7:30 PM · Impact Center 1st Floor',
						},
						{
							question: 'Nissi',
							answer: 'Grades 3–8 · Fridays at 7:00 PM · Chinese Christian Union Church Basement',
						},
					],
				},
			},
			south: {
				youth: {
					heading: 'Youth Ministries',
					items: [
						{ question: 'Junior High', answer: 'Grades 6–8 · Fridays at 3:00 PM' },
						{ question: 'Joseph', answer: 'High School · Fridays at 7:30 PM · joseph@ccuc.net' },
						{ question: 'FHL Youth Worship', answer: 'Grade 6 and above · Sundays at 11:45 AM' },
						{ question: 'Youth Sunday School', answer: 'Grade 6 and above · Sundays at 10:15 AM' },
						{ question: "Children's Worship", answer: 'Grades 1–5 · Sundays at 11:30 AM' },
						{ question: "Children's Sunday School", answer: 'Grades 1–5 · Sundays at 11:30 AM' },
						{ question: "Young Kids' Sunday School", answer: 'Preschool to Kindergarten · Sundays at 11:30 AM' },
						{ question: "Young Kids' Sunday Worship", answer: 'Preschool to Kindergarten · Sundays at 11:30 AM' },
					],
				},
				fellowships: {
					heading: 'Fellowships',
					cantoneseLabel: 'Cantonese Congregation',
					cantoneseItems: [
						{ question: 'Joel', answer: 'College · Fridays at 7:30 PM · joel@ccuc.net' },
						{ question: 'Daniel', answer: 'Young Adults · Saturdays at 5:30 PM · daniel@ccuc.net' },
						{ question: 'Emmanuel', answer: 'Family · 2nd Saturdays at 4:00 PM · emmanuel@ccuc.net' },
						{ question: 'Ruth', answer: 'Sisters · 4th Saturdays at 3:00 PM · ruth@ccuc.net' },
						{ question: 'Song of Songs', answer: 'Couples · 1st, 3rd & 5th Saturdays at 8:00 PM · songofsongs@ccuc.net' },
					],
					mandarinLabel: 'Mandarin Congregation',
					mandarinItems: [
						{ question: 'Mandarin Small Group', answer: 'Sundays at 8:00 PM' },
					],
					englishLabel: 'English Congregation',
					englishItems: [
						{ question: 'Y.A.M. (Young Adults Ministry)', answer: '1st & 3rd Wednesdays at 7:15 PM' },
					],
				},
				worship: {
					heading: 'Worship Service',
					schedule: [
						'8:45 AM — Mandarin Worship',
						'11:30 AM — Cantonese Worship',
						'1:00 PM — Online Replay (Mandarin & Cantonese)',
					],
					address: '3000 S Wallace Street',
					tel: '312-225-5564',
					bulletin: 'Sunday Service Bulletin',
					video: 'Sunday Worship Video',
				},
				prayer: {
					heading: 'Prayer Meeting',
					detail: 'Online · Every Wednesday · 7:30 PM',
					zoomId: 'Zoom ID: 353-962-8686',
					zoomPwd: 'Password: 8686',
					body: "For more information about this week's prayer fellowship, please contact us.",
					guide: 'CCUC South Weekly Prayer Guide',
					bulletin: 'Weekly Prayer Bulletin',
				},
			},
			west: {
				fellowships: {
					heading: 'Fellowships',
					items: [
						{ question: 'Joy', answer: 'Elders · Wednesdays at 3:30 PM · west.joy@ccuc.net' },
						{ question: 'Love', answer: 'Adults · Fridays at 7:30 PM · west.love@ccuc.net' },
					],
				},
				worship: {
					heading: 'Worship Service',
					detail_1: 'In person and online every Sunday at ',
					detail_bold1: '9:30 AM',
					detail_2: '.',
					bulletin: 'Sunday Service Bulletin',
					livestream: 'Watch the Livestream',
				},
				prayer: {
					heading: 'Prayer Meeting',
					detail: 'Online · Every Wednesday · 7:30 PM',
					body: 'Contact Min. Sen Xu for additional details.',
					contactEmail: 'sen.xu@ccuc.net',
					bulletin: 'Weekly Prayer Bulletin',
				},
			},
		},
	},
	zh: {
		nav: {
			aboutUs: '关于我们',
			churches: '教会',
			events: '活动',
			giving: '奉献',
			toggleLabel: 'English',
		},
		heroFooter: {
			heading: '欢迎来到CCUC',
			subheading: '在信仰与社区中成长的地方',
			cta: '计划您的拜访',
		},
		verse: '「我来了，是要叫人得生命，并且得的更丰盛。」约翰福音 10:10',
		locations: {
			heading: '周日加入我们',
			subheading: '在线或前往我们遍布伊利诺伊州的各个教会',
			viewLocation: '查看地点',
		},
		events: {
			intro: '最近有什么活动？',
			upcoming: '即将到来',
			events: '活动',
			subheading: '从敬拜夜到外展项目，总有参与的机会。',
			viewAll: '查看所有活动',
			list: [
				{
					month: '五月',
					day: '18',
					title: '青年敬拜夜',
					description: '为学生和年轻人举办的敬拜、祷告与团契之夜。',
					typeLabel: '敬拜',
					typeClass: 'typeWorship',
				},
				{
					month: '五月',
					day: '24',
					title: '社区外展',
					description: '通过食物分发和社区支持活动服务当地家庭。',
					typeLabel: '外展',
					typeClass: 'typeOutreach',
				},
				{
					month: '六月',
					day: '02',
					title: '领袖培训',
					description: '专注于事工关怀与门徒训练的团队领袖实践培训。',
					typeLabel: '培训',
					typeClass: 'typeTraining',
				},
			],
		},
		plan: {
			tagline: '计划您的拜访',
			header1: '就这样',
			header2: '来吧',
			content:
				'无论您是第一次探索信仰，还是在寻找一个新的教会家园，我们都期待在这个主日欢迎您。',
			planButton: '计划您的拜访',
			contactButton: '联系我们',
		},
		eventsPage: {
			eyebrow: '活动',
			heading: '最近有什么？',
			filterSite: '地点',
			filterCongregation: '会众',
			featured: '精选活动',
			empty: '没有符合条件的活动。',
			eventCount: (n) => `${n} 个活动`,
			sites: [
				{ value: 'all', label: '所有地点' },
				{ value: 'chinatown', label: '唐人街' },
				{ value: 'south', label: '南区' },
				{ value: 'west', label: '西区' },
			],
			congregations: [
				{ value: 'all', label: '全部' },
				{ value: 'cantonese', label: '粵語 Cantonese' },
				{ value: 'mandarin', label: '普通話 Mandarin' },
				{ value: 'english', label: 'English' },
			],
			siteLabels: { all: '所有地点', chinatown: '唐人街', south: '南区', west: '西区' },
			congLabels: { all: '全部', cantonese: '粵語', mandarin: '普通話', english: 'English' },
		},
		churchesQuote: {
			lines: [
				'多种语言，同一声音',
				'多个世代，同一身份',
				'多个地方，同一家园',
			],
			end: '同一教会，服事基督',
		},
		about: {
			eyebrow: '关于我们',
			heading: '城市中的教会',
			carouselTaglines: [
				'城市中的教会',
				'扎根唐人街百年',
				'信仰、行动与使命',
				'人人在此受欢迎',
			],
			whoWeAre: {
				question: '我们是谁',
				answer: '中华基督教联合教会（CCUC）是一间扎根于芝加哥唐人街的多代同堂教会。百年前建立至今，我们致力于敬拜神、建立社区，并跨越种族与文化界限服务邻里。',
			},
			ourLocations: {
				question: '我们的教会',
				answer: 'CCUC 在大芝加哥地区设有三个校区——唐人街、南区和西区——每个校区服务不同的社区，共同持守同一异象与大家庭。',
			},
			getInvolved: {
				question: '参与其中',
				answer: '有许多方式可以加入我们——参加小组、在事工团队中服事，或者在某个主日直接来访。欢迎联系我们任一校区，我们期待与您相识。',
			},
			ourCommitments: { question: '我们的委身' },
			ourBeliefs: { question: '我们的信仰' },
		},
		churches: {
			tabs: {
				chinatown: '唐人街',
				south: '南区',
				west: '西区',
			},
			chinatown: {
				worship: {
					heading: '主日崇拜',
					detail_1: '我们每周日上午',
					detail_bold1: '9:45',
					detail_2: '进行',
					detail_bold2: '现场及线上',
					detail_3: '崇拜。',
					englishLabel: '英语会众',
					bulletin: '主日崇拜周报',
					livestream: '观看直播',
					chineseLabel: '粤语会众',
					chineseSubheading: '主日崇拜',
					chineseDetail: 'CCUC 礼拜堂 上午11:45',
					chineseBulletin: '每周主日周报',
					mandarinLabel: '普通话会众',
					mandarinSubheading: '主日崇拜',
					mandarinDetail_1: '实体',
					mandarinDetail_bold1: '（Pui Tak Center 三楼）',
					mandarinDetail_2: '及',
					mandarinDetail_bold2: '线上',
					mandarinDetail_3: '，上午',
					mandarinDetail_bold3: '9:45',
					mandarinDetail_4: '。',
					mandarinBulletin: '主日崇拜周报',
					mandarinLivestream: '观看直播',
				},
				prayer: {
					heading: '祷告会',
					englishLabel: '英语会众',
					detail_1: '每',
					detail_bold1: '周三',
					detail_2: '晚上',
					detail_bold2: '7:00 – 8:15 PM',
					detail_3: '，',
					detail_bold3: 'Impact 二楼',
					detail_4: '。',
					bulletinLink: '每周祷告周报',
					guideLink: '周三祷告指引',
					remoteLink: '远程参加说明',
					zoomLink: '通过Zoom加入祷告团契',
					cantoneseLabel: '粤语会众',
					cantoneseSubheading: '祷告团契',
					cantoneseDetail_1: '每周三',
					cantoneseDetail_bold1: '实体',
					cantoneseDetail_2: '（Impact Center 一楼）及',
					cantoneseDetail_bold2: '线上',
					cantoneseDetail_3: '',
					cantoneseDetail_bold3: '晚上7:00 – 8:15',
					cantoneseDetail_4: '。',
					cantoneseBody:
						'祷告是培养信仰生命、加深对神的认识与爱，以及寻求祂旨意的重要途径。',
					cantoneseBulletin: '每周祷告周报',
					cantoneseZoom: 'Zoom 链接（晚上7:00）',
					mandarinLabel: '普通话会众',
					mandarinDetail: '仅限线上 · 每周三 · 晚上7:00 – 8:15',
					mandarinBody:
						'祷告是培养信仰生命、加深对神的认识与爱，以及寻求祂旨意的重要途径。',
					mandarinContact: '详情请联系 Ming Lee',
					mandarinContactEmail: 'ming.lee@ccuc.net',
					mandarinBulletin: '每周祷告周报',
				},
				fellowships: {
					heading: '团契',
					subheading: '人人皆有归属。',
					body: '我们致力于成为一个让任何背景、任何人生阶段的人都能彼此联系、共同成长、互相激励的地方。如需了解更多关于我们各小组的信息，请联系我们。',
					englishLabel: '英语会众',
					items: [
						{
							question: 'Horizon',
							answer: '大学生或22–29岁 · 每周日上午11:30 · Impact Center 二楼',
						},
						{
							question: 'Hosanna',
							answer: '30–49岁 · 每周日上午11:30 · CCUC 团契厅',
						},
						{
							question: 'Titus',
							answer: '50岁以上 · 每周日上午11:30 · Impact Center 一楼',
						},
					],
					cantoneseLabel: '粤语会众',
					cantoneseItems: [
						{
							question: 'Canaan',
							answer: '大学生 · 每周五晚7:30 · Pui Tak Center 一楼',
						},
						{
							question: 'Sitos',
							answer: '青年 · 每周日下午1:30 · CCUC 地下室',
						},
						{
							question: 'Josiah',
							answer: '每月第2及第4周六下午5:30 · CCUC 团契厅',
						},
						{
							question: 'Grace',
							answer: '每月第2及第4周六下午6:00 · CCUC 地下室',
						},
						{
							question: 'Joshua',
							answer: '每月第3周日下午2:30 · Impact Center 一楼',
						},
						{
							question: 'Esther',
							answer: '女性 · 每月第2周六上午11:00 · Impact Center 一楼',
						},
						{
							question: 'Harmony',
							answer: '每月第2周日下午1:00 · Impact Center 一楼',
						},
					],
				},
				youth: {
					heading: '青年事工',
					englishLabel: '英语会众',
					items: [
						{
							question: '少年团契 (YTF)',
							answer: '初中六至八年级 · 每周五晚7:30及每周日上午11:30 · 中华基督教联合教会',
						},
						{
							question: '寻道者 (Kingdom Seekers)',
							answer: '高中九至十二年级 · 每周五晚7:30及每周日上午11:30 · 中华基督教联合教会',
						},
					],
					cantoneseLabel: '粤语会众',
					cantoneseItems: [
						{
							question: 'Jireh',
							answer: '高中 · 每周五晚7:30 · Impact Center 一楼',
						},
						{
							question: 'Nissi',
							answer: '三至八年级 · 每周五晚7:00 · 中华基督教联合教会地下室',
						},
					],
				},
			},
			south: {
				youth: {
					heading: '青年事工',
					items: [
						{ question: '初中部', answer: '六至八年级 · 每周五下午3:00' },
						{ question: 'Joseph', answer: '高中 · 每周五晚7:30 · joseph@ccuc.net' },
						{ question: 'FHL 青年崇拜', answer: '六年级及以上 · 每周日上午11:45' },
						{ question: '青年主日学', answer: '六年级及以上 · 每周日上午10:15' },
						{ question: '儿童崇拜', answer: '一至五年级 · 每周日上午11:30' },
						{ question: '儿童主日学', answer: '一至五年级 · 每周日上午11:30' },
						{ question: '幼儿主日学', answer: '学前班至幼儿园 · 每周日上午11:30' },
						{ question: '幼儿主日崇拜', answer: '学前班至幼儿园 · 每周日上午11:30' },
					],
				},
				fellowships: {
					heading: '团契',
					cantoneseLabel: '粤语会众',
					cantoneseItems: [
						{ question: 'Joel', answer: '大学生 · 每周五晚7:30 · joel@ccuc.net' },
						{ question: 'Daniel', answer: '青年 · 每周六下午5:30 · daniel@ccuc.net' },
						{ question: 'Emmanuel', answer: '家庭 · 每月第2周六下午4:00 · emmanuel@ccuc.net' },
						{ question: 'Ruth', answer: '姐妹 · 每月第4周六下午3:00 · ruth@ccuc.net' },
						{ question: 'Song of Songs', answer: '夫妇 · 每月第1、3、5周六晚8:00 · songofsongs@ccuc.net' },
					],
					mandarinLabel: '普通话会众',
					mandarinItems: [
						{ question: '普通话小组', answer: '每周日晚8:00' },
					],
					englishLabel: '英语会众',
					englishItems: [
						{ question: 'Y.A.M.（青年事工）', answer: '每月第1及第3周三晚7:15' },
					],
				},
				worship: {
					heading: '主日崇拜',
					schedule: [
						'上午8:45 — 普通话崇拜',
						'上午11:30 — 粤语崇拜',
						'下午1:00 — 线上重播（普通话及粤语）',
					],
					address: '3000 S Wallace Street',
					tel: '312-225-5564',
					bulletin: '主日崇拜周报',
					video: '主日敬拜视频',
				},
				prayer: {
					heading: '祷告会',
					detail: '线上 · 每周三 · 晚上7:30',
					zoomId: 'Zoom ID：353-962-8686',
					zoomPwd: '密码：8686',
					body: '如需了解本周祷告团契的更多信息，请联系我们。',
					guide: 'CCUC 南区每周祷告指引',
					bulletin: '每周祷告周报',
				},
			},
			west: {
				fellowships: {
					heading: '团契',
					items: [
						{ question: 'Joy', answer: '长者 · 每周三下午3:30 · west.joy@ccuc.net' },
						{ question: 'Love', answer: '成人 · 每周五晚7:30 · west.love@ccuc.net' },
					],
				},
				worship: {
					heading: '主日崇拜',
					detail_1: '每周日上午',
					detail_bold1: '9:30',
					detail_2: '现场及线上崇拜。',
					bulletin: '主日崇拜周报',
					livestream: '观看直播',
				},
				prayer: {
					heading: '祷告会',
					detail: '线上 · 每周三 · 晚上7:30',
					body: '如需了解更多详情，请联系 Sen Xu 传道。',
					contactEmail: 'sen.xu@ccuc.net',
					bulletin: '每周祷告周报',
				},
			},
		},
		footer: {
			sections: [
				{
					title: '关于',
					links: [
						{ label: '历史', href: '/history' },
						{ label: '使命', href: '/about/mission' },
						{ label: '信仰', href: '/about/leadership' },
						{ label: '领袖团队', href: '/about/leadership' },
						{ label: '宣教', href: '/about/leadership' },
					],
				},
				{
					title: '地点',
					links: [
						{ label: '唐人街', href: '/locations/chinatown' },
						{ label: '南区', href: '/locations/quincy' },
						{ label: '西区', href: '/locations/newton' },
					],
				},
				{
					title: '社交媒体',
					links: [
						{ label: 'Instagram', href: 'https://instagram.com' },
						{ label: 'Facebook', href: 'https://facebook.com' },
						{ label: 'YouTube', href: 'https://youtube.com' },
					],
				},
				{
					title: '更多',
					links: [
						{ label: '奉献', href: '/events' },
						{ label: '计划拜访', href: '/giving' },
						{ label: '受洗', href: '/contact' },
					],
				},
			],
		},
	},
}
