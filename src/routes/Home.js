import React from "react";
import { MenuLateral } from "../components/MenuLateral";
import { NavBarForm } from "../components/NavBar";
import imageLanding from "../Assets/sllider.svg"
import { Link } from "react-router-dom";


function Home() {
    return (
        <React.Fragment>

            <MenuLateral></MenuLateral>
            <section className="containerLanding" id="main">
                <NavBarForm></NavBarForm>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 p-5">
                            <h1>Welcome to our AI-powered text generator!</h1>
                            <h2 className="text-white mt-5">This platform allows you to generate text using different AI text generation tools, such as GPT-3 and others.</h2>

                            { /*
                                                        <p>
                            Whether you're writing a blog, research article, email, or any other type of text, our platform offers an easy and effective way to improve your writing.
                                Simply select the AI model you want to use and fill out the form to give the model an idea of what you want to write. Then, generate the text with a single click and refine the result as needed. It's that easy!

                                In addition, our platform also allows you to adjust the tone and temperature of the writing, to get personalized results that meet your specific needs.

                                Get started on writing better today!</p>
                            
                            */}
                            <div className="mt-5">
                                <Link to={"/chatGpt3"} className="btn btnEnviar btnEnviarOutlineDark">Get started</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-10 m-auto">
                                    <div className="mt-5">
                                        <img src={imageLanding} className="imageContainer" alt="imageLanding"></img>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </React.Fragment>

    );
}


export { Home }