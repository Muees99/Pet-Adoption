export type NavLinkProps = {
  id?: number;
  link: string;
  label: string;
};
export type FooterLinkProps = {
  [x: string]: any;
  Customercare: any;
  id?: number;
  link: string;
  label: string;
};

export interface StateContextProps {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export type FooterLinkProps = {
  service: NavLinkProps[];
  Connect: NavbarLinkProps[];
  accessories: NavbarLinkProps[];
  // followus: NavbarLinkProps[];
};

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  className?: string;
  title?: string;
  size?: "lg" | "md" | "sm" | "xl" | "xxl";
  isCloseIconPresent?: boolean;
  closeBtnClass?: string;
}

// Toastify interface

export type ToastPosition =
  | "top-right"
  | "top-center"
  | "top-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";
export type ToastTheme = "light" | "dark" | "colored";
export type ToastVariant = "info" | "success" | "warning" | "error" | "default";
export interface ToastProps {
  message?: string;
  position?: ToastPosition;
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: undefined;
  theme?: ToastTheme;
  type?: ToastVariant;
}

export interface AuthContextProps {
  auth: AuthResponse | undefined;
  email: string;
  redirect: string;
  userCameFrom: string | undefined;
  userCameFromForOAuth: string | undefined;
  handleAuth: (value: AuthResponse | undefined) => void;
  handleEmail: (value: string) => void;
  handleRedirect: (value: string) => void;
  handleUserCameFrom: (value: string | undefined) => void;
  handleUserCameFromForOAuth: (value: string | undefined) => void;
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
  roleId: number;
  twoFactorAuth: boolean;
  two_factor_auth: boolean;
  slug: string | null;
};

export type AuthResponse = {
  token: string;
  user: User;
};

// Password interface
export interface PasswordPopoverProps {
  password: string;
  children: React.ReactNode;
}

export interface PasswordRequirementProps {
  meets: boolean;
  label: string;
}

export interface ProgressBarProps {
  color: string;
  value: number;
}
