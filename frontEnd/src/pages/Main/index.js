import React,{Component} from 'react';
import Menu from '../../components/Menu';
import Home from '../../components/Home';
import Skills from '../../components/Skills';
import Blogs from '../../components/Blogs';
import Jobs from '../../components/Jobs';
import Biography from '../../components/Biography';
import Contact from '../../components/Contact';
import Hamburguer from '../../components/Hamburguer';

class Main extends Component{
    render(){
        return(
            <>
                <Menu />
                <Hamburguer />
                <Home />
                <Skills />
                <Blogs />
                <Jobs />
                <Biography />
                <Contact />
            </>
        );
    };
};

export default Main;