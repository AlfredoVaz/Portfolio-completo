import React,{Component} from 'react';
import './styles.css'

class Hamburguer extends Component{
    render(){
        return(
            <div id="menu">
                <h1 id="myName">Alfredo Vaz</h1>
                <div className="container">
                    <div className="menu-hamburguer" >
                        <input type="checkbox" id="menu-hamburguer"/>
                        <label htmlFor="menu-hamburguer">
                            <div className="menu">
                                <span className="hamburguer"></span>
                            </div>
                        </label>
                        <ul className="lista-hamburguer">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#habilidades">Habilidades</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#portifólio">Portifólio</a></li>
                            <li><a href="#mais">Mais</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hamburguer;