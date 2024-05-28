import SectionTitle from "../../components/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import Checkout from "./Checkout";

//TODO: 
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={"Please pay to eat"} ></SectionTitle>
            <div>
                <Elements stripe={stripePromise} >
                    <Checkout />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;