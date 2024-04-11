/**
 * <div id="parent">
 *      <div id="child>
 *        <h1> This is h1 element - child 1</h1>
 *        <h2> This is h2 - child 1</h2>
 *      </div>
 *      <div id="child2">
 *        <h1> This is h1 element - child 1</h1>
 *        <h2> This is h2 - child 1</h2>
 *      </div>
 * </div>
 * **/
const parent = React.createElement("div", {
    id: "parent"
},
    React.createElement("div", { id: "child"},
        [React.createElement("h1", {},"This is h1 element - child 1"),
        React.createElement("h2", {},"This is h2 - child 1")]),
    React.createElement("div", { id: "child2"},
        [React.createElement("h1", {},"This is h1 element - child 2"),
        React.createElement("h2", {},"This is h2 - child 2")])
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
