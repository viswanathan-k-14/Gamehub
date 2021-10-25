import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Row>
        <Col md={9} sm={6}>
          <Form.Control
            type='text'
            name='q'
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search Products...'
            className='mr-sm-2 ml-sm-5 my-2'
          ></Form.Control>
        </Col>
        <Col md={3} sm={6}>
          <Button type='submit' variant='dark' className='p-2 my-2'>
            <i class='fa fa-search' aria-hidden='true'></i>
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
