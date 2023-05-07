import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST (request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json();
    let priceId = data.priceId
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
      mode: 'payment',
      success_url: 'http://localhost:3000',
      cancel_url: 'http://localhost:3000'
    })

    return NextResponse.json(session.url)
}