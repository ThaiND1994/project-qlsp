import React, { Component } from 'react';
import Header from './components/Header';
import ContainerProduct from './containers/containersProduct';
import ContainerMessage from './containers/containerMessage';
// import Cart from './components/Cart';
import Footer from './components/Footer';
import ContainerCart from './containers/containersCart';
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ContainerProduct/>
                        <ContainerMessage />
                        <ContainerCart />
                    </div>
                </main>
                <Footer />
    </div>
        );
    }
}

export default App;
