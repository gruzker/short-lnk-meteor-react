import React from 'react';
import {Link} from 'react-router';
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			error:''
		};
	}
	onSubmit(e){
		e.preventDefault();

		let email= this.refs.email.value.trim();
		let password= this.refs.password.value.trim();

		if(password.length < 9){
			return this.setState({error:'Password must be more than 8 characters.'});
		}

		Accounts.createUser({email,password},(err) => {
			if(err){
				this.setState({error:err.reason});
			}
			else{
				this.setState({error:''});
			}			
		});


		// this.setState({
		// 	error: 'Something went wrong.'
		// });
	}
	render(){
		return (
			<div className="boxed-view">
				<div className="boxed-view__box">
					<h1>Signup page</h1>
					
					{this.state.error ? <p>{this.state.error}</p> : undefined}
					<form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate >
						<input type="email" name="email" ref="email" placeholder="Email"/>
						<input type="password" name="password" ref="password" placeholder="Password"/>
						<button className="button">Create Account</button>
					</form>
					
					<Link to="/">Alreay registered?</Link>
				</div>
				

			</div>

		);
	}
}
