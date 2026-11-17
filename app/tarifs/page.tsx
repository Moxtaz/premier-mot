export const metadata = {
  title: "Tarifs · Premier Mot",
  description:
    "Premier Mot : 39 € par mois, sans engagement, satisfait ou remboursé 14 jours.",
};

const questions = [
  {
    q: "Est-ce que ça marche pour ma boutique ?",
    r: "Si vos clients vous posent souvent les mêmes questions (livraison, retours, délais, tailles), oui. Vous remplissez votre base avec vos propres réponses : l'outil ne s'adapte pas à vous, c'est vous qui le configurez en 10 minutes.",
  },
  {
    q: "Combien de temps ça me prend ?",
    r: "Environ 10 minutes pour remplir votre base de questions fréquentes. Ensuite, chaque réponse se propose en 1 clic et reste modifiable avant l'envoi.",
  },
  {
    q: "Et si je veux arrêter ?",
    r: "Vous résiliez à tout moment, sans justification. Et pendant 14 jours, si Premier Mot ne vous convient pas, envoyez-nous un e-mail : nous vous remboursons sous 5 jours ouvrés.",
  },
  {
    q: "À quoi sert exactement ce que je paie ?",
    r: "À accéder à votre base de questions fréquentes, aux réponses en 1 clic, à la détection des nouvelles questions et à vos statistiques de temps gagné. Le quota de réponses est généreux.",
  },
];

export default function Tarifs({
  searchParams,
}: {
  searchParams: Promise<{ paiement?: string }>;
}) {
  return <Contenu searchParams={searchParams} />;
}

async function Contenu({
  searchParams,
}: {
  searchParams: Promise<{ paiement?: string }>;
}) {
  const { paiement } = await searchParams;

  return (
    <main className="mx-auto max-w-xl px-5 pb-16 pt-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-encre/70">
        Premier Mot
      </p>

      {paiement === "echec" && (
        <div
          role="alert"
          className="mt-4 rounded-lg border-2 border-encre bg-white p-4"
        >
          <p className="font-semibold">Le paiement n&rsquo;a pas abouti.</p>
          <p className="mt-1">
            Aucun montant n&rsquo;a été débité. Vous pouvez réessayer, ou nous
            écrire si le problème persiste.
          </p>
        </div>
      )}

      <h1 className="mt-4 font-titre text-4xl font-extrabold leading-tight">
        Votre base de réponses est prête. Gardez-la.
      </h1>

      <section className="mt-8 border-l-4 border-rouge pl-4">
        <p className="font-titre text-5xl font-extrabold text-rouge">
          7 h par mois
        </p>
        <p className="mt-2">
          C&rsquo;est le temps que vous récupérez avec 10 réponses par jour à 2
          minutes chacune, sur 22 jours ouvrés. Premier Mot coûte 39 € par mois.
        </p>
      </section>

      <section className="mt-8 rounded-lg border-2 border-encre bg-white p-5">
        <p className="font-semibold">Premier Mot, formule mensuelle</p>
        <p className="mt-2 font-titre text-5xl font-extrabold">
          39 €
          <span className="text-xl font-semibold"> / mois</span>
        </p>
        <p className="mt-1">Soit environ 1,30 € par jour.</p>

        <p className="mt-4 rounded-md bg-creme p-3 font-semibold">
          Satisfait ou remboursé pendant 14 jours. Écrivez-nous par e-mail :
          remboursement sous 5 jours ouvrés.
        </p>

        <form action="/api/checkout" method="post" className="mt-5">
          <button
            type="submit"
            className="block w-full rounded-lg bg-rouge px-6 py-4 text-center text-lg font-semibold text-white"
          >
            Payer 39 € par mois
          </button>
        </form>
        <p className="mt-3 text-center text-sm">
          Sans engagement, résiliable à tout moment.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-titre text-2xl font-semibold">
          Vos questions
        </h2>
        <div className="mt-4 space-y-6">
          {questions.map((item) => (
            <div key={item.q}>
              <p className="font-semibold">{item.q}</p>
              <p className="mt-1">{item.r}</p>
            </div>
          ))}
        </div>
      </section>

      <a href="/" className="mt-12 block font-semibold text-rouge underline">
        Retour à l&rsquo;accueil
      </a>
    </main>
  );
}
