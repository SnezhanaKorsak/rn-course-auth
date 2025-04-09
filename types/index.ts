export type CredentialsInvalid = {
  email: boolean;
  confirmEmail: boolean;
  password: boolean;
  confirmPassword: boolean;
};

export type Credentials = {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}