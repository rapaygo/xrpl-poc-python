import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";

import { SiXrp } from 'react-icons/si';

import icon32 from "../assets/favicon_io/favicon-32x32.png"

import { AuthenticationService, getUser, setUser, getAccessTokenInfo, disconnect } from '../services/AuthenticationService';

const Header = ({
    useStore,
    children,
  }) => {

    const navigate = useNavigate();

    const [tokenInfo, setTokenInfo] = useState(getAccessTokenInfo(getUser()));
    const [userIsCached, setUserIsCached] = useState();

    useEffect(() => {
        console.log("useEffect", tokenInfo);
        let isCachedUser = AuthenticationService.isCachedUser();
        setUserIsCached(isCachedUser);

    } , [tokenInfo]);

    let logout = (e) => {
        e.preventDefault();
        disconnect();
        // setUser(null);
        setTokenInfo(null);
        // window.location.reload();
        navigate("/");
    }

    return (
      <div className="w-full">
            
            <nav className="flex flex-col md:flex-row items-center justify-between bg-pink-700 p-3">
                <div className="flex w-full md:w-1/2">
                    <img src={icon32} alt="icon32" className="w-12" />
                    <span className="ml-2 mt-2 items-center font-semibold text-2xl tracking-tight text-white" onClick={()=>navigate('/')}>xurlpay.org</span></div>
                <div className="flex flex-row md:w-1/2 justify-end w-full">
                    <div className="mr-3" onClick={()=>window.location.href='https://github.com/claytantor/xrpl-poc-python/blob/main/docs/whitepaper.md'}>
                        <button className="block mt-4 md:inline-block md:mt-0 text-white hover:underline cursor-pointer">
                        White Paper
                        </button> 
                    </div>
                    <div className="mr-3 text-white">
                        {userIsCached ? <>User Is Cached</> : <>User Not Cached</>} 
                    </div>

                    {/* ==== IN ==== */}
                    {userIsCached ? <>
                            <div><button className="mr-1 inline-block text-sm px-4 py-2 leading-none border rounded-xl text-white border-white hover:border-transparent hover:text-pink-500 hover:bg-white mt-4 md:mt-0" onClick={(e)=>logout(e)}>Logout</button ></div>
                        </> :
                        <><div><button className="mr-1 inline-block text-sm px-4 py-2 leading-none border rounded-xl text-white border-white hover:border-transparent hover:text-pink-500 hover:bg-white mt-4 md:mt-0" onClick={()=>navigate('/create')}>Create Wallet</button></div>
                        <div><button className="inline-block text-sm px-4 py-2 leading-none border rounded-xl text-white border-white hover:border-transparent hover:text-pink-500 hover:bg-white mt-4 md:mt-0" onClick={()=>navigate('/login')}>Login</button></div></>
                    }                   
                </div>

        
            </nav>
            {tokenInfo  && tokenInfo.active &&
            <div className="w-full bg-pink-200 flex flex-wrap justify-end p-1">
                <button className="mr-1 inline-block text-sm px-4 py-2 leading-none border rounded-xl text-slate-800 border-slate-800 hover:border-transparent hover:text-pink-100 hover:bg-slate-800 mt-4 md:mt-0" onClick={()=>navigate('/wallet')}>Wallet</button >
                <button className="mr-1 inline-block text-sm px-4 py-2 leading-none border rounded-xl text-slate-800 border-slate-800 hover:border-transparent hover:text-pink-100 hover:bg-slate-800 mt-4 md:mt-0" onClick={()=>navigate('/receive')}>Payment Request</button >
                <button className="mr-1 inline-block text-sm px-4 py-2 leading-none border rounded-xl text-black border-black hover:border-transparent hover:text-pink-100 hover:bg-slate-800 mt-4 md:mt-0" onClick={()=>navigate('/send')}>Scan To Pay</button >
                
                
            </div>}




      </div>
    );
  };
  
export default Header