// create an alias called inform to store the console.log function
// When providing user feedback in the terminal use `inform`
// When developing/debugging use `console.log`

process.usableArray = process.argv.slice(2)
  
const { readJSONFile, writeJSONFile } = require('./src/helpers');
const inform = console.log;
const { create, index, show, destroy, edit, score,   } = require('./src/albumsController.js');
const albums = readJSONFile("./data", "albums.json");
//const { addToCart, shoppingCart } = require('./src/path/to/shoppingCart.js');// Adjust the path accordingly


function run() {
let writeToFile = false;
let updatedAlbums = [];

//console.log(process.argv)
  const action = process.argv[2];
  const  album = process.argv[3];
  const discountCode = process.argv[4];
  const shuffleAlbums = process.argv[5];
  const addAlbumsToCart = process.argv[6];


  
  
  switch (action) {

    case "index":
        const albumsView = index(albums);
        //inform(albumsView);
        inform(action, albums,albumsView,);
         break;


    case "create":
      const albumName = process.argv[3];
      const addAlbumsToCart = process.argv[4];
      let shoppingCart = [];
        updatedAlbums = create(albums, album, discountCode, addAlbumsToCart);
        //writeToFile = true;
        writeJSONFile("./data", "albums.json", updatedAlbums);

        const newAlbum = {id: updatedAlbums[updatedAlbums.length - 1].id, name: albumName, price: 0};// Assuming a price of 0 fot simplicity
        shoppingCart.push(newAlbum);
        break;


    case "show":
      const showAction = process.argv[4];
      
      if (showAction === 'shuffle') {

        const shuffledAlbumsInfo = show(albums, album, 'shuffle');
        inform('Shuffled albums:\n${shuffledAlbums}');
      } else if (showAction === 'numberOfDiscountCodes'){
          const numberOfDiscountCodes = show(albums, album, showAction);
           inform(`${numberOfDiscountCodes} albums have discountCodes`);
          } else if (showAction === "idInfo"){
            const idInfo = show(albums, null, "id");
            inform(idInfo);
            } else if (showAction === "yearInfo"){
              const yearInfo = show(albums, null, "year");
              inform(yearInfo);
            } else if (showAction === "priceInCents"){
              const priceInCentsInfo = show(albums,null, "priceInCents");
              inform(priceInCentsInfo); 
             // const shuffledAlbumsInfo = show(albums, null, "shuffle");
            } else(showAction === "allAlbumsInfo");{ 
              const allAlbumsInfo = show(albums, null, "all");
              inform(allAlbumsInfo);
          //console.log(shuffledAlbumsInfo);
         //const albumView = show(albums, album);
         //const numberOfDiscountCodes = show(discountCode);
         //inform(`${numberOfDiscountCodes} albums has discountCodes`)
        // inform(albumView);
            break;


          
      }
    case "update":
        updatedAlbums = edit(albums, album, process.argv[4]);
        writeToFile = true;
        break;



    case "destroy":
        updatedAlbums = destroy(albums, album);
        writeToFile = true;
        break;


    case "score":
        inform(`Current points sum of all albums you've added to your database: ${score(albums)}`);
      break;



    default:
      inform('There was an error.');
  }
if (writeToFile) {
    writeJSONFile('./data', 'albums.json', updatedAlbums);
  }
}



run();








