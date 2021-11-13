import React, { Component } from 'react';
import './listamap.css'


class Listamapa extends Component {
    render() {
        return (

            <div className=" ">

                <div className="mapaSitio">
                    <h1><span>Map</span>a del sitio</h1>
                </div >
                <div className=" ">
                    <div className="contenedor">

                        <div className="caja">
                            <ul>
                                <li><a className="" href="./homeScren.html"> <h4> Inicio </h4> </a></li>
                                <li><a className="tituloCaja" href="./homeScren.html#comidas">Comidas</a></li>
                                <li><a className="tituloCaja" href="./homeScren.html#organizar">Organizamos tu evento</a></li>
                                <li><a className="tituloCaja" href="./homeScren.html#resenas">Reseñas</a></li>
                            </ul>
                        </div>

                        <div className="caja">
                            <ul>
                            <li><a className="" href="./nosotros.html"> <h4> Nosotros</h4> </a></li>
                            <li><a className="tituloCaja" href="./nosotros.html#historia">Historia</a></li>
                            <li><a className="tituloCaja" href="./nosotros.html#equipo">Equipo de trabajo</a></li>
                            </ul>
                        </div>

                        <div className="caja">
                            <ul>
                            <li><a className="" href="./RETO1 V2-Menu/menu.html"><h4>Menú</h4></a></li>
                            <li><a className="tituloCaja" href="./RETO1 V2-Menu/menu.html#comida">Comidas</a></li>
                            <li><a className="tituloCaja" href="./RETO1 V2-Menu/menu.html#bebidas">Bebidas</a></li>
                            </ul>
                        </div>

                        <div className="caja">
                            <ul> 
                                <li> <a className="tituloCaja" href="./servicios.html"><h4>  Servicios </h4> </a> </li> </ul>

                        </div>

                        <div className="caja">
                            <ul>
                            <li><a className="" href="./Cont/contacto.html"> <h4> Contáctanos </h4> </a></li>
                            <li><a className="tituloCaja" href="./Cont/contacto.html#ubicacion">Ubicación</a></li>
                            <li><a className="tituloCaja" href="./Cont/contacto.html#comu">Comunícate con nosotros</a></li>
                            </ul>
                        </div>


                    </div>
                </div>


            </div>








        );
    }
}

export default Listamapa;