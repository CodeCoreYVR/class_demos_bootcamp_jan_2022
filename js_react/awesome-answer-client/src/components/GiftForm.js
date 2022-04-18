import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { Gift } from '../requests'
const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};
function GiftForm(props) {
    const stripe = useStripe();
    const elements = useElements();
    const [amount, setAmount] = useState(0);
    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make  sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);

        if (result.error) {
            // Show error to your customer.
            console.log(result.error.message);
        } else {
            // Send the token to your server.
            // This function does not exist yet; we will define it in the next step.
            // result.token
            const answer_id = props.answer_id;
            Gift.create({ amount: amount, answer_id: answer_id, stripeToken: result.token.id })
                .then(data => {
                    console.log(data)
                })
        }
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Amount</label>
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            <input type="submit" value="Gift" />
        </form>
    )
}

export default GiftForm