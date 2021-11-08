import React, { PureComponent } from 'react'


class MarcoTres extends React.Component {
    render() {
        return (

            <div className="container-three ">
                
                
                <div><h2> Elige el servicio al cual deseas comunicarte</h2></div>

                <div className="container-four ">
                    <div className=" caja4 ">
                        <select className="btn " name="elegir_servicio" id="elegir_servicio" required>
                        <option value="1">Servicio1</option>
                        <option value="2">Servicio2</option>
                        <option value="3">Servicio3</option>
                    </select>
                    </div>
                    <div className="caja5" >
                    <input className=" col " type="submit" value="Enviar" id= "enter">
                    </input>
                    </div>
                </div>
                

            

            </div>


        );
    }
}

export default MarcoTres;