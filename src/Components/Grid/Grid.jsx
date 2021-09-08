import React from "react";
import Grid from "@material-ui/core/Grid";
import OrderCard from "../../Components/OrderCard/OrderCard";


export default function SpacingGrid({order}) {

  return (
    <Grid  item>
      <OrderCard order={order} pedent="Pediente"></OrderCard>
    </Grid>
  );
}
