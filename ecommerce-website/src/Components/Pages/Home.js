import { Button, Table } from "react-bootstrap";

function Home() {
  return (
    <>
      <div style={{ backgroundColor: "grey" }}>
        <h1
          style={{
            justifyContent: "center",
            marginLeft: "25%",
            fontSize: "7.5rem",
            color: "white",
          }}
        >
          The Generics
        </h1>
        <br />
        <button
          style={{
            justifyContent: "center",
            marginLeft: "40%",
            fontSize: "1.25rem",
            color: "white",
            backgroundColor: "grey",
            borderBlockColor: "skyblue",
            width: "300px",
            height: "65px",
            borderBlockEndStyle: "solid",
          }}
        >
          Get Our Latest Album
        </button>
        <br />
        <Button
          variant="primary"
          style={{
            marginLeft: "48%",
            marginTop: "25px",
            marginBottom: "25px",
            borderRadius: "200px",
            width: "125px",
            height: "50px",
            fontSize: "1.25rem",
          }}
        >
          Play
        </Button>
      </div>
      <div>
        <h1
          style={{
            marginTop: "30px",
            justifyContent: "center",
            marginLeft: "49.5%",
            fontSize: "2rem",
            fontFamily: "fantasy",
          }}
        >
          TOURS
        </h1>
        <Table
          style={{
            marginLeft: "15%",
            maxWidth: "70%",
            marginTop: "25px",
          }}
        >
          <tbody>
            <tr
              style={{
                justifyContent: "space-between",
                display: "flex",
                borderBlockEndColor: "black",
                fontSize: "1.25rem",
              }}
            >
              <td>JUL1</td>
              <td>Hyderabad</td>
              <td>Inorbit Mall</td>
              <td>
                <Button
                  variant="primary"
                  style={{
                    width: "150px",
                    backgroundColor: "skyblue",
                    fontSize: "1.15rem",
                  }}
                >
                  Buy Tickets
                </Button>
              </td>
            </tr>
            <tr
              style={{
                justifyContent: "space-between",
                display: "flex",
                borderBlockEndColor: "black",
                fontSize: "1.25rem",
              }}
            >
              <td>JUL7</td>
              <td>Hyderabad</td>
              <td>Forum Mall</td>
              <td>
                <Button
                  variant="primary"
                  style={{
                    width: "150px",
                    backgroundColor: "skyblue",
                    fontSize: "1.15rem",
                  }}
                >
                  Buy Tickets
                </Button>
              </td>
            </tr>
            <tr
              style={{
                justifyContent: "space-between",
                display: "flex",
                borderBlockEndColor: "black",
                fontSize: "1.25rem",
              }}
            >
              <td>JUL14</td>
              <td>Banglore</td>
              <td>East City mall</td>
              <td>
                <Button
                  variant="primary"
                  style={{
                    width: "150px",
                    backgroundColor: "skyblue",
                    fontSize: "1.15rem",
                  }}
                >
                  Buy Tickets
                </Button>
              </td>
            </tr>
            <tr
              style={{
                justifyContent: "space-between",
                display: "flex",
                borderBlockEndColor: "black",
                fontSize: "1.25rem",
              }}
            >
              <td>JUL21</td>
              <td>Goa</td>
              <td> Near Beach</td>
              <td>
                <Button
                  variant="primary"
                  style={{
                    width: "150px",
                    backgroundColor: "skyblue",
                    fontSize: "1.15rem",
                  }}
                >
                  Buy Tickets
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <footer
          style={{
            backgroundColor: "skyblue",
            justifyContent: "center",
            display: "flex",
            marginTop: "25px",
          }}
        >
          <p style={{ color: "white", fontSize: "5rem", fontWeight: "bold" }}>
            The Generics
          </p>
        </footer>
      </div>
    </>
  );
}
export default Home;
