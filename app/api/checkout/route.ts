import Stripe from "stripe";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY?.trim();
  const priceId = process.env.STRIPE_PRICE_ID?.trim();

  const manquantes: string[] = [];
  if (!secretKey) manquantes.push("STRIPE_SECRET_KEY");
  if (!priceId) manquantes.push("STRIPE_PRICE_ID");

  if (!secretKey || !priceId) {
    return NextResponse.json(
      { erreur: "Variables manquantes", manquantes },
      { status: 500 }
    );
  }

  const origin = new URL(request.url).origin;
  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/merci`,
      cancel_url: `${origin}/tarifs?paiement=echec`,
      locale: "fr",
    });

    if (!session.url) {
      throw new Error("Pas d'adresse de paiement");
    }

    return NextResponse.redirect(session.url, 303);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erreur inconnue";
    return NextResponse.json(
      { erreur: "Stripe a refusé la demande", detail: message },
      { status: 500 }
    );
  }
}
