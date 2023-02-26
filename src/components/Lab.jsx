import React, { useEffect }  from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {getLab} from '../redux/actions.js'
import { connect } from "react-redux";
import backgroundDetail from '../images/backgroundDetail.jpg'
import ReactPlayer from 'react-player'

 const CardLab = (props) =>{
    const dispatch = useDispatch();
    let { id } = useParams();
    useEffect(() => {
        dispatch(getLab(id));
        // eslint-disable-next-line
      }, [] );
    return (
        <div class=" bg-center bg-cover p-8" style={{
            backgroundImage: `url(${backgroundDetail})`,
            height: '100vh'
        }}>
            <div class="backdrop-blur-sm bg-white/20 p-3 rounded-lg shadow-2xl shadow-cyan-200/100" style={{
                height: '95vh',
                overflowY: 'auto'
            }}>
                <div class="grid grid-cols-1 justify-center gap-3">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        justifyContent: 'center'
                    }}>
                        <h1 class="text-black-100 text-2xl border-solid border-2 border-yellow-500 rounded-lg bg-yellow-200" style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'nowrap',
                                alignItems: 'center',
                                paddingLeft: '2em',
                                paddingRight: '2em',
                                position: 'fixed'
                        }}>{props.lab.titulo}</h1>

                    </div>
                    
                        <div class="p-2 mt-20">
                            {
                                props?.lab?.items?.map(i => {
                                    return (
                                        <div class="grid grid-cols-1 gap-2 mt-3.5">
                                            <div class="col-span-2 gap-2 justify-center" style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                flexWrap: 'nowrap',
                                                justifyContent: 'center'
                                            }}>
                                                <p class="font-bold text-3xl" style={{
                                                    textShadow: '#fed000 1px 0 10px'
                                                }}>{i.Titulo}</p>
                                            </div>
                                            <div class="row-span-2 col-span-2 border-solid border-2 border-white-500 rounded-lg bg-red-200 p-2">
                                                {
                                                    i.Info.map(j=> {
                                                        let subtittle = j.split("/")[0];
                                                        let text = j.split("/")[1];
                                                        return (
                                                            <div>
                                                                <p class="font-bold text-xl">{subtittle}</p>
                                                                <p class="text-justify text-xl">{text}</p>
                                                            </div>    
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div class="row-span-3">
                                                <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 content-start">
                                                    {
                                                        i.Imagenes.map( j => {
                                                            return (
                                                            <div className="justify-center row-span-3 w-full rounded-lg shadow-md lg:max-w-sm bg-cyan-500 hover:bg-cyan-600 shadow-2xl shadow-red-100/100" style={{
                                                                alignItems: "center",
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "flex-start"
                                                            }}>
                                                                {j["url"].split(".")[1] !== "mp4"? (
                                                                <img className="object-cover w-52 h-52 rounded-lg p-4"
                                                                    src={j["url"]}
                                                                    alt="Prueba Imagen"
                                                                />):
                                                                (<div class="row-span-3 rounded-lg justify-center" className='player-wrapper'>
                                                                    <ReactPlayer
                                                                        class="row-span-3 rounded-lg justify-center"
                                                                        className='react-player fixed-bottom'
                                                                        url={j["url"]}
                                                                        width='13rem'
                                                                        height='13rem'
                                                                        controls = {true}
                                                                    />
                                                                </div>)
                                                                }
                                                                <div className="p-4">
                                                                    <p className="mb-2 leading-normal text-justify">
                                                                        {j["text"]}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        
                                                        )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                             <div class="col-span-2 gap-2 justify-center" style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                flexWrap: 'nowrap',
                                                justifyContent: 'center'
                                            }}>
                                                <p class="font-bold text-3xl" style={{
                                                    textShadow: '#fed000 1px 0 10px'
                                                }}>Bibliografia</p>
                                            </div>
                                            <div class="row-span-2 col-span-2 border-solid border-2 border-white-500 rounded-lg bg-red-200 p-2">
                                            <ul class="list-disc p-8">
                                                {
                                                    props?.lab?.bibliografia?.map(i => {
                                                        return (
                                                                <li class="text-xl">{i.ref} <span><a href={i.link} class="no-underline hover:underline">{i.link}</a></span></li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  function mapStateToProps(state){
    return{
        lab: state.lab
    }
  }
export default connect(mapStateToProps)(CardLab);