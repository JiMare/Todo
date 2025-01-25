import { Flex } from '@/components/layout/Flext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { RegistrationParams } from '../api/apiTypes';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';

type FormData = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

export const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const keepToken = useAuthStore((store) => store.keepToken);
  const { mutate } = useMutation((params: RegistrationParams) => api.registrate(params), {
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
        <Input type="text" placeholder="First name" {...register('first_name')} />
        <Input type="text" placeholder="Last name" {...register('last_name')} />
        <Input type="text" placeholder="New e-mail" {...register('email')} />
        <Input type="password" placeholder="New password" {...register('password')} />
        <Button type="submit" full mt="2rem">
          Sign up
        </Button>
      </Flex>
    </form>
  );
};
