import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  button_text: string;
  highlight: boolean;
  order_index: number;
}

export const usePricingPlans = () => {
  return useQuery({
    queryKey: ["pricing-plans"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pricing_plans")
        .select("*")
        .order("order_index", { ascending: true });
      
      if (error) {
        // If the table doesn't exist yet, we'll return null so the component can use fallbacks
        console.error("Error fetching pricing plans:", error);
        return null;
      }
      
      return data as PricingPlan[];
    },
  });
};