import React from 'react';
import { IMAGES, VIDEOS } from "../constants"
import { Footer } from "../components"

function Home() {
    return (
        <div>
            <div style={{ height: 140, padding: "20px 5px" }} className="App">
                {/* Navbar */}
                <a href="/">
                    <img className="navbar-icon" src={IMAGES.Logo1} alt="Logo" />
                </a>

            </div>
            <div id="intro-1" className="row App" style={{ marginBottom: 70 }}>
                <div className="col-lg-6">
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
                <div className="col-lg-6">
                    <img className="img" style={{ marginTop: -20 }} src={IMAGES.Img1} alt="Delivery Img" />
                </div>
            </div>

            <div className="bg-yellow" id="intro-2" style={{ padding: "80px 0px 80px" }}>
                <div className="App" style={{ textAlign: "center" }}>
                    <img className="img" id="intro-2-img" src={IMAGES.Img2} alt="Delivery Img" />
                    <h2 className="txt-white">
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
                </h1><br />
                <div className="row">
                    <div className="col-lg-4">
                        <img className="img-grid" style={{ marginBottom: 15, marginTop: 15 }} src={IMAGES.Img3} alt="Delivery Img" />
                        <h4>
                            Choix de la niche et ses produits
                        </h4>
                        <h7>
                            Nous vous enverrons une liste des niches et des produits les plus rentables
                            parmi lesquels choisir.
                        </h7>
                    </div>
                    <div className="col-lg-4">
                        <img className="img-grid" style={{ marginBottom: 15, marginTop: 15 }} src={IMAGES.Img4} alt="Delivery Img" />
                        <h4>
                            Création de votre boutique
                        </h4>
                        <h7>
                            Une fois que vous aurez choisi votre niche et confirmé les produits, nous concevrons votre
                            boutique y ajouterons des produits et des descriptions,
                            et créerons pour vous des publicités vidéo à fort taux de conversion.
                        </h7>
                    </div>
                    <div className="col-lg-4">
                        <img className="img-grid" style={{ marginBottom: 15, marginTop: 15 }} src={IMAGES.Img5} alt="Delivery Img" />
                        <h4>
                            Finalisation
                        </h4>
                        <h7>
                            Dès que nous aurons terminé la boutique, nous vous l'enverrons pour examen, et si vous en êtes
                            satisfait, votre boutique est prête pour ses premières ventes !
                        </h7>
                    </div>
                </div><br />
                <a className="btn" href="#" >Obtenez votre magasin gagnant</a>
            </div>

            <div id="ad" className="row App">
                <div className="col-lg-6">
                    <img className="img" src={IMAGES.Img6} alt="Delivery Img" />
                </div>
                <div className="col-lg-6">
                    <h1>
                        Produits &<br /> Fournisseurs <span className="txt-yellow">gagnants</span>
                    </h1>
                    <h3>
                        Tous les produits sont déjà testés par des experts et ils se vendent bien. Vous obtiendrez
                        également un lien vers un fournisseur avec le délai de livraison le plus rapide.
                    </h3>
                    <a className="btn" href="#" >Obtenez votre magasin gagnant</a>
                </div>
            </div>

            <div className="bg-yellow" id="Video_ad" style={{ padding: "80px 0px 80px" }}>
                <div className="row App">
                    <div className="col-lg-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <h1 className="txt-white">
                            Vidéo publicitaire et contenu pour les réseaux sociaux.
                        </h1>
                        <h3 className="txt-white" style={{ fontWeight: 500 }}>
                            Vous obtiendrez des publicités vidéo à <br />forte conversion et un contenu accrocheur pour vos futurs abonnés.
                        </h3>
                        <div>
                            <a className="btn btn-black" href="#" >Obtenez votre magasin gagnant</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <video className="video" controls>
                            <source src={VIDEOS.Video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div id="support" className="row App">
                <div className="col-lg-6">
                    <img style={{ marginBottom: 20 }} className="img" src={IMAGES.Img7} alt="Delivery Img" />
                </div>
                <div className="col-lg-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h1>
                        <span className="txt-yellow">24/7</span> Accompagnement <br />et conseils.
                    </h1>
                    <h3>
                        Vous obtiendrez des instructions détaillées sur les étapes suivantes et
                        une assistance 24h/24 et 7j/7 pour toutes vos questions.
                    </h3>
                    <div>
                        <a className="btn" href="#" >Obtenez votre magasin gagnant</a>
                    </div>
                </div>
            </div>

            <div id="testimonials" className="App" style={{ padding: "50px 0px" }}>
                <h1 style={{ textAlign: "center" }}>
                    Ce que nos <span className="txt-yellow">clients</span> disent  de nous
                </h1>
                <h3 style={{ textAlign: "center" }}>⭐️⭐️⭐️⭐️⭐️ <span style={{ fontWeight: "bold" }}>Noté 4.9/5</span> - parmi plus de 50 avis</h3>
                <br /><br />
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div id="top-comment" >
                            <h4>
                                ⭐️⭐️⭐️⭐️⭐️
                            </h4>
                            <h5>
                                Boutiques Dropshipping complètes, produits gagnants, publicités vidéo,
                                stratégie marketing, meilleurs fournisseurs, et plus encore...
                            </h5>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 40 }}>
                                <div style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "#000", marginRight: 10 }}></div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <h7 style={{ fontWeight: "bold" }}>Evan Jenkins</h7>
                                    <h7>Last month's profit: $40.5k</h7>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h4>
                            ⭐️⭐️⭐️⭐️⭐️
                        </h4>
                        <h5>
                            Boutiques Dropshipping complètes, produits gagnants, publicités vidéo,
                            stratégie marketing, meilleurs fournisseurs, et plus encore...
                        </h5>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 40 }}>
                            <div style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "cyan", marginRight: 10 }}></div>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <h7 style={{ fontWeight: "bold" }}>Evan Jenkins</h7>
                                <h7>Last month's profit: $40.5k</h7>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h4>
                            ⭐️⭐️⭐️⭐️⭐️
                        </h4>
                        <h5>
                            Boutiques Dropshipping complètes, produits gagnants, publicités vidéo,
                            stratégie marketing, meilleurs fournisseurs, et plus encore...
                        </h5>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 40 }}>
                            <div style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "#fdd925", marginRight: 10 }}></div>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <h7 style={{ fontWeight: "bold" }}>Evan Jenkins</h7>
                                <h7>Last month's profit: $40.5k</h7>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div id="site-showcase" className="App" style={{ padding: "50px 0px 0px", textAlign: "center" }}>
                <h1>
                    Exemples de <span className="txt-yellow">boutique</span>
                </h1>
                <h3>Rivaliser avec les plus grandes marques.</h3>
                <br /><br />
                <div className="row">
                    <div className="col-md-4" style={{ textAlign: "center" }}>
                        <img style={{ marginBottom: 20 }} className="img-round" src={IMAGES.Img5} alt="Delivery Img" />
                        <div className="showcase-title-div">
                            <h4>Gonflorax</h4>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ textAlign: "center" }}>
                        <img style={{ marginBottom: 20 }} className="img-round" src={IMAGES.Img3} alt="Delivery Img" />
                        <div className="showcase-title-div">
                            <h4>Talitha Koumi</h4>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ textAlign: "center" }}>
                        <img style={{ marginBottom: 20 }} className="img-round" src={IMAGES.Img4} alt="Delivery Img" />
                        <div className="showcase-title-div">
                            <h4>Nathan Peke</h4>
                        </div>
                    </div>
                </div> <br />
                <a className="btn" href="#" >Obtenez votre magasin gagnant</a>
            </div>
            <div id="pricig" className="App" style={{ padding: "50px 0px", textAlign: "center" }}>
                <h1>
                    <span className="txt-yellow">Tarifs</span> et forfaits
                </h1>
                <br /><br />
                <div className="row">
                    <div className="col-md-6" style={{ marginBottom: 40 }}>
                        <div className="pricing-card" style={{ position: "relative" }}>
                            <h2 style={{ fontWeight: "bolder" }}>
                                Boutique <br />monoproduit
                            </h2><br />
                            <div style={{ textAlign: "left" }}>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <h2 className="txt-white" style={{ fontWeight: "bolder" }}>
                                        $249.00
                                    </h2>
                                    <h4 style={{ marginLeft: 15, textDecoration: "line-through" }}>
                                        800$
                                    </h4>
                                </div>
                                <h5>
                                    Paiement unique
                                </h5>
                                <ul>
                                    <li className="txt-white">1 Winning product</li>
                                    <li className="txt-white">Ready in 7 days</li>
                                    <li className="txt-white">Niche Research</li>
                                    <li className="txt-white">Video Ad & Ad Copy</li>
                                    <li className="txt-white">Marketing strategy & Target audience</li>
                                    <li className="txt-white">Branding, Logo and Icon</li>
                                    <li className="txt-white">Conception réactive </li>
                                    <li className="txt-white">Processeur de paiement</li>
                                    <li className="txt-white">15 x posts pour les réseaux sociaux</li>
                                    <li className="txt-white">SEO et optimisation de la vitesse</li>
                                    <li className="txt-white">Top fournisseurs</li>
                                    <li className="txt-white">Assistance et conseils à vie</li>
                                </ul>
                            </div><br /><br /><br />
                            <div style={{ position: 'absolute', bottom: 30, left: 0, width: '100%' }}>
                                <a style={{ marginBottom: 0 }} className="btn btn-black" href="#" >Obtenez votre magasin gagnant</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ marginBottom: 40 }}>
                        <div className="pricing-card" style={{ backgroundColor: "#000", position: "relative" }}>
                            <h2 className="txt-yellow" style={{ fontWeight: "bolder" }}>
                                Niche store
                            </h2><br /><br />
                            <div style={{ textAlign: "left" }}>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <h2 className="txt-white" style={{ fontWeight: "bolder" }}>
                                        $449.00
                                    </h2>
                                    <h4 className="txt-white" style={{ marginLeft: 15, textDecoration: "line-through" }}>
                                        1000$
                                    </h4>
                                </div>
                                <h5 className="txt-white">
                                    Paiement unique
                                </h5>
                                <ul>
                                    <li className="txt-white">1 Winning product</li>
                                    <li className="txt-white">Ready in 7 days</li>
                                    <li className="txt-white">Niche Research</li>
                                    <li className="txt-white">Video Ad & Ad Copy</li>
                                    <li className="txt-white">Marketing strategy & Target audience</li>
                                    <li className="txt-white">Branding, Logo and Icon</li>
                                    <li className="txt-white">Conception réactive </li>
                                    <li className="txt-white">Processeur de paiement</li>
                                    <li className="txt-white">15 x posts pour les réseaux sociaux</li>
                                    <li className="txt-white">SEO et optimisation de la vitesse</li>
                                    <li className="txt-white">Top fournisseurs</li>
                                    <li className="txt-white">Assistance et conseils à vie</li>
                                </ul>
                            </div><br /><br /><br />
                            <div style={{ position: 'absolute', bottom: 30, left: 0, width: '100%' }}>
                                <a style={{ marginBottom: 0 }} className="btn" href="#" >Obtenez votre magasin gagnant</a>
                            </div>
                        </div>
                    </div>
                </div><br /><br /><br />
                <div className="row" id="payment-wrapper">
                    <div className="col-lg-1 col-12 noShow"></div>
                    <div className="col-lg-2 col-6"><img className="logo-payment" src={IMAGES.Img8} alt="Delivery Img" /></div>
                    <div className="col-lg-2 col-6"><img className="logo-payment" src={IMAGES.Img9} alt="Delivery Img" /></div>
                    <div className="col-lg-2 col-4"> <img className="logo-payment" src={IMAGES.Img10} alt="Delivery Img" /></div>
                    <div className="col-lg-2 col-4"><img className="logo-payment" id="m-pesa" src={IMAGES.Img11} alt="Delivery Img" /></div>
                    <div className="col-lg-2 col-4"><img className="logo-payment" id="airtel-money" src={IMAGES.Img12} alt="Delivery Img" /></div>
                    <div className="col-lg-1 col-12 noShow"></div>
                </div>
            </div><br />

            <Footer />
        </div>
    );
}

export default Home;