import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");

  if (!secretKey || !webhookSecret || !signature) {
    return NextResponse.json({ erreur: "Requête refusée." }, { status: 400 });
  }

  const stripe = new Stripe(secretKey);
  const corps = await request.text();

  let evenement: Stripe.Event;
  try {
    evenement = stripe.webhooks.constructEvent(corps, signature, webhookSecret);
  } catch {
    return NextResponse.json({ erreur: "Signature invalide." }, { status: 400 });
  }

  if (evenement.type === "checkout.session.completed") {
    const session = evenement.data.object as Stripe.Checkout.Session;
    console.log(
      "Paiement confirmé :",
      session.id,
      session.customer_details?.email
    );
  }

  return NextResponse.json({ recu: true });
}
