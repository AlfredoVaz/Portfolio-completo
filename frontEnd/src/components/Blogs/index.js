import React,{Component} from 'react';
import './styles.css'
import girlgif from '../../assets/girlgif.gif'
import fight from '../../assets/fight.jpg'
import perfect from '../../assets/feitoMelhor.png'
import axios from 'axios'

class Blogs extends Component{
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
            <section id="sectionBlogs">
                <h1>Blogs</h1>
                <h5>Aqui algumas paginas que eu recomendaria a qualquer um</h5>
                {this.state.curriculo.map(post => (
                    <div className="central row">
                        <div className=" row col-lg-3 col-md-4 threeBlogs imgBlackWhite">
                            <div id="divGirl">
                                <img className="imageBlogs" src={perfect}></img>
                            </div>
                            <div>
                                <br/><h6>{post.blogTitulo1}</h6>
                            </div>
                            <div>
                                <p>{post.blogDescricao1}</p>
                            </div>
                            <button className="btn buttonBlogs"><a target="blank" href="http://www.allanperon.com.br/feito-e-melhor-que-perfeito/">Clique Aqui</a></button>
                        </div>
                        <div className=" row col-lg-3 col-md-4 threeBlogs imgBlackWhite">
                            <div id="divGirl">
                                <img className="imageBlogs" src={girlgif}></img>
                            </div>
                            <div>
                                <br/><h6>{post.blogTitulo2}</h6>
                            </div>
                            <div>
                                <p>{post.blogDescricao2}</p>
                            </div>
                            <button className="btn buttonBlogs"><a target="blank" href="https://www.youtube.com/watch?v=hHW1oY26kxQ">Clique Aqui</a></button>
                        </div>
                        <div className=" row col-lg-3 col-md-4 threeBlogs imgBlackWhite">
                            <div id="divGirl">
                                <img className="imageBlogs" src={fight}></img>
                            </div>
                            <div>
                                <br/><h6>{post.blogTitulo3}</h6>
                            </div>
                            <div>
                                <p>{post.blogDescricao3}</p>
                            </div>
                            <button className="btn buttonBlogs"><a target="blank" href="https://www.ecommercebrasil.com.br/artigos/luta-milionaria-floyd-conor/">Clique Aqui</a></button>
                        </div>
                    </div>
                ))}
            </section>
        )
    }
}

export default Blogs;