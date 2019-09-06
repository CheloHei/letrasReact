import React, { Fragment } from 'react';

const Artista = ({ info }) => {
    if (Object.keys(info).length === 0) return null;

    return (
        <Fragment>
            <div className="card border-light">
                <div className="card-header bg-primary text-light font-weight-bold">
                    Info del Artista
                </div>
                <div className="card-body">
                    <img src={info.strArtistThumb} alt="Imagen del artista" />
                    <p className="card text">Género: {info.strGenre}</p>
                    <h2 className="card-text text-center">Biografia</h2>
                    <p className="card-text">{info.strBiographyES}</p>
                    <div className="card-text">
                        <a href={`http://${info.strFacebook}`} target="_blank" rel="noopener noreferrrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href={`http://${info.strTwitter}`} target="_blank" rel="noopener noreferrrer">
                            <i className="fab fa-twitter"></i>
                        </a>

                    </div>
                    
                </div>
            </div>
        </Fragment>
    );
};

export default Artista;