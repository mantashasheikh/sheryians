const user = [
    { 
        name : "Amisha Rathore",
        pic : "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg",
        bio : "silent chaos in a loud world | not for everyone"
    },
    { 
        name : "Riya Sharma",
        pic : "https://img.freepik.com/free-photo/young-woman-standing-road-autumn_23-2148887633.jpg?size=626&ext=jpg",
        bio : "finding peace in little moments 🌿"
    },
    { 
        name : "Ananya Verma",
        pic : "https://img.freepik.com/free-photo/beautiful-girl-standing-field-sunset_23-2148789846.jpg?size=626&ext=jpg",
        bio : "dream big, stay grounded ✨"
    },
    { 
        name : "Sneha Kapoor",
        pic : "https://img.freepik.com/free-photo/portrait-happy-young-woman_23-2148789931.jpg?size=626&ext=jpg",
        bio : "soft heart, strong mind 💫"
    },
    { 
        name : "Kritika Mehta",
        pic : "https://img.freepik.com/free-photo/woman-wearing-hat-smiling-outdoors_23-2149051839.jpg?size=626&ext=jpg",
        bio : "collecting sunsets, not things 🌅"
    },
    { 
        name : "Pooja Singh",
        pic : "https://img.freepik.com/free-photo/young-woman-looking-away-city_23-2148887596.jpg?size=626&ext=jpg",
        bio : "learning, unlearning, becoming 🌸"
    }
]

function showUser(arr){
    arr.forEach(function(user){
        // create main card
         const card = document.createElement("div");
         card.className = "card";

         // create image
         const img = document.createElement("img");
         img.src = "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg";
         img.alt = "girl image";
         img.className = "bg-img";

         // create blurred layer
         const blurredLayer = document.createElement("div");
         blurredLayer.className = "blurred-layer";

         // create content wrapper
         const content = document.createElement("div");
         content.className = "content";

         // create heading
         const h3 = document.createElement("h3");
         h3.textContent = "user 123";

         // create paragraph
         const p = document.createElement("p");
         p.textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia enim et dolore atque .";

         // append elements
         content.appendChild(h3);
         content.appendChild(p);

         card.appendChild(img);
         card.appendChild(blurredLayer);
         card.appendChild(content);

         // append card to body or any container
         document.body.appendChild(card);
         // OR: document.querySelector(".container").appendChild(card);


    })

   
}
showUser(user)