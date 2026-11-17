export const metadata = {
  title: "Merci · Premier Mot",
};

export default function Merci() {
  return (
    <main className="mx-auto max-w-xl px-5 py-16">
      <h1 className="font-titre text-4xl font-extrabold leading-tight">
        Merci, votre paiement est en cours de confirmation.
      </h1>
      <p className="mt-4 text-lg">
        Vous recevrez un e-mail de Stripe avec votre reçu. Votre accès à
        Premier Mot sera ouvert dès que le paiement sera confirmé.
      </p>
      <p className="mt-4">
        Une question ? Écrivez-nous par e-mail : nous répondons sous 48 heures.
      </p>
      <a href="/" className="mt-8 block font-semibold text-rouge underline">
        Retour à l&rsquo;accueil
      </a>
    </main>
  );
}
