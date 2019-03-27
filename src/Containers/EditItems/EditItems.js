import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import styles from './EditItems.module.sass';
import { changeItem } from '../../store/store';

class EditItems extends Component {
  constructor(props) {
    super(props);
    const { id, name, price } = props.item;
    this.state = {
      showModal: false,
      isValidName: name ? true : false,
      isValidPrice: (String(price).search(/^\d+$/) !== -1),
      id,
      name,
      price,
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

  handleSave = () => {
    const { changeItem } = this.props;
    const { id, name, price } = this.state;
    if (!this.isFormValid()) {
      return;
    }
    const data = {
      id,
      name,
      price: Number(price),
    };
    changeItem(data);
    this.handleHide();
  }

  isFormValid = () => {
    const { isValidName, isValidPrice } = this.state;
    return (isValidName) && (isValidPrice);
  }

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleHide = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { isValidName, isValidPrice, showModal, name, price } = this.state;

    return (
      <div className={styles.edit}>
        <Button variant="warning" onClick={this.handleShow}>edit</Button>
        <Modal show={showModal} onHide={this.handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>Changing item</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Control type="text" placeholder="Product" value={name} onChange={this.handleChange('name')} isValid={isValidName} isInvalid={isValidName === null ? null : !isValidName}/>
              <Form.Control type="text" placeholder="Price" value={price} onChange={this.handleChange('price')} isValid={isValidPrice} isInvalid={isValidPrice === null ? null : !isValidPrice} className={styles.inputPrice} />
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={this.handleSave}>Save</Button>
            <Button variant="secondary" onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    changeItem : (item) => dispatch(changeItem(item)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditItems);
