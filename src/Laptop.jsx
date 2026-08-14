// import '/Laptop.css'

const Laptop = () => {
  const items = [{brand: 'HP', discription: 'HP offers a wide variety of affordable laptops', price: 50000},
    {brand: 'DELL', discription: 'DELL offers a wide variety of affordable laptops', price: 30000},
    {brand: 'ASUS', discription: 'ASUS offers a wide variety of affordable laptops', price: 70000}
  ]

  return (
    <div>

        <div className="containe">

      <div className="brands"> 

        <h1>BRANDS</h1>
        <p>{items[0].brand}</p>
        <p>{items[1].brand}</p>
        <p>{items[2].brand}</p>

      </div>

      <div className="discription">

        <h1>DISCRIPTION</h1>
        <p>{items[0].discription}</p>
        <p>{items[1].discription}</p>
        <p>{items[2].discription}</p>

      </div>

      <div className="price">

        <h1>PRICE</h1>
        <p>{items[0].price}</p>
        <p>{items[1].price}</p>
        <p>{items[2].price}</p>
      </div>

    </div>
     
    </div>
  );
}

export default Laptop;
