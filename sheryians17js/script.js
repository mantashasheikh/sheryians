const users = [
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
         card.classList.add("card")  ;

         // create image
         const img = document.createElement("img");
         img.src = user.pic;
         img.classList.add ("bg-img");

         // create blurred layer
         const blurredLayer = document.createElement("div");
         blurredLayer.style.backgroundImage = `url(${user.pic})`
         blurredLayer.classList.add("blurred-layer") ;

         // create content wrapper
         const content = document.createElement("div");
         content.classList.add("content") ;

         // create heading
         const h3 = document.createElement("h3");
         h3.textContent = user.name;

         // create paragraph
         const p = document.createElement("p");
         p.textContent = user.bio;

         // append elements
         content.appendChild(h3);
         content.appendChild(p);

         card.appendChild(img);
         card.appendChild(blurredLayer);
         card.appendChild(content);

         // append card to body or any container
         
         document.querySelector(".cards").appendChild(card);
         // OR: document.querySelector(".container").appendChild(card);


    })

   
}
showUser(users)


let inp = document.querySelector("input")
inp.addEventListener("input" , function(){
    let newUser = users.filter((user)=>{
        return user.name.startsWith(inp.value)
    })


    document.querySelector(".cards").innerHTML = ""
    showUser(newUser)
})