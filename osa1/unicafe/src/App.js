import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
	return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
	return (
		<div>
			<h1>statistics</h1>
			<p>good {good}</p>
			<p>neutral {neutral}</p>
			<p>bad {bad}</p>
		</div>
	);
};

const App = () => {
	// tallenna napit omaan tilaansa
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGood = () => setGood(good + 1);
	const handleNeutral = () => setNeutral(neutral + 1);
	const handleBad = () => setBad(bad + 1);

	return (
		<div>
			<h1>give feedback, now!</h1>
			<div>
				<Button handleClick={handleGood} text={"good"} />
				<Button handleClick={handleNeutral} text={"neutral"} />
				<Button handleClick={handleBad} text={"bad"} />
			</div>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
