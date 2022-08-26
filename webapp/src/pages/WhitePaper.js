import React, {useEffect, useState } from "react"
import QRCode from "react-qr-code";

import Page  from "../components/Page"
import { WalletService } from "../services/WalletService"

// import helloHtml from "../assets/html/hello.html"

const WhitePaper = ({useStore}) => {


    return (
        <>
        <Page useStore={useStore}> 
            <div className="p-4"> 
                <h2 className="text-2xl">White Paper</h2>
                <p className="text-lg">
                    This is the white paper.
                </p>
                <div>

                </div>
            </div>
        </Page> 
        </>

    )
}

export default WhitePaper