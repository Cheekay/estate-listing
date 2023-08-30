import { placeholderPropertyObj as placeholder } from "./properties/placeholderPropertyObj.js";
import { propertyForSaleArr as properties } from "./properties/propertyForSaleArr.js";

function getPropertyHtml(properties = [placeholder]) {
	return properties
		.map((property) => {
			const { propertyLocation, priceGBP, roomsM2, comment, image } = property;
			const totalSQM = roomsM2.reduce((total, current) => total + current);
			return `
            <section class="card">
                <img src="/images/${image}">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>${priceGBP}</h3>
                    <p>${comment}</p>
                    <h3>The total area is ${totalSQM}sq.m</h3>
                </div>
            </section> 
            `;
		})
		.join("");
}

document.getElementById("container").innerHTML = getPropertyHtml(properties);
