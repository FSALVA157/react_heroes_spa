import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { Card } from 'antd';
import { useNavigate } from "react-router-dom";
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const {Meta}  = Card;

export const HeroList = ({publisher}) => {
  const listado = useMemo(() => getHeroesByPublisher(publisher), [publisher]);



    

  return (
    <>
    <div style={ { backgroundColor: '#fff', height: '100%', padding: 8 } }>
      <Card title={publisher}>
      { listado.map(heroe => (
        <Card.Grid 
          style={ gridStyle }
          key={ heroe.id }           
           //onClick={ () => navigate(location.pathname + parametrica.url) }
        >
          <HeroCard heroe={heroe}></HeroCard>
          
        </Card.Grid>))
      }
      </Card>
    </div>
    </>
  )
}
