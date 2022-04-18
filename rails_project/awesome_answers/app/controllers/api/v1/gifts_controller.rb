class Api::V1::GiftsController < Api::ApplicationController

    def create
        # generate a new gift => with stauts `pending`
        # if this gift can be saved into the db
        gift = Gift.new(amount: params[:amount])
        answer = Answer.find_by_id(params[:answer_id])
        gift.sender = current_user
        gift.answer = answer
        gift.receiver = answer.user
        gift.status = "pending"
        if gift.save
            # => generate a stripe request to send to stripe tell them to charge this customer
            Stripe.api_key = 'sk_test_51JypOyKP3mgCg2b0AUqZvvelzlG64Us10pW7B5dXh0jDaASjcqQRzxnXKuQfiiYSgoiQLPm48EsMOeIOWETmje9H00pogrEwt7'
            # Token is created using Stripe Checkout or Elements!
            # Get the payment token ID submitted by the form:
            byebug
            token = params[:stripeToken]
            charge = Stripe::Charge.create({
                amount: params[:amount],
                currency: 'usd',
                description: 'Gift this answer',
                source: token,
            })
            byebug
            # => if it's paid => set the status to `success` => response success to the front-end
            if charge&.paid
                gift.update(status: "success", payment_id: charge.id)
                render(json:{status:200, msg: "success"})
            else # => otherwise => set the status to `failed` => response failed to the front-end
                gift.update(status: "failed")
                render(json:{status:500, msg: "failed"})
            end
        else
            render(json:{status: 401, msg: "check the params"})
        end
    end
    
end
