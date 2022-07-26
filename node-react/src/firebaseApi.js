import axios from "axios";

const db_link = axios.create({
    db: process.env.REACT_APP_BACKEND_URL
});

export default db_link;