const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Studio. All rights reserved.
        </span>
        <span className="label-text text-muted-foreground">
          Image Editor & Game Developer
        </span>
      </div>
    </footer>
  );
};

export default Footer;
