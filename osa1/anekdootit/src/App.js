import React, { useState, useEffect } from "react";

const AnecdoteOfTheDay = ({ anecdote, votes }) => {
	return (
		<div>
			<h1>Anecdote of the day</h1>
			<p>{anecdote}</p>
			<p>has {votes} votes</p>
		</div>
	);
};

const MostVoted = ({ anecdote, votes }) => {
	return (
		<div>
			<h1>Anecdote with most votes</h1>
			<p>{anecdote}</p>
			<p>has {votes} votes</p>
		</div>
	);
};

const Button = ({ handleClick, text }) => {
	return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
	];

	const [selected, setSelected] = useState(0);
	const [vote, setVote] = useState(() =>
		Object.values(new Array(anecdotes.length).fill(0))
	);
	const [mostVotes, setMostVotes] = useState(0);
	const [mostVoted, setMostVoted] = useState(0);

	const getRandomNumber = (min, max) =>
		Math.floor(Math.random() * (max - min + 1));

	const handleNextAnecdote = () => {
		const number = getRandomNumber(0, 5);
		setSelected(number);
	};

	const handleVote = () => {
		const copyVote = [...vote];
		copyVote[selected] += 1;
		setVote(copyVote);
		setMostVotes(Math.max(...copyVote));
	};

	useEffect (() => { // I have no clue how to code this bug-free using hooks but without useEffect
		setMostVoted(vote.indexOf(mostVotes));
	}, [vote, mostVotes])

	return (
		<div>
			<AnecdoteOfTheDay anecdote={anecdotes[selected]} votes={vote[selected]} />
			<Button handleClick={handleVote} text="vote" />
			<Button handleClick={handleNextAnecdote} text="next anecdote" />
			<MostVoted anecdote={anecdotes[mostVoted]} votes={vote[mostVoted]} />
		</div>
	);
};

export default App;
