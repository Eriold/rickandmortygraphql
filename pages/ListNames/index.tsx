import type { NextPage } from "next";
import { Grid } from "@nextui-org/react";
import { Layout } from "../../layouts";
import { ListNicknames } from "../../components/atoms";
import { useState } from "react";

const ListNames: NextPage = () => {
  const [orderList, setOrderList] = useState("ASC");
  const changeOrderList = () => {
    if (orderList === "ASC") {
      setOrderList("DES");
    } else {
      setOrderList("ASC");
    }
  };
  return (
    <Layout title="Listado de Pókemons">
      <Grid.Container gap={2} justify="flex-start">
        <ListNicknames
          names={["Triviño TI", "Homer Dev", " ", " Ragnar Front", "Loki UX"]}
          order={orderList}
        />
      </Grid.Container>
        <button onClick={changeOrderList} style={{marginBottom: '30px'}}>{orderList}</button>
    </Layout>
  );
};

export default ListNames;
