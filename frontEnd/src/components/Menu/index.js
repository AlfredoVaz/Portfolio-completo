import React,{Component} from 'react';
import './styles.css'

class Menu extends Component{
    render(){
        return(
            <ul>
                <li id="nome">Alfredo Vaz</li>
                <li className="escondeMenu"><a>Sobre</a></li>
                <li className="escondeMenu"><a>Habilidades</a></li>
                <li className="escondeMenu"><a>Blog</a></li>
                <li className="escondeMenu"><a>Portifóio</a></li>
                <li className="escondeMenu"><a>Mais</a></li>
                <li className="escondeMenu"><a>Contato</a></li>
            </ul>
        )
    }
}

export default Menu;