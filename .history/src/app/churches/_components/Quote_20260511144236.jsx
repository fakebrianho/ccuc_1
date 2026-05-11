import React from 'react'
import styles from './Quote.module.css'

function Quote() {
	return (
		<div className={styles.container}>
			<div>
				<p>Many languages, Once Voice</p>
				<p>Many generations, Once Identity</p>
				<p>Many places, Once Home</p>
			</div>
			<p className={styles.end}>One Church Serving Christ</p>
		</div>
	)
}

export default Quote
