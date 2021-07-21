import React, { useState } from "react";
export const dataCentral = React.createContext();

const Context = (props) => {
    const [open, setOpen] = useState(false)
    const [jwt, setJwt] = useState('')
    
  return (
      <dataCentral.Provider value={{
          open: open,
          setOpen: setOpen,
          jwt: jwt,
          setJwt: setJwt
      }}>{props.children}
      </dataCentral.Provider>
  );
};

export default Context;