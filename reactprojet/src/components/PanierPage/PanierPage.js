import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export class PanierPage extends Component {

    render() {

        let item = this.props.itemPanier.map((item) => {
			return (
				<div className="" key={item.id} style={{width: '60%', height:'15%', border: '1px solid black', display:'flex', direction:'row', padding:'1%'}}>
						<img src={require(`../../img/${item.img}`)} className="" alt={item.img} style={{width: '25%', height:'25%'}} />
                            <nav style={{ margin:'3%'}} >
                                {item.name}
                                <br/>
                                {item.price}$
                                <br/>
                                Taille: 
                                <br/>
                                Couleur:
                            </nav>  
				</div>
			);
        });
        
        return (
            <div className='container'>
                <hr/>
                <h1>MON PANIER</h1>
                {item}
            </div>
        )
    }
}

export default PanierPage ;
