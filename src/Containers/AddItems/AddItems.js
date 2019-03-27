import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import uniqueId from 'lodash/uniqueId';
import styles from './AddItems.module.sass';
import { addItem } from '../../store/store';

class AddItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isValidName: null,
        isValidPrice: null,
        name: '',
        price: '',
      };
  }

  handleChange = type => e => {
    const { value } = e.target;
    if (type === 'name') {
      this.setState({ isValidName: value ? true : false, name: value });
    }

    if (type === 'price') {
      const isValid = (value.search(/^\d+$/) !== -1);
      this.setState({ isValidPrice: isValid, price: value });
    }
  }

  handleAdd = () => {
    const { addItem } = this.props;
    const { name, price } = this.state;
    if (!this.isFormValid()) {
      return;
    }
    const data = {
      id: uniqueId(),
      name,
      price: Number(price),
    };
    addItem(data);
    this.setState({
      isValidName: null,
      isValidPrice: null,
      name: '',
      price: '',
    });
  }

  isFormValid = () => {
    const { isValidName, isValidPrice } = this.state;
    return (isValidName) && (isValidPrice);
  }

  render() {
    const { isValidName, isValidPrice, name, price } = this.state;
    return (
      <Form inline className={styles.formItems}>
        <Form.Control type="text" placeholder="Product" value={name} onChange={this.handleChange('name')} isValid={isValidName} isInvalid={isValidName === null ? null : !isValidName}/>
        <Form.Control type="text" placeholder="Price" value={price} onChange={this.handleChange('price')} isValid={isValidPrice} isInvalid={isValidPrice === null ? null : !isValidPrice} className={styles.inputPrice} />
        <Button variant="success" onClick={this.handleAdd} className={styles.button}>Add</Button>
      </Form>
    );
  }
}


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    addItem : (item) => dispatch(addItem(item)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItems);
