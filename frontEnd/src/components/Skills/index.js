import React,{Component} from 'react';
import './styles.css'
import axios from 'axios'

class Skills extends Component{
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
            <section id="sectionSkills">
                <h1>Algumas Habilidades</h1>
                {this.state.curriculo.map(post => (
                <div className="row">
                    <ul> 
                        <li>{post.hab1}</li>
                        <li>{post.hab2}</li>
                        <li>{post.hab3}</li>
                        <li>{post.hab4}</li>
                    </ul>
                    <ul>
                        <li>{post.hab4}</li>
                        <li>{post.hab5}</li>
                        <li>{post.hab6}</li>
                        <li>{post.hab7}</li>
                    </ul>
                    <ul>
                        <li>{post.hab8}</li>
                        <li>{post.hab9}</li>
                        <li>{post.hab10}</li>
                        <li>{post.hab11}</li>
                    </ul>
                    <ul>
                        <li>{post.hab12}</li>
                        <li>{post.hab13}</li>
                        <li>{post.hab14}</li>
                        <li>{post.hab15}</li>
                    </ul>
                
                </div>
                ))}
            </section>
        )
    }
}

export default Skills;