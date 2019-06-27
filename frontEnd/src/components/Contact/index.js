import React,{Component} from 'react';
import './styles.css'

class Contact extends Component{
    render(){
        return(
            <section id="sectionContact">
                <h1>Contato</h1>
                <h4>Quer trocar uma idéia comigo? Entre em contato!</h4>
                <form className="col-md-6 col-lg-6 container">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="*Aqui seu nome" maxLength="255"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="*Aqui seu e-mail" maxLength="255"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="*Aqui seu telefone" data-mask="00-000000000" reverse="true" maxLength="12"></input>
                    </div>
                    <div className="form-group">
						<textarea className="form-control" placeholder="*Aqui sua mensagem :)" maxLength="255"></textarea>
					</div>
                    <button className="btn buttonBlogs">Enviar</button>
                </form>
            </section>
        )
    }
}

export default Contact;