import React, { Component } from 'react';
import './ListItem.css';
import 'tachyons';
import SingleItem from '../SingleItem/SingleItem.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from '../../App'

class ListItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			data:'',
			click: false
		};
	}

	componentDidMount() {
		const url = 'http://localhost/projetV2/server/api/hommes.php';
		fetch(url).then((res) => res.json()).then((data) => {
			this.setState({ items: data });
		});
	}

	getOneShoe = async (id) => {
		await fetch(`http://localhost/projetV2/server/api/singleitem.php?id=${id}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({ click: true, data: data[0] });
				
				
            })	    
	};

	render() {
		let item = this.state.items.map((item) => {
			return (
				
				<div className="qzd1 fl w-third" key={item.id} onClick={() => this.getOneShoe(item.id)}>
			
						<Link to={`/azert/${item.id}`}>
							<div className="imgItem">
								<img src={require(`../../img/${item.img}`)} className="artH1" alt={item.img} style={{cursor: 'pointer'}}/>
							</div>
							<div className="textItem">
								{item.name}
								<nav>{item.price}</nav>
							</div>
						</Link>
				
				</div>
			);
		});

		if (this.state.click) {
			
			return  (
					<SingleItem data={this.state.data}/>
			) 
				
		} else {
			return <div> {item} </div>;
		}
	}
}

export default ListItem
