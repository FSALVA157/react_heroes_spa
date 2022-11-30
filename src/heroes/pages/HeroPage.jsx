import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { Row,Col, Button, Image, Descriptions } from "antd";
import { useMemo } from "react";
import 'animate.css';


export const HeroPage = () => {

  const {id} = useParams();
  const data = useMemo(() => getHeroById(id), [id]) ;
  const navigate = useNavigate();

  const onClickReturn=()=> {
    //navigate((data.publisher.includes('Marvel')?"/marvel":"/dc"));
    navigate(-1);
  }


  if(!data){
    return (
    <Navigate to="/marvel"></Navigate>
    )
  }
  
  return (
   <>
    <div className="container">
      <Row gutter={[8,8]}>
        <Col xs={24} sm={12}>
          <Image className="animate__animated animate__fadeInLeft" src={`/assets/heroes/${data.id}.jpg`}></Image>
        </Col>
        <Col xs={24} sm={12}>
          <Descriptions title={data.superhero} layout='vertical'>
            <Descriptions.Item label="Información">
              <br />
              {`publisher: ${data.publisher}`}
              <br />
              {`alter ego: ${data.alter_ego}`}
              <br />
              {`primera aparición: ${data.first_appearance}`}
              <br />
              {`characters: ${data.characters}`}
            </Descriptions.Item>
          </Descriptions>
          <Button
            type="primary"
           onClick={()=>onClickReturn()}>Back</Button>
        </Col>
      </Row>
    </div>
   </>
  )
}
