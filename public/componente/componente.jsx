
class Algo extends React.Component{
  constructor(props) {
      super(props);
           this.state = {
            hidenParrafo: false
        };
        this.cambiarMostrar = this.cambiarMostrar.bind(this)
    
   
  }
    cambiarMostrar(){
        var mostrar = this.state.hidenParrafo
        this.setState({
            hidenParrafo: !mostrar
        })
    }
render(){
     var display = ''
        var textoBoton = ''
        if(this.state.hidenParrafo){
            display= "d-block"
            textoBoton = 'Mostrar menos'
            
        }else{
            display= "d-none"
            textoBoton = 'Mostrar mas'
        }
        return(
              <>
                  <h2 class="hache">{this.props.titulo}</h2>
                    <p>{this.props.contenido}</p>
                    <p class={display} id="hideText">{this.props.contenidoOculto}</p>
                    <button class="btn btn-outline-light btn-large p-3" onClick={this.cambiarMostrar}>{textoBoton}</button>
               
              </>
                
        );
}

  
}

ReactDOM.render(<Algo titulo="Formación"    contenido="Comenzó desde niña en escuelas de de danza de su ciudad natal, alli estudio danza jazz, recibiendo un tiutulo privado de proferosa de danza jazz, a su vez en sus ultimos años en la ciudad, tomo clases de danza clásica y danzas arabes. A la par de sus clases habituales, participaba de seminarios que dictaban profesores provenientes de la ciudad de Buenos Aires y viajaba a otra ciudad cercana para adquirir más experiencias. Luego de finalizar el secundario y obtener su titulo de profesora" contenidoOculto=" dictó clases a niñas pequeñas, jovenes y adultas. A sus 20 años se mudó a la ciudad de Buenos Aires y comenzó a realizar un año de nivelación conocido como CINO en la Universidad Nacional de Artes. En el 20218 inció la licenciatura en composición coregráfica mención comedia musical, luego se sumó a la mencón en danza teatro y fue con la cual recibió su título universitario ."  />,
 document.getElementById("algoreact-1"));
ReactDOM.render(<Algo titulo="Experiencias" contenido="Giuliana Stivanello nació en Chajarí, Entre Ríos en 1997. Desde muy temprana edad, mostró un gran interés por la danza y comenzó a tomar clases a los 5 años. Desde entonces, se enamoró por completo de esta disciplina sumergiendose cada día un poco más.Su pasión por la danza la llevó a explorar diferentes estilos y técnicas." contenidoOculto=" A medida que avanzaba en su formación, se dio cuenta de que quería dedicarse profesionalmente a la danza. Por eso, decidió estudiar en la Universidad Nacional de las Artes (UNA) en Buenos Aires, una de las instituciones más prestigiosas de Argentina en el ámbito artístico.Durante su carrera en la UNA, Giuliana pudo profundizar sus conocimientos, encontrar diferentes caminos, experimentar y aprender sobre su cuerpo y el de otres, generar vinculos y enlaces que la llevaron a experiencias vinculadas con el arte del movimiento y algo muy importante para ella, conocer e introducirse en el campo de investigación. Además, ha participado en numerosos seminarios, clases particulares y proyectos de compañías independientes, lo que le ha permitido seguir creciendo y desarrollando su arte. Hoy por hoy, Giuliana se encuentra finalizando sus estudios en la UNA y se prepara para dar el gran salto al mundo profesional de la danza. Su origen humilde y su pasión por la danza la han llevado a superar todos los obstáculos para convertirse en una bailarina talentosa y comprometida. Sin duda, su futuro en el mundo de la danza es muy prometedor."  />,
 document.getElementById("algoreact-2"));
ReactDOM.render(<Algo titulo="a"            contenido="Giuliana Stivanello nació en Chajarí, Entre Ríos en 1997. Desde muy temprana edad, mostró un gran interés por la danza y comenzó a tomar clases a los 5 años. Desde entonces, se enamoró por completo de esta disciplina sumergiendose cada día un poco más.Su pasión por la danza la llevó a explorar diferentes estilos y técnicas." contenidoOculto=" A medida que avanzaba en su formación, se dio cuenta de que quería dedicarse profesionalmente a la danza. Por eso, decidió estudiar en la Universidad Nacional de las Artes (UNA) en Buenos Aires, una de las instituciones más prestigiosas de Argentina en el ámbito artístico.Durante su carrera en la UNA, Giuliana pudo profundizar sus conocimientos, encontrar diferentes caminos, experimentar y aprender sobre su cuerpo y el de otres, generar vinculos y enlaces que la llevaron a experiencias vinculadas con el arte del movimiento y algo muy importante para ella, conocer e introducirse en el campo de investigación. Además, ha participado en numerosos seminarios, clases particulares y proyectos de compañías independientes, lo que le ha permitido seguir creciendo y desarrollando su arte. Hoy por hoy, Giuliana se encuentra finalizando sus estudios en la UNA y se prepara para dar el gran salto al mundo profesional de la danza. Su origen humilde y su pasión por la danza la han llevado a superar todos los obstáculos para convertirse en una bailarina talentosa y comprometida. Sin duda, su futuro en el mundo de la danza es muy prometedor."  />,
 document.getElementById("algoreact-3"));
