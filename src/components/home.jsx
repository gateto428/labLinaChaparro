import React, {Component } from 'react';
import Banner from './Banner.jsx'
import { connect } from "react-redux";  
import Navbar from './navbar';
import CardLab from './card.jsx';
import dataBase from '../TempData/dataBase.json'
import background from '../images/background.jpeg'

export class Home extends Component {
  render() {
    let aux = dataBase.slice(6, 9);
    return (
            <div>
                <Navbar labs={dataBase}/>
                <Banner/>
                <div class="grid grid-cols-3 gap-3 m-0 bg-no-repeat bg-center bg-cover" style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                      justifyContent: 'center',
                      backgroundImage: `url(${background})`
                }}>
                 {
                  aux.map(i => <CardLab portada={i.portada} titulo={i.titulo} abstrac={i.abstrac} Laboratorio={i.Laboratorio} key={i.Laboratorio}/>)
                 }
                </div>
            </div> 
        );
  }

}
export default connect(null,null)(Home);