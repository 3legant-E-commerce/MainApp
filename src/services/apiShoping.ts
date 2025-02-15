import supabase, { supabaseUrl } from "./supabase";

export async function getShops() {
  const { data, error } = await supabase.from("shop").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function CreateEditShop(newShop) {
  // https://ejnqnprxcxrkuuaiqdzw.supabase.co/storage/v1/object/public/shop-images//bed-02.png

  const ImageName = `${Math.random()}-${newShop.image.name}`;
  const ImagePath = `${supabaseUrl}/storage/v1/object/public/shop-images/${ImageName}`;
  // 1. Create Shop
  const { data, error } = await supabase
    .from("shop")
    .insert([{ ...newShop, image: ImagePath }]);
  // .select();

  if (error) {
    console.error(error);
    throw new Error("Shops could not be Created");
  }

  // 2. Upload image
  const { error: storageError } = await supabase.storage
    .from("shop-images")
    .upload(ImageName, newShop.image);

  // 3.Delete shop if there was an error uploading image
  if (storageError) {
    await supabase.from("shop").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Shops image could not be uploaded and the shop is not be created"
    );
  }

  return data;
}
