import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="kek1">
      {users.map((e, i) => (
        <Card className="kek" border="success" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{e.name} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {e.username}
            </Card.Subtitle>
            <Card.Text>
              Adresse : {e.address.street} / {e.address.city}
            </Card.Text>
            <Card.Link href="#">{e.email}</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Users;
