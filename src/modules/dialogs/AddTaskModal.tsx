import React from 'react';
import { Modal } from '@/components/layout/Modal';
import { Flex } from '@/components/layout/Flext';
import { IconButton } from '@/components/ui/IconButton';
import { ReactComponent as IconFilePlus } from '@/components/assets/icons/file-plus.svg';
import { SubTitle, Text, Title } from '@/components/ui/Typography';
import { TopLine } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { useMutation } from 'react-query';
import { newTaskParams, StatusType } from '../api/apiTypes';
import api from '../api/api';
import { toast } from 'react-toastify';
import { queryClient } from '@/queryClient';

type FormData = {
  name: string;
  description: string;
  estimation: string;
};

type Props = {
  onClose: () => void;
};

export const AddTaskModal: React.FC<Props> = ({ onClose }) => {
  const { mutate, isLoading } = useMutation((params: newTaskParams) => api.createTask(params), {
    onSuccess() {
      toast.success('New task was successfully created');
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      onClose();
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    const payload = {
      name: data.name.trim(),
      description: data.description.trim(),
      estimation: data.estimation.trim(),
      status: 'backlog' as StatusType,
    };
    mutate(payload);
  };

  return (
    <Modal onClose={onClose}>
      <TopLine />
      <Flex justifyContent="space-between" alignItems="center" mb="2rem" mt="2rem">
        <IconButton border>
          <IconFilePlus />
        </IconButton>
        <SubTitle secondary onClick={onClose} isAction>
          Close
        </SubTitle>
      </Flex>
      <Flex justifyContent="flex-start" flexDirection="column" gap="0.8rem">
        <Title>New task</Title>
        <Text secondary>Create a new task.</Text>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection="column" mt="1.2rem" justifyContent="space-between">
          <Flex flexDirection="column" gap="1rem">
            <Input
              placeholder="Task name"
              {...register('name', { required: true, validate: (value) => value.trim() !== '' })}
              error={Boolean(errors.name)}
            />
            <Textarea
              placeholder="Description"
              {...register('description', { required: true, validate: (value) => value.trim() !== '' })}
              error={Boolean(errors.description)}
            />
            <Input
              placeholder="2w 1d 2h 30min"
              {...register('estimation', { required: true, validate: (value) => value.trim() !== '' })}
              error={Boolean(errors.estimation)}
            />
          </Flex>
          <Flex justifyContent="space-between" gap="1rem" mt="10rem">
            <Button full secondary onClick={onClose} type="button">
              Cancel
            </Button>
            <Button full type="submit" disabled={!isValid || isLoading}>
              Add task
            </Button>
          </Flex>
        </Flex>
      </form>
    </Modal>
  );
};
