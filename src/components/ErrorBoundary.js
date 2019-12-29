import React, {Component} from 'react';
class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state={
			hasError: false
		}
	}


	// hasError  如何会变？有一个method：
	componentDidCatch(error,info){
		this.setState({hasError:true})
	}



	render(){
		if (this.state.hasError){
			return <h1>OOOOPs.This is not good</h1>
		}else{
			return this.props.children
		}
	}
}

export default ErrorBoundary;