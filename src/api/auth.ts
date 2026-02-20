import { apiRequest } from "./client";

export type LoginRequest = {
  email_address: string;
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

export function loginRequest(credentials: LoginRequest) {
  return apiRequest<LoginResponse>("/v1/sessions", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}