import React, { useState } from "react";
export const dataCentral = React.createContext();

const Context = (props) => {
    const [open, setOpen] = useState(false)
  return (
      <dataCentral.Provider value={{
          open: open,
          setOpen: setOpen
      }}>{props.children}
      </dataCentral.Provider>
  );
};

export default Context;