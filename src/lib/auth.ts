import type { LoginSchema, RegisterSchema } from "@/schemas/auth";

export async function login(data: LoginSchema) {
  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Terjadi kesalahan pada saat fetch api login");
  }

  const json = await res.json();
  const accessToken = json.accessToken;
  const user = json.data;

  return {
    accessToken,
    user,
  };
}

export async function register(data: RegisterSchema) {
  const res = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Terjadi kesalahan pada saat fetch api register");
  }

  return res.json();
}

export async function logout() {
  const res = await fetch("http://localhost:3000/api/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Terjadi kesalahan pada saat fetch api logout");
  }

  return res.json();
}
