import { create } from "zustand";

interface SignupStore {
  email: string;
  password: string;
  confirmPassword: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError: string;
  isChecked14: boolean;
  isCheckedTerms: boolean;
  isCheckedInformation: boolean;
  nickname: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  setEmailError: (error: string) => void;
  setPasswordError: (error: string) => void;
  setConfirmPasswordError: (error: string) => void;
  clearErrors: () => void;
  setIsChecked14: (checked: boolean) => void;
  setIsCheckedTerms: (checked: boolean) => void;
  setIsCheckedInformation: (checked: boolean) => void;
  setNickname: (nickname: string) => void;
}

export const useSignupStore = create<SignupStore>(
  (set) => ({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    isChecked14: false,
    isCheckedTerms: false,
    isCheckedInformation: false,
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setConfirmPassword: (confirmPassword) =>
      set({ confirmPassword }),
    setNickname: (nickname) => set({ nickname }),
    setEmailError: (error) => set({ emailError: error }),
    setPasswordError: (error) =>
      set({ passwordError: error }),
    setConfirmPasswordError: (error) =>
      set({ confirmPasswordError: error }),
    clearErrors: () =>
      set({
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
      }),
    setIsChecked14: (checked) =>
      set({ isChecked14: checked }),
    setIsCheckedTerms: (checked) =>
      set({ isCheckedTerms: checked }),
    setIsCheckedInformation: (checked) =>
      set({ isCheckedInformation: checked }),
  })
);
