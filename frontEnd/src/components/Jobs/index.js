import React,{Component} from 'react';
import './styles.css'
import geovanaGarcia from '../../assets/geovanaGarcia.JPG'
import videoMaker from '../../assets/videoMaker.jpg'
import axios from 'axios'


class Jobs extends Component{
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
            <section id="sectionJobs">
                <h1>Projetos</h1>
                <h5>Aqui alguns trabalhos desenvolvidos!</h5>
                {this.state.curriculo.map(post => (
                    <div className="central row">
                        <div className=" row col-lg-3 col-md-4 threeBlogs imgBlackWhite">
                            <div id="divGirl">
                                <img className="imageBlogs" src={geovanaGarcia}></img>
                            </div>
                            <div>
                                <br/><h6>{post.nomeProjeto1}</h6>
                            </div>
                            <div>
                                <p>{post.descricaoProjeto1}</p>
                            </div>
                            <button className="btn buttonBlogs"><a target="blank" href="https://www.geovannagarcia.com.br/">Site original</a></button>
                            <button className="btn buttonBlogs"><a target="blank" href="https://alfredovaz.github.io/siteGeovanaGarcia/">Site replicado</a></button>
                        </div>
                        <div className=" row col-lg-3 col-md-4 threeBlogs imgBlackWhite">
                            <div id="divGirl">
                                <img className="imageBlogs" src={videoMaker}></img>
                            </div>
                            <div>
                                <br/><h6>{post.nomeProjeto2}</h6>
                            </div>
                            <div>
                                <p>{post.descricaoProjeto2}</p>
                            </div>
                            <button className="btn buttonBlogs"><a target="blank" href="https://github.com/AlfredoVaz/video-maker">Veja o projeto</a></button>
                            <button className="btn buttonBlogs"><a target="blank" href="https://www.youtube.com/watch?v=kjhu1LEmRpY&list=PLMdYygf53DP4YTVeu0JxVnWq01uXrLwHi">Veja o curso</a></button>
                        </div>
                    </div>
                ))}
            </section>
        )
    }
}

export default Jobs;