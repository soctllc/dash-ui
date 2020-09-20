import React from 'react';
import {Form} from '../molecules/Form'
import {items} from '../../demo/selectData'

const FormPage = () => {
  return(<Form items={items}/>);
}

export default FormPage;
