import { Link} from "react-router-dom";
import {Card} from "antd";


const {Meta}= Card;

export const HeroCard = ({heroe}) => {

     return (
        <Card
                title={heroe.superhero}
                hoverable
                style={{
                    width: "100%",
                    height: "100%"
                }}
                cover={<img alt={heroe.id} src={`/assets/heroes/${heroe.id}.jpg`} ></img>}
                >
                    <Meta 
                    title={heroe.alter_ego}
                    description={(heroe.alter_ego !== heroe.characters)? heroe.characters:""}/>
                    <br />
                    <Link to={`/hero/${heroe.id}`}>more info....</Link>
            </Card>
   )
}
