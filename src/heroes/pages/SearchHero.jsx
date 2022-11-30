import {Row, Col, Form, Input, Button, Alert, Space} from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../auth/hooks/useForm";
import { HeroCard } from "../components";
import queryString from "query-string";
import { getHeroByName } from "../helpers";
import { useMemo } from "react";

export const SearchHero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {q} = queryString.parse(location.search);

  const data = useMemo(() => getHeroByName(q), [q]);
  console.log(data);

  const {searchText, onInputChange} = useForm({
    searchText: q
  })

  const onFinish = ({searchText}) => {
     if(searchText.trim().length <=1) return;
     navigate(`?q=${searchText}`);
  }



  return (
    <>
      
        <h1>Página de Búsqueda de Heroes</h1>
        <hr />
        <Row gutter={[50,8]}>
          <Col flex={1}>
            <h3>Searching</h3>
          <Form
                      name="search_form"
                      labelCol={{
                        span: 8,
                      }}
                      wrapperCol={{
                        span: 16,
                      }}
                      initialValues={{
                        remember: true,
                      }}
                       onFinish={onFinish}
                      // onFinishFailed={onFinishFailed}
                      autoComplete="off"
                      
                    >
                      <Form.Item
                        label="Nombre del Heroe"
                        name="searchText"
                        value={searchText}
                        rules={[
                          {
                            required: true,
                            message: 'Please input name of Hero!',
                          },
                        ]}
                      >
                        <Input/>
                      </Form.Item>
                      
                      
                      <Form.Item
                        wrapperCol={{
                          offset: 8,
                          span: 16,
                        }}
                      >
                        <Button type="primary" htmlType="submit">
                          Buscar
                      </Button>
                    </Form.Item>
            </Form>
          </Col>
          <Col flex={4}>
            <h1>Resultados</h1>
            <Space
               direction="vertical"
               style={{
                 width: '100%',
               }}
             >
              {
               
                (q === undefined)? 
                  <Alert message="Busque un Héroe" type="info" />:
                (data.length === 0) &&  (<Alert message={`Sin Resultados ${q}`}  type="error" />)
              }
               
               {/* <HeroCard  /> */}
               {
                data.map(hero => {
                  return (
                    <HeroCard key={hero.id} heroe={hero} ></HeroCard>
                  )
                })
               }
             </Space>

          </Col>
        </Row>
      

    </>
  )
}
