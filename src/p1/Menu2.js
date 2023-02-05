import React from "react";

const Menu2 = ({ items }) => {
    // const resetf = () => {
    //     // document.getElementById("e1").value = "";
    //     alert("Commande Envoyé");
    // };
    // function resetf() {
    //     alert("tgvhbj");
    // }
    return (
        <div className="section-center">
            {items.map(
                (item) => {
                    const { id, title, category, img, desc, price } = item;
                    // if (category !== "Petit-déj") {
                    return (
                        <article key={id} className="menu-item">
                            <img src={img} alt={title} className="photo" />
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className="price">DT{price}</h4>
                                </header>
                                <p className="item-text">
                                    {/* {ingredients.map((i) => {
                                        return { i };
                                    })} */}
                                    {/* for (let ; i<ingredients.length; i++) {
                                        console.log

                                        
                                    } */}
                                    {/* <br></br> */}
                                    {/* Ingedient(s) à eliminer: */}
                                    {/* <input
                                        id="e1"
                                        type="text"
                                        name="eliminé" */}
                                    {/* // placeholder={"Ingredient(s) à eliminer"} */}
                                    {/* /> */}
                                    <button>Commander</button>
                                </p>

                                {/* <button type="submit" onClick={resetf()}></button> */}
                                {/* onClick={resetf()} */}
                            </div>
                        </article>
                    );
                }
                // if (category === "Petit-déj") {
                //     return (
                //         <article key={id} className="menu-item">
                //             <img src={img} alt={title} className="photo" />
                //             <div className="item-info">
                //                 <header>
                //                     <h4>{title}</h4>
                //                     <h4 className="price">DT{price}</h4>
                //                 </header>
                //                 <p className="item-text">
                //                     {desc} <br></br>
                //                     {/* Ingedient(s) à eliminer: */}
                //                     {/* <input
                //                         id="e1"
                //                         type="text"
                //                         name="eliminé"
                //                         // placeholder={"Ingredient(s) à eliminer"}
                //                     />
                //                     <button>Commander</button> */}
                //                 </p>

                //                 {/* <button type="submit" onClick={resetf()}></button> */}
                //                 {/* onClick={resetf()} */}
                //             </div>
                // </article>
                //     );
                // }
            )}
        </div>
    );
};

export default Menu2;
