'use client'
import React from 'react'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import Footer from '@/components/Footer/Footer'
import Accordion from './_components/Accordion'
import styles from './about.module.css'
import Carousel from '@/components/Carousel/Carousel'
import img1 from '@/assets/images/1.jpg'
import img2 from '@/assets/images/2.jpg'
import img3 from '@/assets/images/3.jpg'
import img4 from '@/assets/images/4.jpg'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'

const richContent = {
	ourCommitments: {
		en: (
			<div>
				<p><strong>1. Worship</strong><br />God created us to worship and enjoy Him (Psalm 95:6). We are committed to fostering a God-centered, vibrant, and inspiring atmosphere where people encounter His presence and worship in Spirit and truth.</p>
				<p><strong>2. Prayer</strong><br />Unceasing prayer is essential to a transforming relationship with God (1 Thess. 5:17). We are committed to being a prayer-saturated church where both corporate and individual prayer permeate every ministry, keeping us fully dependent on God.</p>
				<p><strong>3. Biblical Teaching</strong><br />The Bible is God's fully inspired word and ultimate authority (2 Tim. 3:16), forming the foundation of our beliefs and identity. We are committed to sound biblical teaching and preaching that equips us to share God's truth with the world.</p>
				<p><strong>4. Missions</strong><br />The church is called to the Great Commission&mdash;reaching the lost and making disciples of all nations (Matt. 28:18-20; Acts 1:8). Following Jesus' example of ministering to body, soul, and spirit, we are committed to wholistic missions that serve both our local community and the nations.</p>
				<p><strong>5. Discipleship</strong><br />Discipleship is intentionally helping believers become more like Christ (2 Tim. 2:2). Following Jesus' relational model, we are committed to investing in the discipleship of believers of all ages so they grow into the fullness of Christ (Eph. 4:13).</p>
				<p><strong>6. Family Ministry</strong><br />The church is God's multi-generational household (1 Tim. 3:15). We are committed to creating a spiritual community where everyone&mdash;regardless of age, gender, or marital status&mdash;is cared for and has a place of belonging.</p>
				<p><strong>7. Multiculturalism</strong><br />As a church shaped by multiple languages and both Chinese and western culture, we affirm that all are one in Christ (Gal. 3:28). We embrace our differences while speaking with one voice, treating every member and congregation fairly and equally.</p>
				<p><strong>8. Unity</strong><br />Church unity reflects the triune nature of God (John 10:30; 2 Cor. 13:14) and provides a powerful witness to the world. We are committed to pursuing unity in our diversity, using our gifts together to build up the body of Christ.</p>
			</div>
		),
		zh: (
			<div>
				<p><strong>1. 敬拜</strong><br />神创造我们是为了敬拜并享受祂（诗篇95:6）。我们致力于营造一个以神为中心、充满活力的敬拜氛围，使人们能在灵与真理中遇见祂。</p>
				<p><strong>2. 祷告</strong><br />不断的祷告对于与神的关系至关重要（帖前5:17）。我们致力于成为一个充满祷告的教会，使个人与团体祷告渗透每一项事工，使我们完全倚靠神。</p>
				<p><strong>3. 圣经教导</strong><br />圣经是神完全默示的话语和最高权威（提后3:16），是我们信仰和身份的基础。我们致力于健全的圣经教导与讲道，装备我们与世界分享神的真理。</p>
				<p><strong>4. 宣教</strong><br />教会蒙召执行大使命——寻找迷失的人，并使万民作主门徒（太28:18-20；徒1:8）。效法耶稣服事身、心、灵的榜样，我们致力于全人宣教，服务本地社区与万邦。</p>
				<p><strong>5. 门徒训练</strong><br />门徒训练是有意帮助信徒越来越像基督（提后2:2）。效法耶稣的关系模式，我们致力于培育各年龄层的信徒，使他们成长到基督的满足（弗4:13）。</p>
				<p><strong>6. 家庭事工</strong><br />教会是神的多代同堂之家（提前3:15）。我们致力于建立一个属灵社区，无论年龄、性别或婚姻状况，每个人都受到关怀并有归属感。</p>
				<p><strong>7. 多元文化</strong><br />作为一间由多语言和中西文化塑造的教会，我们肯定在基督里众人合而为一（加3:28）。我们在多元中同声同气，公平平等地对待每一位成员和会众。</p>
				<p><strong>8. 合一</strong><br />教会的合一反映了三一神的本质（约10:30；林后13:14），也是对世界有力的见证。我们致力于在多元中追求合一，共同运用恩赐建立基督的身体。</p>
			</div>
		),
	},
	ourBeliefs: {
		en: (
			<>
				<p><strong>Bible</strong></p>
				<p>The entire Bible, Old and New Testaments, in its original manuscripts is the inerrant, inspired word of God and the ultimate authority for Christian faith and life.</p>
				<p><strong>Triune God</strong></p>
				<p>We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit. Jesus Christ is fully God and fully man, born of the Virgin Mary, died for our sins, rose bodily, ascended to heaven, and now serves as our Mediator, High Priest, and Advocate. The Holy Spirit, equal with the Father and Son, convicts, regenerates, indwells, and empowers believers.</p>
				<p><strong>Man</strong></p>
				<p>Created in God's image, man fell into sin through Adam, incurring condemnation and both physical and spiritual death. Helpless on his own, he needs God for salvation.</p>
				<p><strong>Salvation</strong></p>
				<p>Salvation comes only through Christ's shed blood and resurrection, received by repentance toward God and faith in Jesus Christ. Repentance and faith are inseparable. There is no other way of salvation, and the redeemed are eternally secure in Christ.</p>
				<p><strong>Church</strong></p>
				<p>The true Church consists of all who have been regenerated through faith in Christ and united in His body, with Him as the Head, existing to glorify God. Baptism and the Lord's Supper are ordinances observed by the church, but not means of salvation.</p>
				<p><strong>Second Coming of Christ</strong></p>
				<p>We believe in the personal and imminent return of Christ and the bodily resurrection of the dead—believers to everlasting joy with the Lord, and the unrighteous to judgment and everlasting conscious punishment.</p>
			</>
		),
		zh: (
			<>
				<p><strong>圣经</strong></p>
				<p>整本圣经——旧约与新约——在其原稿中是无误且受神默示的话语，是基督徒信仰与生活的最高权威。</p>
				<p><strong>三一神</strong></p>
				<p>我们相信独一的神，永恒地以三个位格存在：圣父、圣子和圣灵。耶稣基督完全是神也完全是人，由童贞女马利亚所生，为我们的罪而死，肉身复活，升天，现今作我们的中保、大祭司和代求者。圣灵与圣父、圣子同等，施行感化、重生、内住和赋能于信徒。</p>
				<p><strong>人</strong></p>
				<p>人按神的形象受造，却因亚当犯罪堕落，招致定罪和肉身及灵性的死亡。人靠自己无能为力，需要神来拯救。</p>
				<p><strong>救恩</strong></p>
				<p>救恩唯独借着基督所流的宝血和复活，通过向神悔改、信靠耶稣基督而领受。悔改与信心密不可分。此外别无救法，蒙救赎者在基督里永远得保。</p>
				<p><strong>教会</strong></p>
				<p>真教会由所有借信基督而重生、联于祂身体的人所组成，以基督为元首，存在是为了荣耀神。洗礼和主的晚餐是教会遵守的圣礼，但并非得救的途径。</p>
				<p><strong>基督再来</strong></p>
				<p>我们相信基督的亲自再来和身体复活——信徒将与主永远同在，享受永恒的喜乐；不义之人则面临审判和永远有意识的刑罚。</p>
			</>
		),
	},
}

