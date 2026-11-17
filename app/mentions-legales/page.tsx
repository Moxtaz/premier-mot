export const metadata = {
  title: "Mentions légales · Premier Mot",
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-xl px-5 py-12">
      <h1 className="font-titre text-3xl font-extrabold leading-tight">
        Mentions légales
      </h1>

      <h2 className="mt-8 font-titre text-xl font-semibold">Éditeur du site</h2>
      <p className="mt-2">
        Premier Mot est édité par [PRÉNOM NOM OU RAISON SOCIALE], [FORME
        JURIDIQUE, ex. entrepreneur individuel], SIRET [NUMÉRO SIRET], dont le
        siège est situé [ADRESSE COMPLÈTE].
      </p>
      <p className="mt-2">
        Contact : [ADRESSE E-MAIL DE CONTACT]. Directeur de la publication :
        [PRÉNOM NOM].
      </p>

      <h2 className="mt-8 font-titre text-xl font-semibold">Hébergement</h2>
      <p className="mt-2">
        Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina,
        CA 91723, États-Unis. Les données sont stockées par Supabase.
      </p>

      <h2 className="mt-8 font-titre text-xl font-semibold">
        Propriété intellectuelle
      </h2>
      <p className="mt-2">
        Les contenus du site (textes, graphismes, logo) sont la propriété de
        l&rsquo;éditeur. Toute reproduction sans autorisation est interdite.
      </p>

      <h2 className="mt-8 font-titre text-xl font-semibold">Données personnelles</h2>
      <p className="mt-2">
        Le traitement de vos données est décrit dans notre politique de
        confidentialité, qui sera publiée avant l&rsquo;ouverture des ventes.
      </p>

      <a href="/" className="mt-10 block font-semibold text-rouge underline">
        Retour à l&rsquo;accueil
      </a>
    </main>
  );
}
