import { type UserFormValues } from "../schema/userSchema";
import { supabase } from "../components/lib/supabaseClient";

const FILE_TYPE = "webp";

export async function registerService(userData: UserFormValues) {
  const { data, error } = await supabase.auth.signUp(userData);
  if (!userData.name) return;
  const name = userData.name.split(" ").shift()?.toLowerCase();
  const file_name = `${name}/ avatar.${FILE_TYPE}`;

  console.log(userData);
  console.log(data, error);
}

// export async function
