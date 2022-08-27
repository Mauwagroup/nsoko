import React from 'react'
import { IMAGES } from "../constants"

export default function Footer() {
    return <div>
        <div className="App flexDiv" id="footer-container" style={{ justifyContent: 'space-between', paddingTop: 25, paddingBottom: 25 }}>
            <div className="flexDiv" id="footer-top" style={{ justifyContent: "flex-start", width: "auto" }}>
                <img style={{ height: 35, marginRight: 10 }} src={IMAGES.Img13} alt="CopyRight Image" />
                <h7 className="txt-grey" style={{ fontSize: 15 }}>All right reserved Nsoko™|Powered by @MauwaGroup</h7>
            </div>
            <div id="footer-bottom1" className="flexDiv" style={{ justifyContent: "flex-end", width: "auto" }}>
                <a className="footer-link" href="#"><h5>Terms and Conditions</h5></a>
                <a className="footer-link" href="#"><h5>Purchase Agreement</h5></a>
                <a className="footer-link" href="#"><h5>Privacy Policy</h5></a>
                <a className="footer-link" href="#"><h5>Refund Policy</h5></a>
            </div>
            <div id="footer-bottom2">
                <a className="footer-link" href="#"><h5>Terms and Conditions</h5></a>
                <a className="footer-link" href="#"><h5>Purchase Agreement</h5></a>
                <a className="footer-link" href="#"><h5>Privacy Policy</h5></a>
                <a className="footer-link" href="#"><h5>Refund Policy</h5></a>
            </div>
        </div>
    </div>
}