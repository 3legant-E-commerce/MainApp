import supabase from "./supabase";

interface SignupCredentials {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export async function signup({ email, password, fullName }: SignupCredentials) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { fullName, avatar: "" } },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }: LoginCredentials) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
