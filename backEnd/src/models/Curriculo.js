const mongoose = require("mongoose");
const CurriculoSchema = new mongoose.Schema(
{
  miniBiografia: {
    type: String  
  },
  foto: {
    type: String
      
  },
  curriculo: {
    type: String
      
  },
  interesses1: {
    type: String
      
  },
  interesses2: {
    type: String
      
  },
  interesses3: {
    type: String
      
  },
  idiomas1: {
    type: String
      
  },
  idiomas2: {
    type: String
      
  },
  formacao1: {
    type: String
      
  },
  formacao2: {
    type: String
      
  },
  hab1: {
    type: String
      
  },
  hab2: {
    type: String
      
  },
  hab3: {
    type: String
      
  },
  hab4: {
    type: String
      
  },
  hab5: {
    type: String
      
  },
  hab6: {
    type: String
      
  },
  hab7: {
    type: String
      
  },
  hab8: {
    type: String
      
  },
  hab9: {
    type: String
      
  },
  hab10: {
    type: String
      
  },
  hab11: {
    type: String
      
  },
  hab12: {
    type: String
      
  },
  hab13: {
    type: String
      
  },
  hab14: {
    type: String
      
  },
  hab15: {
    type: String
      
  },
  hab16: {
    type: String
      
  },	
  blogFoto1: {
    type: String
      
  },
  blogFoto2: {
    type: String
      
  },
  blogFoto3: {
    type: String
      
  },
  blogTitulo1: {
    type: String
      
  },
  blogTitulo2: {
    type: String
      
  },
  blogTitulo3: {
    type: String
      
  },
  blogDescricao1: {
    type: String
      
  },
  blogDescricao2: {
    type: String
      
  },
  blogDescricao3: {
      type: String
        
  },
  fotoProjeto1: {
      type: String
        
  },
  fotoProjeto2: {
      type: String
        
  },
  nomeProjeto1: {
      type: String
        
  },
  nomeProjeto2: {
      type: String
        
  },
  descricaoProjeto1: {
      type: String
        
  },
  descricaoProjeto2: {
      type: String
        
  },	
  biografia: {
    type: String
      
  },
  profissao: {
    type: String
      
  },
  linkFace: {
    type: String
      
  },
  linkInsta: {
    type: String
      
  },
  linkGit: {
    type: String
      
  },
  linkLink: {
    type: String
      
  }
}
);

module.exports = mongoose.model("Curriculo", CurriculoSchema);