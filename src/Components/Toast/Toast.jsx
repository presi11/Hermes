import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";
import InformationModal from "../Information/InformationModal";
import { useSubscription } from "@apollo/client";
import { newOrder } from "../../graphql/subscriptions";
import "react-toastify/dist/ReactToastify.css";


const Toast = () => {
  const { user } = useAuth0();
  const google = user.sub;
  const userMetadata = user["https://graphql-api/user_metadata"];
  const [gridModal, setGridModal] = useState(false);
  const { data } = useSubscription(newOrder, {
    variables: { newOrderRestaurant: userMetadata.restaurant },

  });
 
  useEffect(() => {
    if (data) {
      toast.dark(
        ` Ha llegado un nuevo pedido de: 
            ${data.newOrder.menus[0].menu.name} 😊  `
      );
    }
  }, [data]);
  return (
      <>
    <ToastContainer
      onClick={() => setGridModal(true)}
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    
    {data && (
        <InformationModal
          order={data.newOrder}
          gridModal={gridModal}
          setGridModal={setGridModal}
        />
      )}
      </>
  );
};

export default Toast;
