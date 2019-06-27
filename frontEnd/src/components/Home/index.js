import React,{Component} from 'react';
import './styles.css'
import minhaFoto from '../../assets/minhaFoto.JPG'
import curriculo from '../../assets/AlfredoVaz.pdf'
import axios from 'axios'

class Home extends Component{
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
            <section className="row">
                
                <div className="column col-lg-6 col-md-12" align= "center">
                    <div>
                        <img src={minhaFoto} id="minhaFoto"/>
                    </div>
                    <div>
                        <button className="btn" id="buttonCV"><a href={curriculo} download={curriculo}>Download CV</a></button>
                    </div>
                </div>
                {this.state.curriculo.map(post => (
                    <div className="column col-lg-6 col-md-12">
                        <ul>
                            <h4>Interesses</h4>
                            <li>{post.interesses1}</li>
                            <li>{post.interesses2}</li>
                            <li>{post.interesses3}</li>
                            <h4>Idiomas</h4>
                            <li>{post.idiomas1}</li>
                            <li>{post.idiomas2}</li>
                            <h4>Formação</h4>
                            <li>{post.formacao1}</li>
                            <li>{post.formacao2}</li>
                        </ul>
                    </div>
                ))}
            </section>
        )
    }
}

export default Home;