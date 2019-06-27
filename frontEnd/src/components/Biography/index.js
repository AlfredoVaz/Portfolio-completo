import React,{Component} from 'react';
import './styles.css'
import axios from 'axios'

class Biography extends Component{
    state = {
        curriculo: []
    };
    pegarApi = () => {
        axios
            .get("http://localhost:9999/api/curriculo/listar", {
                crossDomain: true
            })
            .then(result => {
                this.setState({ curriculo: result.data });
            });
    };

    componentDidMount() {
        this.pegarApi();
    }
    render(){
        return(
            <section id="sectionBiography">
                <h1>Sobre mim</h1>
                {this.state.curriculo.map(post => (
                    <div className="central row">
                        <div className=" row col-lg-3 col-md-5 biography text-justify">
                            <div>
                                <br/><h4>Biografia</h4>
                            </div>
                            <div>
                                <p>{post.biografia}</p>
                            </div>
                        </div>
                        <div className=" row col-lg-3 col-md-5 biography text-justify">
                            <div>
                                <br/><h4>Profissão</h4>
                            </div>
                            <div>
                                <p>{post.profissao}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        )
    }
}

export default Biography;