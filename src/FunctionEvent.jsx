function FunctionEvent() {
  function getName(name) {
    return `hello ${name}`;
  }

  const getCity = (city = "vadodara") => {
    return `your ${city}`;
  };

  return (
    <>
      <h2>{getName("tushar")}</h2>
      <p>city name : {getCity("surat")} </p>
      <button onClick={() => alert("hello dhruv")}>Click Me</button><br />
      <input type="text" onChange={(dhruv) => {console.clear(dhruv.target.value);  console.log(dhruv.target.value); }} />
    </>
  );
}

export default FunctionEvent;
