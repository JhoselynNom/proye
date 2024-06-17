import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row
} from 'reactstrap';

const items = [
  {
    src: 'https://i.ytimg.com/vi/2g-NKxw5WFs/maxresdefault.jpg',
    altText: 'NOTICIA 1',
    caption: '04/20',
    key: 1,
  },
  {
    src: 'https://i.ytimg.com/vi/XPI7flObVH4/maxresdefault.jpg',
    altText: 'NOTICIA 2',
    caption: '06/20',
    key: 2,
  },
  {
    src: 'https://i.ytimg.com/vi/1_9GxI3DyJM/maxresdefault.jpg',
    altText: 'NOTICIA 3',
    caption: '10/20',
    key: 3,
  },
];

function Example() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

function CardComponent() {
  return (
    <Card style={{ width: '18rem' }}>
      <CardBody>
        <CardTitle tag="h5">Novedades</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">

        </CardSubtitle>
      </CardBody>
      <img alt="Card cap" src="https://www.boliviatv.bo/web/images/noticias/2022-11-02/images/btv2022-11-02_1667433524.JPG" width="100%" />
      <CardBody>
        <CardText>
        El Ministerio de Defensa exigió que se realice una investigación minuciosa por la muerte del militar que habría sido torturado en una comisaría de Santa Cruz.
        </CardText>
        <CardLink href="https://www.boliviatv.bo/principal/nota.php?noticia=60be2d7b71d4b27b2da6ee471f86d209">Leer más..</CardLink>
      </CardBody>
    </Card>
  );
}

function CardGroup() {
  return (
    <div>
      <Card
        body
        className="my-2"
        style={{
          width: '18rem'
        }}
      >
        <CardTitle tag="h5">
        HOROSCOPO
        </CardTitle>
        <CardText>
        Conocé las predicciones y qué le depara el horóscopo a Piscis este viernes 14 de junio de 2024 en cuestiones de salud, amor y dinero.
        </CardText>
        <Button color="primary">
          Ver más...
        </Button>
      </Card>
      <Card
        body
        className="text-center"
        style={{
          width: '18rem'
        }}
      >
        <CardTitle tag="h5">
        CANCIONES NUEVAS JUNIO 2024
        </CardTitle>
        <CardText>
        Lista de novedades musicales actualizada cada semana con lo más nuevo: Reggaeton 2024, Música Electrónica 2024, Flamenco 2024, Bachata 2024, Pop Español 2024
        </CardText>
        <Button color="primary">
        Ver más...
        </Button>
      </Card>
      <Card
        body
        className="text-end my-2"
        style={{
          width: '18rem'
        }}
      >
        <CardTitle tag="h5">
        ¿Qué canal transmitirá el amistoso Guatemala vs Argentina previo a la Copa América?
        </CardTitle>
        <CardText>
        Argentina, liderada por Messi, se mide ante Guatemala en su último amistoso del mes de junio.
        </CardText>
        <Button color="primary">
          Ver más...
        </Button>
      </Card>
    </div>
  );
}

function FormComponent() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    check: false
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Correo Electronico"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">
              Contraseña
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Ingresa Contraseña"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">
          Direccion
        </Label>
        <Input
          id="exampleAddress"
          name="address"
          placeholder="Calle 1234"
          value={formData.address}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">
          Telefono
        </Label>
        <Input
          id="exampleAddress2"
          name="address2"
          placeholder="Numero de telefono"
          value={formData.address2}
          onChange={handleChange}
        />
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">
              Ciudad
            </Label>
            <Input
              id="exampleCity"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">
              Estado
            </Label>
            <Input
              id="exampleState"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">
              Año
            </Label>
            <Input
              id="exampleZip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup check>
        <Input
          id="exampleCheck"
          name="check"
          type="checkbox"
          checked={formData.check}
          onChange={handleChange}
        />
        <Label
          check
          for="exampleCheck"
        >
          Check me out
        </Label>
      </FormGroup>
      <Button type="submit">
        Inicia Sesión
      </Button>
    </Form>
  );
}

function Programacion() {
  return (
    <div>
      <h2>NOTICIAS DE ULTIMO MOMENTO</h2>
      <Example />
      <CardComponent />
      <CardGroup />
      <FormComponent />
    </div>
  );
}

export default Programacion;