'use client'

import React from 'react'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import Footer from '@/components/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'

export default function ChurchesPage() {
	const { lang } = useLanguage()
	const tx = t[lang].about
	return <div>churches</div>
}
