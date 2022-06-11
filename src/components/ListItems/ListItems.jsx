import { useState, useEffect } from 'react';
import { request } from '../../services/ApiRequests';

const ListItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const res = request();
        console.log(res);
    }, []);
    return <div> HEloo</div>;
};

export default ListItems;
