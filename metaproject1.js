/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const someNFT =[];


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (owner, model, brand, price,) {
    const Nft = {
      owner: owner,
      model: model,
      brand: brand,
      price: price,
      
    };
    someNFT.push(Nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i = 0; i < someNFT.length; i++) {
      console.log("\nNFT \t"+ (i + 1));
      console.log("Owner: \t" + someNFT[i].owner);
      console.log("Model:\t" + someNFT[i].model);
      console.log("brand:" + someNFT[i].brand);
      console.log("Price: \t" + someNFT[i].price);
   }
}   

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
 console.log("\nTotal Nfts minted\t" + someNFT.length);
}

// call your functions below this line
mintNFT("Devi singh", "iphone 15 pro", "apple", "100000");
mintNFT("Rahul rao", "galaxy s24 ultra", "sumsang", "100000");
mintNFT("kurmeet", "oneplus 11", "oneplus", "60000");
mintNFT("Ankit", "iphone 14", "apple", "70000");
listNFTs();
getTotalSupply();
