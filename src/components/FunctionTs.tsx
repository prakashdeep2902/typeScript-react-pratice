const FunctionTs = () => {
  function greet(name: string, age: number): [string, number] {
    return [name, age];
  }

  const res = greet("prakash", 32);

  console.log("res:::==>", res);

  return <div>FunctionTs</div>;
};

export default FunctionTs;
