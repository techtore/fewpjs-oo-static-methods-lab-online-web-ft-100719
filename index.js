class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.substring(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  
  }

  static titleize(string){
    //define words not to capitalize
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let capitalizedString = Formatter.capitalize(string)
    //split the capitalized string at space and iterate over each word, then join words back at space
    return capitalizedString.split(' ').map(word => {
      //if the word is an exceptions word, return that word without capitalizing
      if (exceptions.includes(word)) {
        return word
      }
      else {
        //otherwise, capitalize the word
        return Formatter.capitalize(word)
      }
    }).join(' ')
   
  }

  //add static methods here
}