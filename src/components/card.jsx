import React from "react";
import { Link } from 'react-router-dom';
   
  export default function CardLab(props) {
    return (
      <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-cyan-500 hover:bg-cyan-600 m-2 shadow-2xl shadow-red-100/100">
            <img
                className="object-cover w-full h-48 rounded-lg p-4"
                src={props.portada}
                alt="Portada principal"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    {props.titulo}
                </h4>
                <p className="mb-2 leading-normal text-justify">
                    {props.abstrac}
                </p>
                <Link to ={`/lab/${props.Laboratorio}`} >
                    <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                        Read more
                    </button>
                </Link>
            </div>
        </div>
    );
  }