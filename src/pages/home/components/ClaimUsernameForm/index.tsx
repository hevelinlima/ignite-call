import { Button, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { Form, FormAnnotation } from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const claimUsernameFormSchema = z.object({
  username: z.string()
  .min(3, {
    message: 'Precisa ter pelo menos 3 letras.'
  })
  .regex(/^([a-z//-]+)$/i, {
    message: 'Pode conter apenas letras e hífen.'
  })
  .transform((username) => username.toLowerCase()),
})

type ClaimUsernameForm = z.infer<typeof claimUsernameFormSchema>

export function ClaimUserNameForm(){
  const { register, handleSubmit, formState: { errors } } = useForm<ClaimUsernameForm>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUserName(data: ClaimUsernameForm) {
    console.log(data)
  }

  return(
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUserName)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuário"
          {...register('username')}
        />

        <Button size="sm" type="submit">
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username ? errors.username.message : 'Digite o nome de usuário desejado'}
        </Text>
      </FormAnnotation>
    </>
  )
}