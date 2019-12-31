import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {/* vì bên containerProduct truyền vào 1 cái props children */}
                    {this.props.children}
                </div>
            </section>
        );
    }
}
export default Products;
