import { create } from "zustand";

interface PasswordRecoveryStore {
  email: string;
  verificationCode: string;
  timer: number;
  password: string;
  confirmPassword: string;
  emailError: string;
  verificationError: string;
  passwordError: string;
  confirmPasswordError: string;
  setEmail: (email: string) => void;
  setVerificationCode: (code: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  setTimer: (time: number) => void;
  setEmailError: (error: string) => void;
  setVerificationError: (error: string) => void;
  setPasswordError: (error: string) => void;
  setConfirmPasswordError: (error: string) => void;
  clearErrors: () => void;
}

export const usePasswordRecoveryStore =
  create<PasswordRecoveryStore>((set) => ({
    email: "",
    verificationCode: "",
    timer: 299,
    password: "",
    confirmPassword: "",
    emailError: "",
    verificationError: "",
    passwordError: "",
    confirmPasswordError: "",
    setEmail: (email) => set({ email }),
    setVerificationCode: (code) =>
      set({ verificationCode: code }),
    setTimer: (time) => set({ timer: time }),
    setPassword: (password) => set({ password }),
    setConfirmPassword: (confirmPassword) =>
      set({ confirmPassword }),
    setEmailError: (error) => set({ emailError: error }),
    setVerificationError: (error) =>
      set({ verificationError: error }),
    setPasswordError: (error) =>
      set({ passwordError: error }),
    setConfirmPasswordError: (error) =>
      set({ confirmPasswordError: error }),
    clearErrors: () =>
      set({ emailError: "", verificationError: "" }),
  }));
