const cities = [
   {
      id: 1,
      name: "Buenos Aires",
      country: "Argentina",
      img: "https://i.postimg.cc/brLzWG49/Buenos-Aires.jpg",
      description:
         "Buenos Aires is Argentina’s big, cosmopolitan capital city. Its center is the Plaza de Mayo, lined with stately 19th-century buildings including Casa Rosada, the iconic, balconied presidential palace. Other major attractions include Teatro Colón, a grand 1908 opera house with nearly 2,500 seats, and the modern MALBA museum, displaying Latin American art.",
   },
   {
      id: 2,
      name: "London",
      country: "England",
      img: "https://i.postimg.cc/XYtnR61m/London.jpg",
      description:
         "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.",
   },
   {
      id: 3,
      name: "Paris",
      country: "France",
      img: "https://i.postimg.cc/G3jhHN9T/Paris.jpg",
      description:
         "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
   },
   {
      id: 4,
      name: "Tokyo",
      country: "Japan",
      img: "https://i.postimg.cc/0y4N9wjt/Tokyo.jpg",
      description:
         "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
   },
   {
      id: 5,
      name: "Cairo",
      country: "Egypt",
      img: "https://i.postimg.cc/tJcRyPn8/ElCairo.jpg",
      description:
         "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 187m Cairo Tower affords panoramic city views.",
   },
   {
      id: 6,
      name: "Venice",
      country: "Italy",
      img: "https://i.postimg.cc/htvjFrDz/Venice.jpg",
      description:
         "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs.",
   },
];

const citiesControllers = {
   getCities: (req, res) => {
      res.json({ response: cities });
   },
   getCity: (req, res) => {
      const city = cities.find((city) => city.id === parseInt(req.params.id));
      res.json({ response: city });
   },
};

module.exports = citiesControllers;
