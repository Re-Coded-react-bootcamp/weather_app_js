import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function WeatherData() {
	const [currentWeth, setcurrentWeth] = useState()
	const [forcasttWeth, setForcasttWeth] = useState()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState()

	useEffect(() => {
		function requestData() {
			setLoading(true)
			try {
				axios
					.all([
						axios.get(
							'http://api.weatherstack.com/current?access_key=306bc2ca601a9eb579319d8b96507b0d&query=San Francisco'
						),
						axios.get(
							'https://tranquil-cove-12072.herokuapp.com/https://www.metaweather.com/api/location/2487956/'
						)
					])
					.then(([currentRes, foreCastRes]) => {
						setcurrentWeth(currentRes.data)
						setForcasttWeth(foreCastRes)
					})
			} catch (err) {
				setError(err)
			}
		}
		requestData()
	}, [])

	if (!currentWeth) {
		return null
	}
	return <div>{/* components come here */}</div>
}
