import React from 'react';
import { IMAGES } from "../constants"

function Home() {
    return (
        <div>
            <div style={{ height: 140, padding: "20px 5px" }} className="App">
                {/* Navbar */}
                <img className="navbar-icon"  src={IMAGES.Logo1} alt="Logo" />

            </div>
            <div id="intro-1" className="row App">
                <div className="col-md-6">
                    <h1>
                        Nous concevons des <br />marques <span className="txt-yellow">Ecommerce</span> à <br />succès.
                    </h1>
                    <h3>
                        Boutiques Dropshipping complètes, produits <br />gagnants, publicités vidéo, stratégie marketing, meilleurs fournisseurs, et plus encore...
                    </h3>
                    <div style={{ display: 'flex' }}>
                        <a className="btn" href="#" >Obtenez votre magasin gagnant</a>
                        <a style={{ marginLeft: 20 }} className="btn btn-outlined" href="#" >Comment ça marche ?</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img" style={{ marginTop: -80 }} src={IMAGES.Img1} alt="Delivery Img" />
                </div>
            </div>

            <div className="bg-yellow" id="intro-2" style={{ padding: "0px 0px 80px" }}>
                <div className="App" style={{ textAlign: "center" }}>
                    <img className="img" style={{ width: "40%" }} src={IMAGES.Img2} alt="Delivery Img" />
                    <h2 style={{ marginTop: -110 }} className="txt-white">
                        Nous concevons des boutiques <span className="txt-black">Dropshipping</span>
                        complète, ajoutons des produits <span className="txt-black">gagnants</span>,
                        créons des publicités vidéo pour chaque produit et
                        créons du <span className="txt-black">contenu</span> pour les réseaux sociaux.
                    </h2><br />
                    <h3 className="txt-white">
                        24/7 Accompagnement et conseils.
                    </h3>
                </div>
            </div>

            <div id="how-does-it-work" className="App" style={{ textAlign: "center", padding: "77px 0px" }}>
                <h1>
                    Comment ça marche ?
                </h1>
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-grid" src={IMAGES.Img3} alt="Delivery Img" />
                        <h4>
                            Choix de la niche et ses produits
                        </h4>
                        <h7>
                            Nous vous enverrons une liste des niches et des produits les plus rentables
                            parmi lesquels choisir.
                        </h7>
                    </div>
                    <div className="col-md-4">
                        <img className="img-grid" src={IMAGES.Img4} alt="Delivery Img" />
                        <h4>
                            Création de votre boutique
                        </h4>
                        <h7>
                            Une fois que vous aurez choisi votre niche et confirmé les produits, nous concevrons votre
                            boutique y ajouterons des produits et des descriptions,
                            et créerons pour vous des publicités vidéo à fort taux de conversion.
                        </h7>
                    </div>
                    <div className="col-md-4">
                        <img className="img-grid" src={IMAGES.Img5} alt="Delivery Img" />
                        <h4>
                            Finalisation
                        </h4>
                        <h7>
                        Dès que nous aurons terminé la boutique, nous vous l'enverrons pour examen, et si vous en êtes 
                        satisfait, votre boutique est prête pour ses premières ventes !
                        </h7>
                    </div>
                </div><br/>
                <a className="btn" href="#" >Obtenez votre magasin gagnant</a>
            </div>
        </div>
    );
}

export default Home;