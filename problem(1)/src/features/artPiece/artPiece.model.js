// Please don't change the pre-written code
// Import the necessary modules here

export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static db = [];

  static create({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    ArtPiece.db.push(artPiece);
    return artPiece;
  }

  static findAll(query) {
    let results = ArtPiece.db;
  
    // Filter based on query parameters
    if (query) {
      if (query.title) {
        results = results.filter((art) =>
          art.title.toLowerCase().includes(query.title.toLowerCase())
        );
      }
      if (query.artist) {
        results = results.filter((art) =>
          art.artist.toLowerCase().includes(query.artist.toLowerCase())
        );
      }
      if (query.year) {
        results = results.filter((art) => art.year === parseInt(query.year));
      }
    }
  
    return results;
  }
  
  static findOne(id) {
    return ArtPiece.db.find((art) => art.id === parseInt(id)) || null;
  }
  
  static update(id, data) {
    const artPiece = ArtPiece.findOne(id);
    if (!artPiece) {
      return null;
    }
  
    // Update properties
    Object.assign(artPiece, data);
    return artPiece;
  }
  
  static delete(id) {
    const index = ArtPiece.db.findIndex((art) => art.id === parseInt(id));
    if (index === -1) {
      return null;
    }
  
    ArtPiece.db.splice(index, 1);
    return true;
  }
  
}
