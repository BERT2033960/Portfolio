import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-neutral-900 text-white px-0 mx-0 text-center">

      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl mb-6">Page non trouvée</h2>
      <p className="text-neutral-400 mb-6">
        Oups ! La page que vous recherchez n’existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="rounded-md bg-emerald-500 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;
