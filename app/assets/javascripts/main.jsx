class Main extends React.Component {
	render(){
		return (
			<h2>Welcome to Rails React</h2>
			)
	}
}

let welcomeBox = () => {
	ReactDOM.render(
		<Main/>,
		document.getElementById('content')
		);
};

$(welcomeBox)