import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("cabins could not be Delete");
  }

  return data;
}

export async function createCabin(cabin) {
  const imageName = `${Math.random()}-${cabin.image.name}`.replaceAll("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...cabin, image: imagePath }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("cabins could not be created");
  }
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.image);
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("cabins image could not be uploaded");
  }

  return data;
}
