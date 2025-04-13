export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Ilan Assouline. Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="/mentions-legales"
              className="text-gray-600 hover:text-primary text-sm"
            >
              Mentions légales
            </a>
            <a
              href="/politique-confidentialite"
              className="text-gray-600 hover:text-primary text-sm"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
