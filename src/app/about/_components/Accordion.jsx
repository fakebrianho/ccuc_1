'use client'

import { useState } from 'react'
import styles from './Accordion.module.css'

function AccordionItem({ question, answer, isOpen, onToggle }) {
	return (
		<div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
			<button className={styles.trigger} onClick={onToggle} aria-expanded={isOpen}>
				<span className={styles.label}>{question}</span>
				<span className={styles.icon} aria-hidden='true'>
					<span className={styles.iconBar} />
					<span className={`${styles.iconBar} ${styles.iconBarV}`} />
				</span>
			</button>
			<div className={styles.panel}>
				<div className={styles.panelInner}>
					<div className={styles.answer}>{answer}</div>
				</div>
			</div>
		</div>
	)
}

export default function Accordion({ items }) {
	const [openIndex, setOpenIndex] = useState(null)

	const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

	return (
		<div className={styles.accordion}>
			{items.map((item, i) => (
				<AccordionItem
					key={i}
					question={item.question}
					answer={item.answer}
					isOpen={openIndex === i}
					onToggle={() => toggle(i)}
				/>
			))}
		</div>
	)
}
