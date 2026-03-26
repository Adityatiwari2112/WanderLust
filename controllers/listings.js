//Require '../models/listing' to use here
const Listing = require("../models/listing");

//'INDEX' Route rendering
module.exports.index = async(req, res) => {    
    const allListings = await Listing.find({});     
    res.render("listings/index.ejs", {allListings});    
};

//'NEW' Route rendering 
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

//'SHOW' Route rendering 
module.exports.showListing = async (req, res) => {     
    let {id} = req.params; 
    const listing = await Listing.findById(id)                   
        .populate({path:"reviews", populate: {path: "author"} })    
        .populate("owner");       
  
    if(!listing){   
        req.flash("error", "Listing you requested for doesn't exist!");   
        return res.redirect("/listings");    
    }
    res.render("listings/show.ejs", {listing});    
};

//'CREATE' Route redirecting 
module.exports.createListing = async (req, res, next) => {  

    const newListing = new Listing(req.body.listing);   
    newListing.owner = req.user._id;    

    // ✅ SAFE CHECK (VERY IMPORTANT)
    if (req.file) {
        let url = req.file.path;
        let filename = req.file.filename;
        newListing.image = { url, filename };
    } else {
        // fallback image
        newListing.image = {
            url: "https://images.unsplash.com/photo-1625505826533-5c80aca7d157",
            filename: "default"
        };
    }

    let savedListing = await newListing.save();   
    console.log(savedListing);

    req.flash("success", "New Listing Created!");   
    res.redirect("/listings");  
};

//'EDIT' Route rendering 
module.exports.renderEditForm = async (req, res) => {     
    let {id} = req.params;                                                      
    const listing = await Listing.findById(id);   

    if(!listing){   
        req.flash("error", "Listing you requested for doesn't exist!");  
        return res.redirect("/listings");    
    }
    let originalImageUrl = listing.image.url;    
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");    
    res.render("listings/edit.ejs", {listing, originalImageUrl});   
};

//'UPDATE' Route redirecting
module.exports.updateListing = async (req, res) => {                                                                                    
    let {id} = req.params; 

    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if(typeof req.file !== "undefined"){
        let url = req.file.path;    
        let filename = req.file.filename;    

        listing.image = {url, filename};  
        await listing.save();    
    }
    req.flash("success", "Listing Updated!"); 
    res.redirect(`/listings/${id}`);   
};

//'DELETE/DESTROY' Route redirecting 
module.exports.deleteListing = async (req, res) => {    
    let {id} = req.params; 

    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");   
    res.redirect("/listings");
};
//  SEARCH LISTINGS
module.exports.searchListings = async (req, res) => {
    console.log("Query:", req.query);

    let { country } = req.query;

    if (!country) {
        console.log("❌ No country received");
        return res.redirect("/listings");
    }

    console.log("✅ Country received:", country);

    const listings = await Listing.find({
        country: { $regex: country, $options: "i" }
    });

    console.log("Results:", listings);

    res.render("listings/searchResults", { listings });
};