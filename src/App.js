import firebase from "firebase/compat/app";
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(){
      super();
      this.state = {
          products:[],
          loading: true
          
      }
      const db = firebase.firestore();
  }
  // read data form the data base
  componentDidMount(){
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot)=>{
    //     console.log(snapshot);
    //     snapshot.docs.map((doc)=>{
    //       console.log(doc.data());
    //     });
    //     const products = snapshot.docs.map((doc)=>{
    //       const data = doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //     });
    //     console.log(products);
    //     this.setState({
    //       products,
    //       loading: false
    //     })
    //   });

    firebase
    .firestore()
    .collection('products')
    .onSnapshot((snapshot)=>{
      console.log(snapshot);
      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      });
      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });

      console.log(products);
      this.setState({
        products,
        loading: false
      })
    });

    
  }
  handleIncreaseQuantity = (product)=>{
      const {products} = this.state;
      const index = products.indexOf(product);
      // console.log();
      const docRef = firebase.firestore().collection('products').doc(products[index].id);

      docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(()=>{
        console.log('Updated Successfully');
      })
      .catch((err)=>{
        console.log('Error ', err);
      })
      // products[index].qty += 1;
      // this.setState({
      //     products:products
      //     // or
      //     // products
      // })
  }
  handleDecreaseQuantity = (product)=>{
      const {products} = this.state;
      const index = products.indexOf(product);

      const docRef = firebase.firestore().collection('products').doc(products[index].id);

      docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(()=>{
        console.log('Updated Successfully');
      })
      .catch((err)=>{
        console.log('Error ', err);
      })

      // products[index].qty -= 1;
      // this.setState({
      //     products
      // })
  }
  handleDeleteQuantity = (id)=>{
      const {products} = this.state;
      
      const docRef = firebase.firestore().collection('products').doc(id);

      docRef
      .delete()
      .then(()=>{
        console.log('delete Successfully');
      })
      .catch((err)=>{
        console.log('Error ', err);
      })


      // const items = products.filter((item)=>item.id !== id);
      // this.setState({
      //     products:items
      // })
  }
  getCartCount = ()=>{
    const {products} = this.state;

    let count = 0;
    products.forEach((product)=>{
      count +=product.qty;
    })
    return count;
  }
  getTotalPrice =()=>{
    const {products} = this.state;
    let price = 0;
    products.forEach((product)=>{
      price += product.price;
    })
    return price;
  }
  // add product to the firebase 
  addProduct = ()=>{
    this.db
    .collection('products')
    .add({
      img:"https://image.shutterstock.com/image-photo/modern-computer-mouse-on-white-260nw-1090541303.jpg",
      price:600,
      qty:1,
      title:"Mouse"
    })
    .then((docRef)=>{
      console.log('Product has been added ', docRef);
    })
    .catch((err)=>{
      console.log('Error', err);
    })
  }
  render(){  
    const { products, loading } = this.state;
    return (
      <div className="App">
      <Navbar
        count ={this.getCartCount()}
      />
      <button onClick={this.addProduct} style={{padding:20, font:20, backgroundColor:"blue"}}>Add Product</button>
      <Cart
        products={products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteQuantity = {this.handleDeleteQuantity}
      />
      {loading && <h1>Loading products ...</h1>}
      <div style={{fontSize: 20, padding:10}}>
        TOTAL: {this.getTotalPrice()}
      </div>
      </div>
    );
  }
}

export default App;
