import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import styles from './ListItems.module.sass';
import EditItems from '../EditItems/EditItems';
import { deleteItem } from '../../store/store';


class ListItems extends Component {
  handleDelete = id => () => {
    const { deleteItem } = this.props;
    deleteItem(id);
  }

  renderData = () => {
    const { items } = this.props;
    return items.map(el => {
      const { name, price, id } = el;
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{price}</td>
          <td className={styles.lastCol}>
            <EditItems item={el} />
            <Button variant="danger" onClick={this.handleDelete(id)} className={styles.del}>del</Button>
          </td>
        </tr>
      );
    });
  }

  render() {
    const { items } = this.props;
    const total = items.reduce((acc, el) => acc + el.price, 0);
    return (
      <Table striped bordered hover className={styles.list}>
        <thead>
          <tr style={{ backgroundColor: "#D6D8D9" }}>
            <th className={styles.headerCol}>name</th>
            <th className={styles.headerCol}>price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.renderData()}
          <tr style={{ backgroundColor: "#D7ECDB" }}>
            <td className={styles.total}>total</td>
            <td>{total}</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => {
  return {
    items : state.itemsState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem : (item) => dispatch(deleteItem(item)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItems);
