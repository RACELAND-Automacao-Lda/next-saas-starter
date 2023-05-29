import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';
//import { media } from 'utils/media';
import MailSentState from '../../components/MailSentState';

const media = {
  tablet: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  landscape: (...args) => css`
    @media (orientation: landscape) {
      ${css(...args)}
    }
  `,
  portrait: (...args) => css`
    @media (orientation: portrait) {
      ${css(...args)}
    }
  `,
};

interface EmailPayload {
  name: string;
  email: string;
  description: string;
}

export default function FormSection() {
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;

  async function onSubmit(payload: EmailPayload) {
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject: 'Email de contacto do site Raceland Automação', ...payload }),
      });

      if (res.status !== 204) {
        setHasErrored(true);
      }
    } catch {
      setHasErrored(true);
      return;
    }

    setHasSuccessfullySentMail(true);
  }

  const isSent = isSubmitSuccessful && isSubmitted;
  const isDisabled = isSubmitting || isSent;
  const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;

  if (hasSuccessfullySentMail) {
    return <MailSentState />;
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {hasErrored && <ErrorMessage> Não foi possível enviar email. Por favor tente outra vez.</ErrorMessage>}
        <InputGroup>
          <InputStack>
            {errors.name && <ErrorMessage>Name é necessário</ErrorMessage>}
            <NewInput placeholder="Nome" id="name" disabled={isDisabled} {...register('name', { required: true })} />
          </InputStack>
          <InputStack>
            {errors.email && <ErrorMessage>Email é necessário</ErrorMessage>}
            <NewInput placeholder="Email" id="email" disabled={isDisabled} {...register('email', { required: true })} />
          </InputStack>
        </InputGroup>
        <InputStack>
          {errors.description && <ErrorMessage>Descrição é necessária</ErrorMessage>}
          <Textarea
            as="textarea"
            placeholder="A sua mensagem"
            id="description"
            disabled={isDisabled}
            {...register('description', { required: true })}
          />
        </InputStack>
        <NewButton as="button" type="submit" disabled={isSubmitDisabled}>
          Enviar Mensagem
        </NewButton>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 2;

  ${media.tablet` {
    & {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  `}
`;

const NewInput = styled(Input)`
  ${media.landscape` {
    & {
      width: 31vw;
    }
  `}
`;

const Form = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
  ${media.tablet` {
    & {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  `}
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }

  & > * {
    flex: 1;
  }

  ${media.tablet` {
    flex-direction: column;
    width: 100%;
    & > *:first-child {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
    & > * {
      width: 100%;
    }
  `}
`;

const InputStack = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
  ${media.tablet` {
    width: 100%;
  `}
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
`;

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`;

const NewButton = styled(Button)`
  width: 250px;
`;
