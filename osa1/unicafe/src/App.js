import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
	return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	const all = good + neutral + bad;
	const average = (good - bad) / all;
	const positive = (good / all) * 100;
	return (
		<table>
			<tbody>
				<StatisticsLine text={"good "} value={good} />
				<StatisticsLine text={"neutral "} value={neutral} />
				<StatisticsLine text={"bad "} value={bad} />
				<StatisticsLine text={"all "} value={all} />
				<StatisticsLine text={"average "} value={average} />
				<StatisticsLine text={"positive "} value={positive + " %"} />
			</tbody>
		</table>
	);
};

const NoStatistics = () => {
	return <p>No feedback given</p>;
};

const App = () => {
	const [showStatistics, setShowStatistics] = useState(false);
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGood = () => {
		setGood(good + 1);
		if (!showStatistics) {
			setShowStatistics(true); // this is an awful solution - useEffect would be nice though
		}
	};

	const handleNeutral = () => {
		setNeutral(neutral + 1);
		if (!showStatistics) {
			setShowStatistics(true);
		}
	};

	const handleBad = () => {
		setBad(bad + 1);
		if (!showStatistics) {
			setShowStatistics(true);
		}
	};

	return (
		<div>
			<h1>give feedback, now!</h1>
			<div>
				<Button handleClick={handleGood} text={"good"} />
				<Button handleClick={handleNeutral} text={"neutral"} />
				<Button handleClick={handleBad} text={"bad"} />
			</div>
			<h1>statistics</h1>
			{showStatistics ? (
				<Statistics good={good} neutral={neutral} bad={bad} />
			) : (
				<NoStatistics />
			)}
		</div>
	);
};

export default App;
