import React from 'react';

const HomePage = () => {
    return (
        <>
            <div className="container text-center" style={{ padding: "50px" }}>
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <img
                            src="tienda.jpg"
                            alt="Imagen de la tienda"
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div className="row justify-content-md-center mt-4">
                    <div className="col-md-8">
                        <h1>Tienda MI FAVORITA</h1>
                        <p className="lead">
                            Bienvenido a la tienda de laptops que tanto te gusta. En
                            nuestra tienda, ofrecemos una amplia variedad de laptops de
                            última generación para satisfacer todas tus necesidades
                            tecnológicas.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
