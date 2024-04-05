import { useEffect } from "react";
import Navbar from "./Navbar";
const Success = () => {

    return (
        <>
            <div>
                <Navbar />

                <div className="mx-auto text-center mt-[50px]">
                    <h1>Payment Successfull</h1>
                    <div>
                        <ul>
                            <li className="font-semibold">Name: {localStorage.getItem('firstName')}</li>
                            <li className="font-semibold">Deliver To: {localStorage.getItem('address')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Success;