const carouselImages = [img1, img2, img3, img4]
const carouselOverlays = [0.4, 0.35, 0.45, 0.4]

export default function AboutPage() {
	const { lang } = useLanguage()
	const tx = t[lang].about

	const carouselSlides = carouselImages.map((image, i) => ({
		image,
		tagline: tx.carouselTaglines[i],
		overlay: carouselOverlays[i],
	}))

	const faqItems = [
		{ question: tx.whoWeAre.question, answer: tx.whoWeAre.answer },
		{ question: tx.ourCommitments.question, answer: richContent.ourCommitments[lang] },
		{ question: tx.ourBeliefs.question, answer: richContent.ourBeliefs[lang] },
		{ question: tx.ourLocations.question, answer: tx.ourLocations.answer },
		{ question: tx.getInvolved.question, answer: tx.getInvolved.answer },
	]

	return (
		<div className='container'>
			<NavigationBar />
			<div className={styles.carouselWrap}>
				<Carousel slides={carouselSlides} />
			</div>
			<main className={styles.main}>
				<div className={styles.header}>
					<p className={styles.eyebrow}>{tx.eyebrow}</p>
					<h1 className={styles.heading}>{tx.heading}</h1>
				</div>
				<Accordion items={faqItems} />
			</main>
			<Footer />
		</div>
	)
}
