const ArrayObject = () => {
  const fruits = ["apple", "banana", "orange", "mango"];
  const user = {
    firstName: "dhruv",
    lastName: "ghinaiya",
    city: "amreli",
  };

  const users = [
    {
      firstName: "dhruv",
      lastName: "ghinaiya",
      city: "vadodara",
    },
    {
      firstName: "tushar",
      lastName: "ghinaiya",
      city: "amreli",
    },
    {
      firstName: "darshan",
      lastName: "ghinaiya",
      city: "surat",
    },
  ];
  const getName = (user) => {
    return user.firstName + " " + user.lastName;
  };
  return (
    <>
      {fruits.map((fruit, index) => (
        <li>{fruit + index}</li>
      ))}

      <span>{user.city}</span>
      <p>{getName(user)}</p>

      {users.map((user,index) => (
        <h4>{getName(user)+" city :  "+ user.city}</h4>
      ))}
    </>
  );
};

export default ArrayObject;
