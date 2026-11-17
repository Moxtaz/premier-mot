const benefices = [
  {
    titre: "Une base remplie en 10 minutes",
    texte:
      "Vous y mettez vos questions fréquentes une seule fois : livraison, retours, délais, tailles.",
  },
  {
    titre: "Une réponse en 1 clic",
    texte:
      "La bonne réponse est proposée. Vous la modifiez si besoin, puis vous l'envoyez.",
  },
  {
    titre: "Vos temps morts chiffrés",
    texte:
      "Vous voyez les questions les plus fréquentes et le temps gagné chaque semaine.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-28 pt-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-encre/70">
        Premier Mot
      </p>

      <h1 className="mt-4 font-titre text-4xl font-extrabold leading-tight">
        Répondez en 1 clic aux 10 questions que vos clients vous posent chaque
        jour.
      </h1>

      <p className="mt-4 text-lg">
        Fini les mêmes réponses retapées à la main, message après message.
      </p>

      <section className="mt-10 border-l-4 border-rouge pl-4">
        <p className="font-titre text-5xl font-extrabold text-rouge">
          7 h par mois
        </p>
        <p className="mt-2">
          C&rsquo;est le temps que représentent 10 réponses par jour à 2 minutes
          chacune, sur 22 jours ouvrés. Un temps qui n&rsquo;est facturé nulle
          part.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-titre text-2xl font-semibold">
          Ce que Premier Mot change
        </h2>
        <ul className="mt-4 space-y-5">
          {benefices.map((b) => (
            <li key={b.titre}>
              <p className="font-semibold">{b.titre}</p>
              <p className="mt-1">{b.texte}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <a
          href="/commencer"
          className="block rounded-lg bg-rouge px-6 py-4 text-center text-lg font-semibold text-white"
        >
          Commencer, c&rsquo;est gratuit
        </a>
        <p className="mt-3 text-center text-sm">
          Sans carte bancaire. Votre premier résultat en 2 minutes.
        </p>
      </section>
    </main>
  );
}
