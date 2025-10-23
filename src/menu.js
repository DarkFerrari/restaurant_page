
export function menu(){

  const content = document.getElementById('content');
  content.innerHTML = ''; 

  const headline = document.createElement('h2');
  headline.textContent = 'Our Menu';
  content.appendChild(headline);

  const menuList = document.createElement("ul");

  const dishes = [
    { name: "Chicken Biryani", description: "Aromatic basmati rice cooked with tender chicken pieces and traditional spices.", price: "$12.99" },
    { name: "Vegetable Biryani", description: "A flavorful mix of seasonal vegetables and basmati rice, seasoned with herbs and spices.", price: "$10.99" },
    { name: "Mutton Biryani", description: "Succulent mutton cooked to perfection with fragrant rice and a blend of spices.", price: "$14.99" },
    { name: "Paneer Biryani", description: "Cottage cheese cubes cooked with basmati rice and a medley of spices for a rich taste.", price: "$11.99" }
  ];

  dishes.forEach((dish)=>{
    const menuItem = document.createElement("li");
    menuItem.textContent = `${dish.name}: ${dish.description} - ${dish.price}`;
    menuList.appendChild(menuItem);
  })

  content.appendChild(menuList);

}