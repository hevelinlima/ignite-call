import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { ArrowRight } from "phosphor-react";
import { useRouter } from "next/router";
import { ConnectBox, ConnectItem } from "./styles";


export default function Register() {

  const router = useRouter()


  async function handleRegister() {
    
  }

  return(
    <Container>
      <Header>
        <Heading as="strong">
          Conecte sua agenda.
        </Heading>

        <Text>
          Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>
            Google Calendar
          </Text>
          <Button variant="secondary" size="sm">
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Button 
          type="submit" 
        >
          Próximos passos
          <ArrowRight />
        </Button>
      </ConnectBox>
     
    </Container>
  )
}