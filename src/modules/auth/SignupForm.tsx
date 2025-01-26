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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailRegex, minPasswordLength } from '@/constants';
import { toast } from 'react-toastify';
import axios from 'axios';

type FormData = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

const schema: yup.SchemaOf<FormData> = yup.object().shape({
  email: yup.string().required().matches(emailRegex),
  password: yup.string().min(minPasswordLength).required(),
  first_name: yup.string().trim().required(),
  last_name: yup.string().trim().required(),
});

export const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const keepToken = useAuthStore((store) => store.keepToken);
  const { mutate, isLoading } = useMutation((params: RegistrationParams) => api.registrate(params), {
    onSuccess(data) {
      keepToken(data.access_token);
      navigate('/');
    },
    onError(err) {
      if (axios.isAxiosError(err)) {
        const errorMessage = err.response?.data?.message || 'An unexpected error occurred';
        toast.error(errorMessage);
      } else {
        toast.error('An unexpected error occurred');
      }
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
    mutate({ ...data, first_name: data.first_name.trim(), last_name: data.last_name.trim() });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection="column" gap="1rem">
        <Input type="text" placeholder="First name" {...register('first_name')} error={Boolean(errors.first_name)} />
        <Input type="text" placeholder="Last name" {...register('last_name')} error={Boolean(errors.last_name)} />
        <Input type="text" placeholder="New e-mail" {...register('email')} error={Boolean(errors.email)} />
        <Input type="password" placeholder="New password" {...register('password')} error={Boolean(errors.password)} />
        <Button type="submit" full mt="2rem" disabled={Boolean(Object.keys(errors).length) || isLoading}>
          Sign up
        </Button>
      </Flex>
    </form>
  );
};
