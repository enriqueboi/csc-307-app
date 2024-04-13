import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

function MyApp() {
  const [characters, setCharacters] = useState([ ]);

  function updateList(person) {
    setCharacters([...characters, person]);
  }

  return (
    <div className="container">
      <Form handleSubmit={updateList} />
      <Table characterData={characters} />
    </div>
  );
}

export default MyApp;

