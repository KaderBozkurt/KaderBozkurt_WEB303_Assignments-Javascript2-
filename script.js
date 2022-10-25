/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here
    class ContentItem {
      constructor(id, name, genre,description) {
        this.id = id;
        this.name = name;
      this.genre = genre;
      this.description = description;
      }
  
     
      updateContentItem(name,description,genre){
        if((name!=null) || (description!=null) || (genre!=null)){
            this.name=name;
            this.description=description;
            this.genre=genre;
        }
    }
  
      toString() {
        const ContentItemHtml = `
          <div class=" content-item-wrapper" id="content-item-0-${this.id}" style="border: black 1px solid; padding:5px; margin-bottom:8px;">
              <h4>${this.name}</h4>
              <p>${this.description}</p>
              <div>${this.genre}</div>
          </div>
        `;
        return ContentItemHtml;
      }
    }
  
    const moviesArray = [
      new ContentItem(
        0,
        "Black Adam",
        "Action, Fantasy, Science Fiction",
        "From New Line Cinema, Dwayne Johnson stars in the action adventure “Black Adam.”"
      ),
      new ContentItem(
        1,
        "Ticket to Paradise",
        "Comedy, Romance",
        "A divorced couple teams up and travels to Bali to stop their daughter from making the same mistake they think they made 25 years ago"
      ),
      new ContentItem(
        2,
        "Home Coming (Mandarin w EST)",
        " Action ",
        "In Numiya, the war breaks out. Dawei Zong (YI ZHANG), the former diplomat of the People’s Republic of China, and Lang Cheng (KARRY WANG), the new attaché in the Ministry of Foreign Affairs, are appointed to carry out the evacuation of overseas Chinese nationals. "
      ),
      new ContentItem(
        3,
        "Descendant",
        "Documentary ",
        "Directed by Margaret Brown, the documentary focuses on members of Africatown, a small community in Alabama, as they share their personal stories and community history as descendants of the Clotilda, the last known ship illegally carrying enslaved Africans to the United States."
      ),
      new ContentItem(
        4,
        "Woman King, The",
        "Action ",
        "The Woman King is the remarkable story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen. Inspired by true events, The Woman King follows the emotionally epic journey of General Nanisca (Oscar®-winner Viola Davis) as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life. Some things are worth fighting for…"
      ),
    ];
  
    for (const movie of moviesArray) {
      const html = movie.toString();
      $("div#content-item-list").append(html);
    }
  });