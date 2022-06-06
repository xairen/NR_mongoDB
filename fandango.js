connection = new Mongo("localhost:27017");
db = connection.getDB("Fandango");
collection = db.getCollection("Srinivasan");


print("\nInserting documents ---------------------\n")
doc = ({theatreID: "001",
    name: "Cinemark Tinsel Town USA and MAX", 
    address: "2291 Buffalo Road, Rochester, NY 14624",
    movies: [{id:"101", 
            movieName: "Bangarraju(2022)", 
            rating: " ", 
            duration: "2 hr 30 min", 
            genre: ["Drama"], 
            timings: ["8:00:pm"]},
            
            {id:"102",
            movieName: "Belle(2022)",
            rating: "PG",
            duration: "2hr 1min",
            genre: ["Animated", "Drama"],
            timings: ["7:00pm", "10:00pm"]},
            
            {id:"103",
            movieName: "Scream(2022)",
            rating: "R",
            duration: "1hr 54min",
            genre: ["Horror", "Suspense/Thriller"],
            timings: ["7:00pm", "7:30pm", "8:30pm", "9:05pm", "9:50pm"]}]
})

collection.insert(doc)

doc = ({theatreID: "002",
    name: "Regal Greece Ridge", 
    address: "176 Greece Ridge Center Dr, Rochester, NY 14626",
    movies: [{id:"201",
            movieName: "Scream(2022)",
            rating: "R",
            duration: "1hr 54min",
            genre: ["Horror", "Suspense/Thriller"],
            timings: ["7:00pm", "8:00pm"]},
            
            {id:"202",
            movieName: "The 355",
            rating: "PG-13",
            duration: "2hr 2min",
            genre: ["Action/Adventure", "Suspense/Thriller"],
            timings: ["4:05pm", "7:15pm"]},
            
            {id:"203",
            movieName: "A Journal For Jordan",
            rating: "PG-12",
            duration: "2hr 11min",
            genre: ["Drama", "Romance"],
            timings: ["4:25pm", "7:45pm"]}]
})

collection.insert(doc)

//Display all documents in database
print("Here are the movies ----------------------->>\n")
cursor = collection.find()
while(cursor.hasNext()) {
    doc = cursor.next();
    printjson(doc);
}

