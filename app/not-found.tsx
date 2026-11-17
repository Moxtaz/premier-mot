export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-5 py-20">
      <p className="font-titre text-5xl font-extrabold">404</p>
      <h1 className="mt-4 font-titre text-3xl font-extrabold leading-tight">
        Cette page n&rsquo;existe pas.
      </h1>
      <p className="mt-4 text-lg">
        Le lien est peut-être erroné, ou la page a été déplacée.
      </p>
      <a
        href="/"
        className="mt-8 block rounded-lg bg-rouge px-6 py-4 text-center text-lg font-semibold text-white"
      >
        Retour à l&rsquo;accueil
      </a>
    </main>
  );
}
