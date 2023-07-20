import React, {  } from "react";
import styles from "./Home.modules.css";
 
function Home()
{
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1>Bem vindo ao <span>Desafio CRUD/API</span></h1>
                    </div>
                    <div className="col-md-12">
                        <p>
                            Feito para o desafioPHP da pbsoft!
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Home;