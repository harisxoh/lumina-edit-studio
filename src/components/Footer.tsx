import { Coffee, DollarSign } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-2">Studio</h3>
            <p className="text-muted-foreground text-sm max-w-[300px]">
              Professional image editing and post-production for photographers and brands.
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            <span className="label-text text-muted-foreground">
              Image Editor & Game Developer
            </span>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Studio. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;