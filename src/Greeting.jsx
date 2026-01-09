function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

export default Greeting;










/*

// ❌ WRONG - two root elements
return (
  <h1>Title</h1>
  <p>Content</p>
);

// ✅ Correct - wrapped in a single container
return (
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
);

// ✅ Correct - React Fragment (invisible wrapper)
return (
  <>
    <h1>Title</h1>
    <p>Content</p>
  </>
);


*/