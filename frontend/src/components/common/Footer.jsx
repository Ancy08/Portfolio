function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto flex justify-center">
        <p className="text-center">
          © {new Date().getFullYear()} Ancy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
