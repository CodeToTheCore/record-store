const { nanoid } = require('nanoid');
const albumPoints = require('../data/albumPoints.json');
const { readJSONFile, writeJSONFile } = require('./helpers')
/** create function with parameters(albums(an array of album objects),albumName(Name of the new album),status: (A string("true" or "false")representing the status of a discount code for the album))) */
const create = (albums, albumName, status) => {
  //defaultPoints:A varible holding the default points vaule(10 in this case)
  const defaultPoints = 10;
    const album = {
      name: albumName,
      //nanoid(4), creates a new album object with a generated ID using 'nanoid'    
      id: nanoid(4),
      //line checks if `albumName exist in the albumPoints object.
      points: albumPoints[albumName] || defaultPoints,// if the album you create does not exist in the resource object of albums, it will be given a default points value of 10
      //sets the album name and discount code based on the provided parameters.
      discountCode: status === "true"
    };
     let shoppingCart = [
      {id: 1, name: 'Item 1', price: 10},
      {id: 2, name: 'Item 2', price: 20},
      {id: 3, name: 'Item 3', price: 30}
     ];

     function emptyCart() {
      shoppingCart = [];
     }
      function addAlbumToCart(item){
        shoppingCart.push(item);
      }
      const decision = 'empty';

      if (decision === 'empty') {
        return ('Before emptying the cart:', shoppingCart);{
          inform ('emptyCart');
        }
          console.log('After emptying the cart:', shoppingCart);

        } else if (decision === 'add') {
        const newItem = {id: 4, name: 'New Item', price: 15};
        return ('Before adding an item to the cart:',shoppingCart);{
          emptyCart();
        }
         console.log('After emptying the cart:', shoppingCart);
          
         //copy and paste template of else if
      //} else if (decision ===  '  ') {
      //  const newItem = { id: , name: 'New Item',price:  };
       // console.log('Before adding an item to the cart:', shoppingCart);
       // addItemtoCart(newItem);
       // console.log('After adding an item to the cart:', shoppingCart);
      //} else {
      //  console.log('Invalid decisions. Plese choose "empty" or "add".');
      }

      
   
    //pushes the new album object into the albums array 
    albums.push(album);
    //returns the updated albums array to the index create file to run it!!
    return albums;
  }



   // Controllers index function take parameter (albums) as an array of album objects.
  function index(albums) {    
    //return albums.map((album) => album.id + ' ' + album.name).join('\n');
    //logs a header using inform in terminal call before it displays items!
    inform(`ID        Album List\n_________________`);
    return albums.map((album) => `${album.id} ${album.name} ${album.genre} ${album.title} ${album.artist} ${album.year} ${album.priceInCents} `).join ("/n");
    //.maps each album to a formatted string including various properties
    // .join: it then joins the formatted strings with .join("/n") as you can see in results / between each.
  }




   // show function: its takes two parameters albums and albumId, albums: and array of album objects and albumID: ID of the album.
  function show(albums, albumId, scenario) {
    const exclusiveAlbums = albums.filter((album) => album.discountCode === true);
      
      
    //function to shuffle
    // const array = (albums) => {
    const shuffleArray = (albums) => {
      for(let i = shuffleArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
       // [array[i], array[j]] = [array[j], array[i]];

 }
      return shuffleArray;
    }
    //const scenario = 'albums'
    switch (scenario) {
      case "all":
        return exclusiveAlbums.map((album) => `${album.id} ${album.name} ${album.title} ${album.year} ${album.genre} ${album.artist}`).join("\n");
         break;
        case "titleAndGenre":
          return exclusiveAlbums.map((album) => `${album.id} ${album.title} ${album.genre}`).join("\n");

          case "id":
            return exclusiveAlbums.map((album) => album.id).join("\n");
            
            case "year":
              return exclusiveAlbums.map((album) => album.year).join("\n");

              case "shuffle":
                
              //const shuffledAlbums = shuffleArray(exclusiveAlbums.map((album) => album.name));
                return exclusiveAlbums.join("\n");

                default:
                  return "Invalid scenario";
                }
              }
                
    //return albums.filter(({numberOfDiscounts}) => numberOfDiscounts === true).length;
    //const album = albums.find((album) => album.id === albumId);
    //return albums.id + ' ' + albums.name + ' ' + albums.points + ' points';
    
   //return albums.map((album) => `${album.id} ${album.name} ${album.title} ${album.year} ${album.genre} ${album.artist}`).join("/n");
  
 
  const inform = console.log;




//destroy function
function destroy(albums, albumId, property, value,) {
  //destroy(albums, 'title', 'Some Title'); 
  //destroy(albums, 'priceInCents', 999);
  //destroy(albums, 'someOtherProperty', 'Some Value');
  //const index = albums.findIndex((album) => album[id] === albumId);
  const index = albums.findIndex((album) => album[property] === value);
  if (index > -1) {
    albums.splice(index, 1);
    inform('album successfully removed from collection');
    return albums;
  } else {
    inform('album not found. No action taken');
    return albums;
  }
}



//
function edit(albums, albumId, updatedAlbum) {
    const index = albums.findIndex((album) => album.id === albumId);
    if (index > -1) {
        albums[index].id = albumId;
        albums[index].name = updatedAlbum;
        albums[index].points = albumPoints[updatedAlbum] || 10;
      inform('Album successfully updated');
      return albums;
    } else {
      inform('Album not found. No action taken');
      return albums;
    }
  }

  function score(albums) {
    return albums.reduce((acc, current) => acc + current.points, 0);
  }

  module.exports = { 
    create,
    index,
    show,
    destroy,
    edit,
    score
 };