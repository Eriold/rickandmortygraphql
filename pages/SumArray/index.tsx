import { Layout } from "../../layouts/Layout";
import { Grid, Text } from "@nextui-org/react";

const SumArray = () => {
  const sum = (number: number[]) => {
    number = number.map((num) => (num > 20 && num % 2 === 0 ? 20 : num));
    return (callback: any) =>
    callback(number.reduce((prev: number, curr: number) => prev + curr));
  };
  sum([1, 2, 3, 22, 21, 24, 27])((result: number) => console.log(result));
  return (
    <Layout title="Listado de Pókemons">
      <Grid.Container gap={2} justify="center" style={{ marginTop: "12px" }}>
        <Text h1>Abrir en consola del explorador</Text>
      </Grid.Container>
    </Layout>
  );
};

export default SumArray;
