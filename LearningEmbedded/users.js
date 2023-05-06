let db;

let data =[
    {
        name:"Tripti",
        age:20,
        hobbies:["Dancing","Cooking","Singing"]
    },
    {
        name:"Ujjwal",
        age:19,
        hobbies:["Badminton","Cooking"]
    }
]

db.users.insertMany(data);

let products =[
    {
      _id: ObjectId("644e2edcfcde93b7648337bc"),
      name: 'Chai',
      price: 20,
      description: 'Sasti chaai, ekdum swaad'
    },
    {
      _id: ObjectId("644e2edcfcde93b7648337bd"),
      name: 'Coffee',
      price: 30,
      description: 'Nescafe dedo'
    },
    {
      _id: ObjectId("644e2edcfcde93b7648337be"),
      name: 'Books',
      price: 120,
      description: 'Dooglapaan'
    }
  ]

db.users.updateOne(
    {
        name:'Ujjwal'
    },
    {
        $set: {
            products:[
                ObjectId("644e2edcfcde93b7648337bc"),
                ObjectId("644e2edcfcde93b7648337bd")
            ]
        }
    })

db.users.updateOne(
    {
        name:'Tripti'
    },
    {
        $set: {
            products:[
                ObjectId("644e2edcfcde93b7648337be"),
                ObjectId("644e2edcfcde93b7648337bd")
            ]
        }
    })

db.users.findOne({name:'Tripti'}).products;
//this will give only the projections

//PROJETCIONS- To pick the fields that we want
//db.users.find({},PROJECTIONS);
db.users.find({}, {name:1,_id:0,hobbies:1});

db.users.aggregate({
    $lookup:{
        from: "products",
        localField: "products",
        foreignField: "_id",
        as:"myProducts"
    }
})