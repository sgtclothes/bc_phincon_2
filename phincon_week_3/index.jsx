let SideBar = () => {
    return (
        <>
            <div>Sidebar</div>
        </>
    );
};
function Header({ name, data }) {
    const id = "container-2";
    const className = "blue";
    return (
        <>
            <div id={id} className={className}>
                {name}
            </div>
            <div>{data}</div>
        </>
    );
}
function Carousel() {
    return (
        <>
            <img
                src="https://media.licdn.com/dms/image/v2/D560BAQG99Xf8yTVZAw/company-logo_200_200/company-logo_200_200/0/1702864298171?e=2147483647&v=beta&t=vlV9cqla3qLOcRU7NetWjY3dL39FConfn5WO9uQwgxU"
                alt="#"
            />
        </>
    );
}
export const Home = (props) => {
    const data = "Data";
    return (
        <>
            <Header name={props.headerName} data={data} />
            <Carousel />
            <Table />
            <Buttons />
            <SideBar />
        </>
    );
};
function Table() {
    const headerColumns = ["no", "name", "phoneNumber", "email", "address"];
    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        {headerColumns.map((headerColumn, index) => (
                            <th key={index}>{headerColumn}</th>
                        ))}
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </>
    );
}

function Buttons() {
    let getAlert = (data) => {
        alert(data);
    };
    return (
        <>
            <button onClick={() => getAlert("TESTING")}>Click Me!</button>
        </>
    );
}
