import { Container } from "./styles";
import { Sumarry } from "../Sumarry";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
    return (
        <Container>
            <Sumarry />
            <TransactionsTable />
        </Container>
    )
}