const Props = ({name,age,subject}) => {
  return <>
    <h2>Hello,{name}</h2>
    <h3>Age:{age}</h3>
    <ol>
        {subject.map((sub,index) => (
            <li key={index}>{sub}</li>
        ))}
    </ol>
  </>;
};

export default Props;
