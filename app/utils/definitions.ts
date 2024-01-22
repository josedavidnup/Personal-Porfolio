export interface ContactRequest {
  name: string | null;
  phone: string | null;
  email: string | null;
  subject: string | null;
  message: string | null;
}

export interface ProjectItemProps {
  title: string;
  backgroundImg: string;
  tech: string;
  projectUrl: string;
}

export interface FormData {
  subject: string;
  email: string;
  name: string;
  phone: string;
  message: string;
}
