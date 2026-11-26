import { type UserFormValues } from "../schema/userSchema";
import { supabase } from "../components/lib/supabaseClient";

const FILE_TYPE = "webp";

export async function registerService(userData: UserFormValues) {
  const { data, error } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
    options: {
      data: {
        name: userData.name,
        gender: userData.gender,
      },
    },
  });
  //   if (!userData.name) return;
  //   const name = userData.name.split(" ").shift()?.toLowerCase();
  const file_name = `${userData.name}/avatar.${FILE_TYPE}`;

  console.log(userData);
  console.log(data, error);

  const url = await uploadAvatar(file_name, userData.avatar[0]);
}

export async function uploadAvatar(file_name: string, image: File) {
  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(file_name, image);

  if (error) {
    console.log(error.message);
    throw error;
  }

  const { data: urlData } = supabase.storage
    .from("avatars")
    .getPublicUrl(data.path);
  console.log(urlData.publicUrl);
  return urlData.publicUrl;
}
