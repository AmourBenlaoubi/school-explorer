import useSWR from 'swr'
import {API_URL} from "../../constants";
import {apiRequest} from "../../services/ApiRequests";
import {Card, List, Typography, CircularProgress} from "@mui/material";
import {transformData} from "../../helpers/dataTransformer";
import styles from './list-item.module.scss';

const ListItems = () => {
    const { data } = useSWR(API_URL, apiRequest);

    if (!data) {
        return <CircularProgress />
    }

    const schools = transformData(data);
    return (
        <List>
            {schools.map((school) => {
                return (
                    <Card key={school.name} className={styles.item}>
                        <Typography variant="body1">{school.name}</Typography>
                        <Typography variant="body1">{school.adress}</Typography>
                    </Card>
                )
            })}
        </List>
    )
};

export default ListItems;
