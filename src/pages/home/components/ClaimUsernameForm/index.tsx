import { Button, TextInput } from "@ignite-ui/react";
import { Form } from "./styles";
import { ArrowRight } from "phosphor-react";

export function ClaimUsernameForm(){
  return(
    <Form >
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuário"
        />

        <Button size="sm" type="submit">
          Reservar
          <ArrowRight />
        </Button>
      </Form>
  )
}