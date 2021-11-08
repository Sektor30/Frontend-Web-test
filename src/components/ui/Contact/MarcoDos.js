import React, { PureComponent } from 'react'
import MarcoTres from './MarcoTres';





class MarcoDos extends React.Component {
    render() {
        return (
            
                <div className="container-two">

                    <div className="formulario ">
                        <form className="formulario_contacto " name="formulario_contacto">
                            <div className="input-group ">
                                <input className="datos" type="text" id="nombre" name="nombre" placeholder="Nombre" required pattern="{10,60}">
                                </input>
                            </div>
                        </form>
                        <form className="formulario_contacto  " name="formulario_contacto">
                            <div className="input-group">
                                <input className="datos" type="email" id="email" name="email" placeholder="Email" required pattern="[A-Za-z0-9_-]{10,60}">
                                </input>
                            </div>
                        </form>

                        <div className="input-group">
                            <textarea name="mensaje" id="mensaje" placeholder="Asunto" required>

                            </textarea>
                        </div>
                        <div> <MarcoTres /> </div>


                    </div>
                </div>
            

        );
    }
}

export default MarcoDos;