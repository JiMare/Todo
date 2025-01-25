import React from 'react';
import { Flex } from '@/components/layout/Flext';
import { Button } from '@/components/ui/Button';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import api from '../api/api';
import { LoginParams } from '../api/apiTypes';
import { useAuthStore } from '@/stores/authStore';
import { useNavigate } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const keepToken = useAuthStore((store) => store.keepToken);
  const { mutate } = useMutation((params: LoginParams) => api.login(params), {
    onSuccess(data) {
      keepToken(data.access_token);
      navigate('/');
    },
  });

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection="column" gap="1rem">
        <input type="text" placeholder="E-mail" {...register('email')} />
        <input type="password" placeholder="Password" {...register('password')} />
        <Button type="submit" full>
          Log in
        </Button>
      </Flex>
    </form>
  );
};
