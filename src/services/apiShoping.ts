import supabase from "./supabase";

export async function getShops() {
  const { data, error } = await supabase.from("shop").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
