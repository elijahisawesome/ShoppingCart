import smalltoy from '../images/watergun.jpeg'
import bigtoy from "../images/train.jpg"
import darksouls from "../images/game.webp"
import fish from "../images/fish1.webp"
import steak from "../images/new-york-strip.jpg"
import peach from "../images/Peach-Free-Download-PNG.png"
import apple from "../images/apple.png"
import banana from "../images/banana.jpg"
import cannedgoods from "../images/canned-tomato.png"

export default {

    Clothes:{
        "Not Clothes":[
            {
                "id":2,
                "name":"small toy",
                "price":"6.00",
                "img": smalltoy
            },
            {
                "id":3,
                "name":"big toy",
                "price":"24.99",
                "img":bigtoy
            }
        ]
    }
    ,
    Electronics:{
        "Video Games":[
            {
                "id":4,
                "name":"Dark Souls",
                "price":"60.00",
                "img":darksouls
            }

        ]
    },
    Groceries:{
        "Fish":[
            {
                "id":6,
                "name":"green fish",
                "price":"29.50",
                "img":fish
            }
        ],
        "Meat":[
            {
                "id":7,
                "name":"steak",
                "price":"13.99",
                "img":steak
            }
        ],
        "Fruit":[
            {
                "id":0,
                "name":"peach",
                "price":"3.20",
                "img":peach
            },
            {
                "id":1,
                "name":"apple",
                "price":"2.62",
                "img":apple
            },
            {
                "id":5,
                "name":"banana",
                "price":".68",
                "img":banana
            }
        ],
        "Canned Goods":[
            {
                "id":8,
                "name":"canned  tomato",
                "price": ".98",
                "img":cannedgoods
            }
        ]
    }
}