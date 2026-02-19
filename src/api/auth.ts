import { apiRequest } from "./client";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: {
    id: number;
    username: string;
    emailAddress: string;
  };
};

export function login(credentials: LoginRequest) {
  return apiRequest<LoginResponse>("/v1/sessions", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}