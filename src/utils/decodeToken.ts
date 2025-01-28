import { jwtDecode } from 'jwt-decode';

type JWTPayload = {
  iss: string;
  iat: number;
  exp: number;
  nbf: number;
  jti: string;
  sub: string;
  prv: string;
  email: string;
  first_name: string;
  last_name: string;
};

export const decodeToken = (token: string): JWTPayload | null => {
  try {
    return jwtDecode<JWTPayload>(token);
  } catch (error) {
    console.error('Invalid JWT token:', error);
    return null;
  }
};
