import { LoginResponse } from "@/types/auth";
import { User } from "@/types/user";

export const fetchApi = (
  route: string,
  method?: string,
  body?: string | FormData
) => {
  const headers: Record<string, string> = {
    Accept: "application/json",
  };

  // Let the content-type be set automatically for form-data.
  if (!(body instanceof FormData)) {
    headers["Content-type"] = "application/json";
  }

  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/${route}`, {
    method: method ?? "GET",
    headers,
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

export const getUserFromCookie = async (): Promise<User> => {
  const response = await fetchApi("authenticate?full=true");

  if (!response.ok) {
    throw new Error("Error getting user.");
  }

  return response.json();
};

export const setProfilePicture = (userID: number, file: File): void => {
  const formData = new FormData();
  formData.append("file", file);

  fetchApi(`user/${userID}/picture`, "POST", formData);
};
