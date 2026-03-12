import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface PricingPlan {
  id: string;
  name: string;
  price: string | number;
  description: string;
  features: string[];
  button_text?: string;
  highlight?: boolean;
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
        console.error("Error fetching pricing plans:", error);
        return null;
      }
      
      // Ensure price is formatted correctly if it's a number from the DB
      return data.map(plan => ({
        ...plan,
        price: typeof plan.price === 'number' ? `$${plan.price}` : plan.price,
        button_text: plan.button_text || "Get Started",
        highlight: !!plan.highlight
      })) as PricingPlan[];
    },
  });
};