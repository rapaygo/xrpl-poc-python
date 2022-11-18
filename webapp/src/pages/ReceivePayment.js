import React, {useEffect, useState } from "react"
// import QRCode from "react-qr-code";

import Page  from "../components/Page"
import PaymentRequest from "../components/PaymentRequest";
import PaymentRequestForm from "../components/PaymentRequestForm";


const ReceivePayment = ({xumm, xummState, setXummState}) => {
    
    const [paymentRequest, setPaymentRequest] = useState();

    return (
        <>
        <Page withSidenav={true} 
            xumm={xumm} 
            setXummState={setXummState} 
            xummState={xummState}> 
            <div className="p-4"> 
                <div className="p-1 flex w-full justify-center">
                {paymentRequest ? <PaymentRequest xummState={xummState} paymentRequest={paymentRequest} setPaymentRequest={setPaymentRequest}/>:
                <PaymentRequestForm setPaymentRequest={setPaymentRequest}/>}
                </div>
            </div>
        </Page> 
        </>
    )
}

export default ReceivePayment