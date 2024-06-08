import { LoginResponse } from "@/types/auth";
import { User } from "@/types/user";

export const fetchApi = (route: string, method?: string, body?: string) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/${route}`, {
    method: method ?? "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: body,
    credentials: "include",
  });
};

export const login = async (
  name: string,
  password: string
): Promise<LoginResponse> => {
  const response = await fetchApi(
    "login",
    "POST",
    JSON.stringify({ name, password })
  );

  if (!response.ok) {
    throw new Error("Login unsuccessful");
  }

  return response.json();
};

export const getUser = async (id: number): Promise<User> => {
  const response = await fetchApi(`user/${id}`);

  if (!response.ok) {
    throw new Error("Error getting user.");
  }

  return response.json();
};
