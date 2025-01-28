export type LoginParams = {
  email: string;
  password: string;
};

export type RegistrationParams = LoginParams & {
  first_name: string;
  last_name: string;
};

export type StatusType = 'backlog' | 'done' | 'in_progress';

export type newTaskParams = {
  name: string;
  description: string;
  estimation: string;
  status: StatusType;
};

export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
};

export type Task = {
  id: number;
  name: string;
  description: string | null;
  estimation: string | null;
  status: StatusType;
  created_at: string;
  updated_at: string;
  user: UserType;
};
