import React, {useEffect, useState} from "react"

import {FaGithubAlt} from "react-icons/fa"
import {IoIosPaper} from "react-icons/io"
import {TbCertificate} from "react-icons/tb"

import { xummConfig, whitepaperUrl } from "../env"

const Footer = ({xummAppDetails}) => {

    let [version, setVersion] = useState("0.1.3");
    let [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Footer useEffect", count);
        let cv = count+1;
        setCount(cv); 
    },[]);

    return (
        <footer className="sticky top-[100vh] text-white bg-slate-900">
            {/* {xummAppDetails ? <>got details</> : <>no details</>} */}

            <div className="p-6 w-full">
                <div className="grid gap-x-0.8 grid-cols-1 md:grid-cols-2">
                    <div className="mb-6 sm:w-full md:w-1/2">
                        <h5 className="text-pink-300 font-bold text-lg">xurlpay.org</h5>
                        <div className="font-bold font-mono text-slate-400">v{version}</div>
                        <div className="text-slate-900 rounded-lg bg-pink-200 w-fit pr-1 pl-1">{xummConfig.xrp_network}</div>
                        <div>xApp Reference implementation of the <span className="font-bold text-pink-500">xURL</span> protocol for XRP.
                        </div>                                                            
                    </div>

                    <div className="mb-6">
                        <h5 className="mb-2.5 font-bold uppercase text-slate-300">Links</h5>
                        <ul className="mb-0 list-none space-y-2">
                            <li><a href="https://github.com/claytantor/xrpl-poc-python" target="_new" className="text-slate-200 underline flex justify-left items-center"> <FaGithubAlt className="mr-1"/> Github Repo</a></li>
                            <li><a href={whitepaperUrl} target="_new" className="text-slate-200 underline flex justify-left items-center"> <IoIosPaper className="mr-1"/> Whitepaper</a></li>
                            <li><a href="https://github.com/claytantor/xrpl-poc-python/blob/main/LICENCE.md" target="_new" className="text-slate-200 underline flex justify-left items-center"> <TbCertificate className="mr-1"/> License</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </footer>
    );
  };
  
export default Footer