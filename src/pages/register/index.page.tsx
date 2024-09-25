import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, ErrorForm, Form, Header } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "@/src/lib/axios";
import { AxiosError } from "axios";

const registerFormSchema = z.object({
  username: z.string()
  .min(3, {
    message: 'Precisa ter pelo menos 3 letras.'
  })
  .regex(/^([a-z//-]+)$/i, {
    message: 'Pode conter apenas letras e hífen.'
  })
  .transform((username) => username.toLowerCase()),

  name: z.string().min(3, {
    message: 'O nome precisa ter pelo menos 3 letras.'
  })
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema)
  })

  const router = useRouter()

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post('/users', {
        username: data.username, 
        name: data.name
      })

      await router.push('/register/connect-calendar')
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err .response.data.message)
        return
      }
      console.log(err)
    }
  }

  return(
    <Container>
      <Header>
        <Heading as="strong">
          Bem-vindo ao Ignite Call!
        </Heading>

        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput 
            prefix="ignite.com/" 
            placeholder="seu-usuario" 
            {...register('username')}
          />
          {errors.username && (
            <ErrorForm size="sm">{ errors.username.message }</ErrorForm>
          )}
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput 
            placeholder="Seu nome" 
            {...register('name')}
          />
          {errors.name && (
            <ErrorForm size="sm">{ errors.name.message }</ErrorForm>
          )}
        </label>

        <Button 
          type="submit" 
          disabled={isSubmitting}
        >
          Próximos passos
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}