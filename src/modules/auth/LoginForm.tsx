import React from 'react';
import { Flex } from '@/components/layout/Flext';
import { Button } from '@/components/ui/Button';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import api from '../api/api';
import { LoginParams } from '../api/apiTypes';
import { useAuthStore } from '@/stores/authStore';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailRegex } from '@/constants';

type FormData = {
  email: string;
  password: string;
};

const schema: yup.SchemaOf<FormData> = yup.object().shape({
  email: yup.string().required().matches(emailRegex),
  password: yup.string().required(),
});

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const keepToken = useAuthStore((store) => store.keepToken);
  const { mutate, isLoading } = useMutation((params: LoginParams) => api.login(params), {
    onSuccess(data) {
      keepToken(data.access_token, data.expires);
      navigate('/');
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    resolver: yupResolver(schema, { stripUnknown: true }),
  });

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection="column" gap="1rem">
        <Input type="text" placeholder="E-mail" {...register('email')} error={Boolean(errors.email)} />
        <Input type="password" placeholder="Password" {...register('password')} error={Boolean(errors.password)} />
        <Button type="submit" full mt="2rem" disabled={Boolean(Object.keys(errors).length) || isLoading}>
          Log in
        </Button>
      </Flex>
    </form>
  );
};
