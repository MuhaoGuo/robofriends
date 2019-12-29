import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

// const state = {
// 	robots:robots,
// 	searchfield:''
// }

class App extends Component{
	constructor(){
		super()
		this.state ={
			robots:[],
			searchfield:''
		}

	}

    // 从服务器加载
	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=> this.setState({robots:users}))
	}



	//自己定义的方法这样写：
	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
	}

	render(){
		const {robots,searchfield}=this.state;

		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	    })


	    if (!robots.length){
	    	return <h1>loading</h1>
	    }else{
	    	return (
			  <div className='tc'>
				<h1>RobotsFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<Cardlist robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			  </div>
			); 
	    }
	}
}


export default App;